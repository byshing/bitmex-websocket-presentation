import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import CodeBlock from './CodeBlock'
import DataFlowDiagram from './DataFlowDiagram'
import OperationExample from './OperationExample'

const PresentationContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const SlideContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  text-align: center;
  background: ${props => props.background || 'transparent'};
`

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 0.5em;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
`

const Subtitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
  color: #ffd700;
`

const SectionTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 1em;
  color: #ffd700;
  text-align: left;
  width: 100%;
`

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: left;
`

const BulletPoint = styled.li`
  font-size: 1.2em;
  margin: 0.8em 0;
  list-style: none;
  position: relative;
  padding-left: 2em;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #ffd700;
    font-size: 0.8em;
    top: 0.1em;
  }
`

const Navigation = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 1000;
`

const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 215, 0, 0.5);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #ffd700;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const SlideCounter = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.3);
`

const slides = [
  {
    id: 'title',
    component: 'TitleSlide'
  },
  {
    id: 'introduction',
    component: 'IntroductionSlide'
  },
  {
    id: 'websocket-overview',
    component: 'WebSocketOverviewSlide'
  },
  {
    id: 'operations-overview',
    component: 'OperationsOverviewSlide'
  },
  {
    id: 'partial-operation',
    component: 'PartialOperationSlide'
  },
  {
    id: 'partial-fields',
    component: 'PartialFieldsSlide'
  },
  {
    id: 'insert-operation',
    component: 'InsertOperationSlide'
  },
  {
    id: 'update-operation',
    component: 'UpdateOperationSlide'
  },
  {
    id: 'delete-operation',
    component: 'DeleteOperationSlide'
  },
  {
    id: 'feed-types',
    component: 'FeedTypesSlide'
  },
  {
    id: 'infinite-insert',
    component: 'InfiniteInsertSlide'
  },
  {
    id: 'state-update',
    component: 'StateUpdateSlide'
  },
  {
    id: 'orderbook-feeds',
    component: 'OrderBookSlide'
  },
  {
    id: 'implementation',
    component: 'ImplementationSlide'
  },
  {
    id: 'best-practices',
    component: 'BestPracticesSlide'
  },
  {
    id: 'conclusion',
    component: 'ConclusionSlide'
  }
]

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, nextSlide, prevSlide])

  const renderSlide = () => {
    const slide = slides[currentSlide]
    
    switch (slide.component) {
      case 'TitleSlide':
        return <TitleSlide />
      case 'IntroductionSlide':
        return <IntroductionSlide />
      case 'WebSocketOverviewSlide':
        return <WebSocketOverviewSlide />
      case 'OperationsOverviewSlide':
        return <OperationsOverviewSlide />
      case 'PartialOperationSlide':
        return <PartialOperationSlide />
      case 'PartialFieldsSlide':
        return <PartialFieldsSlide />
      case 'InsertOperationSlide':
        return <InsertOperationSlide />
      case 'UpdateOperationSlide':
        return <UpdateOperationSlide />
      case 'DeleteOperationSlide':
        return <DeleteOperationSlide />
      case 'FeedTypesSlide':
        return <FeedTypesSlide />
      case 'InfiniteInsertSlide':
        return <InfiniteInsertSlide />
      case 'StateUpdateSlide':
        return <StateUpdateSlide />
      case 'OrderBookSlide':
        return <OrderBookSlide />
      case 'ImplementationSlide':
        return <ImplementationSlide />
      case 'BestPracticesSlide':
        return <BestPracticesSlide />
      case 'ConclusionSlide':
        return <ConclusionSlide />
      default:
        return <TitleSlide />
    }
  }

  return (
    <PresentationContainer>
      <SlideCounter>
        {currentSlide + 1} / {slides.length}
      </SlideCounter>
      
      <Fade key={currentSlide}>
        {renderSlide()}
      </Fade>

      <Navigation>
        <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
          ← Previous
        </NavButton>
        <NavButton onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          Next →
        </NavButton>
      </Navigation>
    </PresentationContainer>
  )
}

// Individual slide components
const TitleSlide = () => (
  <SlideContainer>
    <Zoom>
      <Title>BitMEX WebSocket</Title>
    </Zoom>
    <Slide direction="up" delay={300}>
      <Subtitle>Data Types & State Management</Subtitle>
    </Slide>
    <Fade delay={600}>
      <p style={{ fontSize: '1.2em', opacity: 0.8, marginTop: '2em' }}>
        Understanding real-time data streams and state synchronization
      </p>
    </Fade>
  </SlideContainer>
)

const IntroductionSlide = () => (
  <SlideContainer>
    <SectionTitle>What is BitMEX WebSocket?</SectionTitle>
    <Content>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Slide direction="left" cascade damping={0.2}>
          <BulletPoint>Real-time streaming data from BitMEX exchange</BulletPoint>
          <BulletPoint>Low-latency updates for trading applications</BulletPoint>
          <BulletPoint>Efficient state synchronization mechanism</BulletPoint>
          <BulletPoint>Various data types: orders, positions, executions, market data</BulletPoint>
        </Slide>
      </ul>
    </Content>
  </SlideContainer>
)

const WebSocketOverviewSlide = () => (
  <SlideContainer>
    <SectionTitle>WebSocket Connection Overview</SectionTitle>
    <Content>
      <Fade>
        <CodeBlock language="javascript">
{`const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.bitmex.com/realtime');

