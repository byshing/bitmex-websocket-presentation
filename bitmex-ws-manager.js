/**
 * BitMEX WebSocket Data Manager
 * Example implementation demonstrating the concepts from the presentation
 */

class BitMEXWebSocketManager {
    constructor() {
        this.ws = null;
        this.tables = new Map();
        this.tableConfigs = new Map();
        this.eventListeners = new Map();
        
        // Initialize table data stores
        this.initializeDataStores();
    }

    initializeDataStores() {
        this.tables.set('execution', []);
        this.tables.set('position', new Map());
        this.tables.set('margin', new Map());
        this.tables.set('orderBookL2', {
            bids: new Map(),
            asks: new Map()
        });
    }

    connect(apiKey = null, apiSecret = null) {
        const url = 'wss://ws.bitmex.com/realtime';
        this.ws = new WebSocket(url);
        
        this.ws.on('open', () => {
            console.log('Connected to BitMEX WebSocket');
            this.emit('connected');
        });
        
        this.ws.on('message', (data) => {
            try {
                const message = JSON.parse(data);
                this.handleMessage(message);
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        });
        
        this.ws.on('close', () => {
            console.log('Disconnected from BitMEX WebSocket');
            this.emit('disconnected');
        });
        
        this.ws.on('error', (error) => {
            console.error('WebSocket error:', error);
            this.emit('error', error);
        });
    }

    subscribe(feeds) {
        if (!Array.isArray(feeds)) {
            feeds = [feeds];
        }
        
        const message = {
            op: 'subscribe',
            args: feeds
        };
        
        this.ws.send(JSON.stringify(message));
        console.log('Subscribed to:', feeds);
    }

    handleMessage(message) {
        if (message.table) {
            this.handleTableMessage(message);
        } else if (message.info) {
            console.log('Info:', message.info);
        } else if (message.error) {
            console.error('Error:', message.error);
        }
    }

    handleTableMessage(message) {
        const { table, action, data, keys, types, foreignKeys, attributes, filter } = message;
        
        // Store table configuration from PARTIAL message
        if (action === 'partial') {
            this.tableConfigs.set(table, {
                keys: keys || [],
                types: types || {},
                foreignKeys: foreignKeys || {},
                attributes: attributes || {},
                filter: filter || {}
            });
        }

        switch (action) {
            case 'partial':
                this.handlePartial(table, data);
                break;
            case 'insert':
                this.handleInsert(table, data);
                break;
            case 'update':
                this.handleUpdate(table, data);
                break;
            case 'delete':
                this.handleDelete(table, data);
                break;
        }

        // Emit table-specific events
        this.emit(`${table}:${action}`, data);
        this.emit(`${table}:change`, this.tables.get(table));
    }

    handlePartial(table, data) {
        console.log(`PARTIAL received for ${table}, ${data.length} records`);
        
        switch (table) {
            case 'execution':
                // For executions, just store the initial data
                this.tables.set(table, [...data]);
                break;
                
            case 'position':
            case 'margin':
                // For state feeds, use Map with symbol as key
                const stateMap = new Map();
                data.forEach(record => {
                    stateMap.set(record.symbol, record);
                });
                this.tables.set(table, stateMap);
                break;
                
            case 'orderBookL2':
                // For order book, organize by side and price
                const orderBook = { bids: new Map(), asks: new Map() };
                data.forEach(level => {
                    const side = level.side === 'Buy' ? 'bids' : 'asks';
                    orderBook[side].set(level.price, level);
                });
                this.tables.set(table, orderBook);
                break;
                
            default:
                this.tables.set(table, [...data]);
        }
    }

    handleInsert(table, data) {
        console.log(`INSERT received for ${table}, ${data.length} records`);
        
        switch (table) {
            case 'execution':
                // Infinite insert - add to array with size limit
                const executions = this.tables.get(table);
                executions.push(...data);
                
                // Maintain maximum history size (e.g., 1000 records)
                const maxSize = 1000;
                if (executions.length > maxSize) {
                    executions.splice(0, executions.length - maxSize);
                }
                break;
                
            case 'orderBookL2':
                // Insert new order book levels
                const orderBook = this.tables.get(table);
                data.forEach(level => {
                    const side = level.side === 'Buy' ? 'bids' : 'asks';
                    orderBook[side].set(level.price, level);
                });
                break;
                
            default:
                // Generic insert handling
                const tableData = this.tables.get(table) || [];
                tableData.push(...data);
                this.tables.set(table, tableData);
        }
    }

    handleUpdate(table, data) {
        console.log(`UPDATE received for ${table}, ${data.length} records`);
        const config = this.tableConfigs.get(table);
        
        switch (table) {
            case 'position':
            case 'margin':
                // State update feeds - merge with existing records
                const stateMap = this.tables.get(table);
                data.forEach(update => {
                    const existing = stateMap.get(update.symbol);
                    if (existing) {
                        Object.assign(existing, update);
                    }
                });
                break;
                
            case 'orderBookL2':
                // Update order book levels
                const orderBook = this.tables.get(table);
                data.forEach(update => {
                    const side = update.side === 'Buy' ? 'bids' : 'asks';
                    const existing = orderBook[side].get(update.price);
                    if (existing) {
                        Object.assign(existing, update);
                    }
                });
                break;
                
            default:
                // Generic update using keys
                if (config && config.keys) {
                    const tableData = this.tables.get(table);
                    data.forEach(update => {
                        const existing = this.findRecordByKeys(tableData, update, config.keys);
                        if (existing) {
                            Object.assign(existing, update);
                        }
                    });
                }
        }
    }

    handleDelete(table, data) {
        console.log(`DELETE received for ${table}, ${data.length} records`);
        
        switch (table) {
            case 'position':
            case 'margin':
                // Remove from state map
                const stateMap = this.tables.get(table);
                data.forEach(deleteData => {
                    stateMap.delete(deleteData.symbol);
                });
                break;
                
            case 'orderBookL2':
                // Remove order book levels
                const orderBook = this.tables.get(table);
                data.forEach(deleteData => {
                    const side = deleteData.side === 'Buy' ? 'bids' : 'asks';
                    orderBook[side].delete(deleteData.price);
                });
                break;
                
            default:
                // Generic delete using keys
                const config = this.tableConfigs.get(table);
                if (config && config.keys) {
                    const tableData = this.tables.get(table);
                    data.forEach(deleteData => {
                        const index = this.findRecordIndexByKeys(tableData, deleteData, config.keys);
                        if (index !== -1) {
                            tableData.splice(index, 1);
                        }
                    });
                }
        }
    }

    findRecordByKeys(tableData, record, keys) {
        if (Array.isArray(tableData)) {
            return tableData.find(item => {
                return keys.every(key => item[key] === record[key]);
            });
        }
        return null;
    }

    findRecordIndexByKeys(tableData, record, keys) {
        if (Array.isArray(tableData)) {
            return tableData.findIndex(item => {
                return keys.every(key => item[key] === record[key]);
            });
        }
        return -1;
    }

    // Event system
    on(event, listener) {
        if (!this.eventListeners.has(event)) {
            this.eventListeners.set(event, []);
        }
        this.eventListeners.get(event).push(listener);
    }

    emit(event, data) {
        const listeners = this.eventListeners.get(event);
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }

    // Utility methods
    getPositions() {
        return Array.from(this.tables.get('position')?.values() || []);
    }

    getExecutions(limit = 100) {
        const executions = this.tables.get('execution') || [];
        return executions.slice(-limit);
    }

    getOrderBook(symbol) {
        const orderBook = this.tables.get('orderBookL2');
        if (!orderBook) return null;
        
        // Filter by symbol and sort
        const bids = Array.from(orderBook.bids.values())
            .filter(level => level.symbol === symbol)
            .sort((a, b) => b.price - a.price);
            
        const asks = Array.from(orderBook.asks.values())
            .filter(level => level.symbol === symbol)
            .sort((a, b) => a.price - b.price);
            
        return { bids, asks };
    }

    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// Usage example
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BitMEXWebSocketManager;
} else {
    // Browser usage example
    const wsManager = new BitMEXWebSocketManager();
    
    // Set up event listeners
    wsManager.on('connected', () => {
        console.log('WebSocket connected!');
        
        // Subscribe to feeds
        wsManager.subscribe([
            'execution:XBTUSD',
            'position',
            'margin',
            'orderBookL2:XBTUSD'
        ]);
    });
    
    wsManager.on('position:change', (positions) => {
        console.log('Positions updated:', wsManager.getPositions());
    });
    
    wsManager.on('execution:insert', (executions) => {
        console.log('New executions:', executions);
    });
    
    wsManager.on('orderBookL2:change', () => {
        const orderBook = wsManager.getOrderBook('XBTUSD');
        if (orderBook) {
            console.log('Order book updated:', {
                bestBid: orderBook.bids[0]?.price,
                bestAsk: orderBook.asks[0]?.price
            });
        }
    });
    
    // Connect
    wsManager.connect();
}