ws.on('open', () => {
    // Subscribe to data feeds
    ws.send(JSON.stringify({
        op: 'subscribe',
        args: ['orderBookL2:XBTUSD', 'execution:XBTUSD']
    }));
});

ws.on('message', (data) => {
    const message = JSON.parse(data);
    handleMessage(message);
});`}
        </CodeBlock>
      </Fade>
    </Content>
  </SlideContainer>
)

const OperationsOverviewSlide = () => (
  <SlideContainer>
    <SectionTitle>WebSocket Data Operation Types</SectionTitle>
    <Content>
      <DataFlowDiagram />
    </Content>
  </SlideContainer>
)

const PartialOperationSlide = () => (
  <SlideContainer>
    <SectionTitle>PARTIAL - Initial Data Snapshot</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>First message received after subscription</BulletPoint>
              <BulletPoint>Contains complete current state</BulletPoint>
              <BulletPoint>Establishes baseline for incremental updates</BulletPoint>
            </Slide>
          </ul>
        </div>
        <Fade delay={400}>
          <OperationExample type="partial" />
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const PartialFieldsSlide = () => (
  <SlideContainer>
    <SectionTitle>Understanding PARTIAL Fields</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <Slide direction="left" cascade damping={0.1}>
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffd700' }}>keys</strong>: Unique identifiers
            <CodeBlock language="json" small>{"\"keys\": [\"symbol\", \"id\", \"side\"]"}</CodeBlock>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffd700' }}>types</strong>: Data type definitions
            <CodeBlock language="json" small>{"\"types\": {\"symbol\": \"symbol\", \"id\": \"long\"}"}</CodeBlock>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffd700' }}>foreignKeys</strong>: References to other tables
            <CodeBlock language="json" small>{"\"foreignKeys\": {\"symbol\": \"instrument\"}"}</CodeBlock>
          </div>
        </Slide>
        
        <Slide direction="right" cascade damping={0.1}>
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffd700' }}>attributes</strong>: Special properties
            <CodeBlock language="json" small>{"\"attributes\": {\"symbol\": \"grouped\"}"}</CodeBlock>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#ffd700' }}>filter</strong>: Applied filters
            <CodeBlock language="json" small>{"\"filter\": {\"symbol\": \"XBTUSD\"}"}</CodeBlock>
          </div>
        </Slide>
      </div>
    </Content>
  </SlideContainer>
)

const InsertOperationSlide = () => (
  <SlideContainer>
    <SectionTitle>INSERT - Adding New Records</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>Adds new records to the dataset</BulletPoint>
              <BulletPoint>Common in execution feeds, new orders</BulletPoint>
              <BulletPoint>Use keys to determine insertion point</BulletPoint>
            </Slide>
          </ul>
          <Fade delay={600}>
            <OperationExample type="insert" />
          </Fade>
        </div>
        <Fade delay={400}>
          <CodeBlock language="javascript">
{`function handleInsert(table, data) {
    data.forEach(record => {
        if (table === 'execution') {
            executionHistory.push(record);
            updateTradeStatistics(record);
        } else if (table === 'orderBookL2') {
            insertOrderBookLevel(record);
        }
    });
}`}
          </CodeBlock>
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const UpdateOperationSlide = () => (
  <SlideContainer>
    <SectionTitle>UPDATE - Modifying Existing Records</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>Updates existing records by key</BulletPoint>
              <BulletPoint>Only modified fields are included</BulletPoint>
              <BulletPoint>Common for positions, margins, order book</BulletPoint>
            </Slide>
          </ul>
          <Fade delay={600}>
            <OperationExample type="update" />
          </Fade>
        </div>
        <Fade delay={400}>
          <CodeBlock language="javascript">
{`function handleUpdate(table, data, keys) {
    data.forEach(updateData => {
        const existing = findRecordByKeys(table, updateData, keys);
        if (existing) {
            Object.assign(existing, updateData);
            
            if (table === 'position') {
                updatePositionDisplay(existing);
            }
        }
    });
}`}
          </CodeBlock>
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const DeleteOperationSlide = () => (
  <SlideContainer>
    <SectionTitle>DELETE - Removing Records</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>Removes records identified by keys</BulletPoint>
              <BulletPoint>Common for cancelled orders, filled order book levels</BulletPoint>
              <BulletPoint>Only key fields are provided</BulletPoint>
            </Slide>
          </ul>
          <Fade delay={600}>
            <OperationExample type="delete" />
          </Fade>
        </div>
        <Fade delay={400}>
          <CodeBlock language="javascript">
{`function handleDelete(table, data, keys) {
    data.forEach(deleteData => {
        const index = findRecordIndexByKeys(table, deleteData, keys);
        if (index !== -1) {
            const record = tableData[table].splice(index, 1)[0];
            
            if (table === 'orderBookL2') {
                removeOrderBookLevel(record);
            }
        }
    });
}`}
          </CodeBlock>
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const FeedTypesSlide = () => (
  <SlideContainer>
    <SectionTitle>Types of WebSocket Feeds</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '40px' }}>
        <Slide direction="up" cascade damping={0.2}>
          <div style={{ background: 'rgba(255, 215, 0, 0.1)', border: '2px solid #ffd700', borderRadius: '15px', padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '3em', marginBottom: '10px' }}>📈</div>
            <h4 style={{ color: '#ffd700', marginBottom: '10px' }}>Infinite Insert</h4>
            <p>Execution, Trade</p>
            <small>Continuous new records</small>
          </div>
          
          <div style={{ background: 'rgba(0, 255, 0, 0.1)', border: '2px solid #00ff00', borderRadius: '15px', padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '3em', marginBottom: '10px' }}>🔄</div>
            <h4 style={{ color: '#00ff00', marginBottom: '10px' }}>State Update</h4>
            <p>Position, Margin</p>
            <small>Few records, frequent updates</small>
          </div>
          
          <div style={{ background: 'rgba(0, 150, 255, 0.1)', border: '2px solid #0096ff', borderRadius: '15px', padding: '30px', textAlign: 'center' }}>
            <div style={{ fontSize: '3em', marginBottom: '10px' }}>📊</div>
            <h4 style={{ color: '#0096ff', marginBottom: '10px' }}>Order Book</h4>
            <p>OrderBookL2</p>
            <small>Insert/Update/Delete mix</small>
          </div>
        </Slide>
      </div>
    </Content>
  </SlideContainer>
)

const InfiniteInsertSlide = () => (
  <SlideContainer>
    <SectionTitle>Infinite Insert Feeds</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h4 style={{ color: '#ffd700', marginBottom: '20px' }}>Characteristics:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>Primarily INSERT operations</BulletPoint>
              <BulletPoint>Historical data grows continuously</BulletPoint>
              <BulletPoint>Each record represents a distinct event</BulletPoint>
              <BulletPoint>Examples: execution, trade</BulletPoint>
            </Slide>
          </ul>
        </div>
        <Fade delay={400}>
          <CodeBlock language="javascript">
{`class ExecutionManager {
    constructor(maxHistorySize = 1000) {
        this.executions = [];
        this.maxHistorySize = maxHistorySize;
    }

    handleMessage(message) {
        if (message.action === 'insert') {
            this.executions.push(...message.data);
            
            // Maintain size limit
            if (this.executions.length > this.maxHistorySize) {
                this.executions = this.executions.slice(-this.maxHistorySize);
            }
            
            this.processNewExecutions(message.data);
        }
    }
}`}
          </CodeBlock>
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const StateUpdateSlide = () => (
  <SlideContainer>
    <SectionTitle>State Update Feeds</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h4 style={{ color: '#ffd700', marginBottom: '20px' }}>Characteristics:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>Few records (often just 1-3 per symbol)</BulletPoint>
              <BulletPoint>Frequent UPDATE operations</BulletPoint>
              <BulletPoint>Represents current state</BulletPoint>
              <BulletPoint>Examples: position, margin, wallet</BulletPoint>
            </Slide>
          </ul>
        </div>
        <Fade delay={400}>
          <CodeBlock language="javascript">
{`class PositionManager {
    constructor() {
        this.positions = new Map();
    }

    handleMessage(message) {
        switch (message.action) {
            case 'partial':
                message.data.forEach(pos => {
                    this.positions.set(pos.symbol, pos);
                });
                break;
                
            case 'update':
                message.data.forEach(update => {
                    const existing = this.positions.get(update.symbol);
                    if (existing) {
                        Object.assign(existing, update);
                        this.notifyPositionChange(existing);
                    }
                });
                break;
        }
    }
}`}
          </CodeBlock>
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const OrderBookSlide = () => (
  <SlideContainer>
    <SectionTitle>Order Book Feeds</SectionTitle>
    <Content>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h4 style={{ color: '#ffd700', marginBottom: '20px' }}>Characteristics:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <Slide direction="left" cascade damping={0.2}>
              <BulletPoint>Mixed operations: INSERT, UPDATE, DELETE</BulletPoint>
              <BulletPoint>Requires sorted maintenance</BulletPoint>
              <BulletPoint>High frequency updates</BulletPoint>
              <BulletPoint>Examples: orderBookL2, orderBook10</BulletPoint>
            </Slide>
          </ul>
        </div>
        <Fade delay={400}>
          <CodeBlock language="javascript">
{`class OrderBookManager {
    constructor() {
        this.orderBook = {
            bids: new Map(),
            asks: new Map()
        };
    }

    handleMessage(message) {
        switch (message.action) {
            case 'partial':
                this.initializeOrderBook(message.data);
                break;
            case 'insert':
                this.insertLevels(message.data);
                break;
            case 'update':
                this.updateLevels(message.data);
                break;
            case 'delete':
                this.deleteLevels(message.data);
                break;
        }
        this.notifyOrderBookChange();
    }
}`}
          </CodeBlock>
        </Fade>
      </div>
    </Content>
  </SlideContainer>
)

const ImplementationSlide = () => (
  <SlideContainer>
    <SectionTitle>Complete Implementation Example</SectionTitle>
    <Content>
      <Fade>
        <CodeBlock language="javascript">
{`class BitMEXWebSocketManager {
    constructor() {
        this.ws = null;
        this.tables = new Map();
        this.tableConfigs = new Map();
    }

    connect() {
        this.ws = new WebSocket('wss://ws.bitmex.com/realtime');
        
        this.ws.on('message', (data) => {
            const message = JSON.parse(data);
            this.handleMessage(message);
        });
    }

    handleMessage(message) {
        if (!message.table) return;

        switch (message.action) {
            case 'partial': this.handlePartial(message); break;
            case 'insert': this.handleInsert(message); break;
            case 'update': this.handleUpdate(message); break;
            case 'delete': this.handleDelete(message); break;
        }
    }
}`}
        </CodeBlock>
      </Fade>
    </Content>
  </SlideContainer>
)

const BestPracticesSlide = () => (
  <SlideContainer>
    <SectionTitle>Best Practices</SectionTitle>
    <Content>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Slide direction="left" cascade damping={0.2}>
          <BulletPoint><strong>State Management</strong>: Keep local state synchronized with WebSocket updates</BulletPoint>
          <BulletPoint><strong>Error Handling</strong>: Implement reconnection logic and data validation</BulletPoint>
          <BulletPoint><strong>Performance</strong>: Use efficient data structures (Maps, sorted arrays)</BulletPoint>
          <BulletPoint><strong>Memory Management</strong>: Limit history size for infinite insert feeds</BulletPoint>
          <BulletPoint><strong>UI Updates</strong>: Debounce high-frequency updates for better UX</BulletPoint>
          <BulletPoint><strong>Data Integrity</strong>: Always use keys to identify records correctly</BulletPoint>
        </Slide>
      </ul>
    </Content>
  </SlideContainer>
)

const ConclusionSlide = () => (
  <SlideContainer>
    <Zoom>
      <Title style={{ fontSize: '2.5em' }}>Questions & Discussion</Title>
    </Zoom>
    <Fade delay={300}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h3 style={{ color: '#ffd700' }}>Thank you!</h3>
        <p style={{ fontSize: '1.2em', opacity: 0.8 }}>BitMEX WebSocket Data & State Management</p>
      </div>
    </Fade>
  </SlideContainer>
)

export default Presentation
