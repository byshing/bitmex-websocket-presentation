import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CryptoJS from 'crypto-js'

const DemoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 80px 20px 20px;
`

const Title = styled.h1`
  text-align: center;
  color: #ffd700;
  margin-bottom: 20px;
`

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
  opacity: 0.8;
`

const StatusContainer = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  background: ${props => props.connected ? '#0f5132' : '#721c24'};
  border: 1px solid ${props => props.connected ? '#198754' : '#f85149'};
`

const ControlsContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Button = styled.button`
  background: #0d6efd;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;
  font-weight: bold;

  &:hover {
    background: #0b5ed7;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const Panel = styled.div`
  background: #2d2d2d;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 20px;
`

const PanelTitle = styled.h3`
  color: #ffd700;
  margin-top: 0;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
`

const LogContainer = styled.div`
  background: #000;
  color: #00ff00;
  padding: 15px;
  border-radius: 4px;
  height: 200px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  white-space: pre-wrap;
`

const StatsContainer = styled.div`
  .metric {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #444;
  }

  .metric:last-child {
    border-bottom: none;
  }

  .label {
    color: #ffd700;
  }

  .value {
    color: #ffffff;
    font-weight: bold;
  }
`

const CodeBlock = styled.div`
  background: #1e1e1e;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 15px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  overflow-x: auto;
  white-space: pre;
`

const ConfigSection = styled.div`
  background: #2d2d2d;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const ConfigTitle = styled.h3`
  color: #ffd700;
  margin-top: 0;
  margin-bottom: 20px;
`

const FormGroup = styled.div`
  margin-bottom: 15px;
`

const Label = styled.label`
  display: block;
  color: #ffd700;
  margin-bottom: 5px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  background: #1a1a1a;
  border: 1px solid #444;
  border-radius: 4px;
  color: white;
  font-size: 14px;

  &:focus {
    border-color: #ffd700;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  background: #1a1a1a;
  border: 1px solid #444;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: #ffd700;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  
  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: #ffd700;
  }
`

const ModeToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`

const ToggleButton = styled.button`
  background: ${props => props.active ? '#ffd700' : '#444'};
  color: ${props => props.active ? '#000' : '#fff'};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${props => props.active ? '#e6c200' : '#555'};
  }
`

const ErrorMessage = styled.div`
  background: #721c24;
  border: 1px solid #f85149;
  color: #f85149;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`

function Demo() {
  const [mode, setMode] = useState('simulation') // 'simulation' or 'live'
  const [isConnected, setIsConnected] = useState(false)
  const [logs, setLogs] = useState('')
  const [messageCount, setMessageCount] = useState(0)
  const [lastUpdate, setLastUpdate] = useState('-')
  const [error, setError] = useState('')
  
  // Authentication
  const [apiKey, setApiKey] = useState('')
  const [apiSecret, setApiSecret] = useState('')
  
  // Feed configuration
  const [selectedFeeds, setSelectedFeeds] = useState({
    'orderBookL2:XBTUSD': true,
    'trade:XBTUSD': false,
    'execution': false,
    'order': false,
    'position': false,
    'margin': false,
    'wallet': false
  })
  
  const wsRef = useRef(null)

  const availableFeeds = [
    { key: 'orderBookL2:XBTUSD', label: 'Order Book (XBTUSD)', public: true },
    { key: 'trade:XBTUSD', label: 'Trades (XBTUSD)', public: true },
    { key: 'execution', label: 'Executions', public: false },
    { key: 'order', label: 'Orders', public: false },
    { key: 'position', label: 'Positions', public: false },
    { key: 'margin', label: 'Margin', public: false },
    { key: 'wallet', label: 'Wallet', public: false }
  ]

  const log = (message) => {
    const timestamp = new Date().toTimeString().split(' ')[0]
    setLogs(prev => prev + `[${timestamp}] ${message}\n`)
  }

  const generateAuthSignature = (method, path, expires, data = '') => {
    const message = method + path + expires + data
    return CryptoJS.HmacSHA256(message, apiSecret).toString()
  }

  const connectLive = () => {
    if (wsRef.current) {
      wsRef.current.close()
    }

    setError('')
    setIsConnected(false)
    setMessageCount(0)
    
    const selectedFeedsList = Object.entries(selectedFeeds)
      .filter(([, selected]) => selected)
      .map(([feed]) => feed)
    
    if (selectedFeedsList.length === 0) {
      setError('Please select at least one feed to subscribe to')
      return
    }

    // Check if we need authentication
    const needsAuth = selectedFeedsList.some(feed => 
      !availableFeeds.find(f => f.key === feed)?.public
    )
    
    if (needsAuth && (!apiKey || !apiSecret)) {
      setError('API Key and Secret are required for private feeds')
      return
    }

    try {
      const wsUrl = 'wss://ws.bitmex.com/realtime'
      wsRef.current = new WebSocket(wsUrl)
      
      wsRef.current.onopen = () => {
        log('Connected to BitMEX WebSocket')
        setIsConnected(true)
        
        // Authenticate if needed
        if (needsAuth) {
          const expires = Math.round(new Date().getTime() / 1000) + 60
          const signature = generateAuthSignature('GET', '/realtime', expires)
          
          const authMessage = {
            op: 'authKeyExpires',
            args: [apiKey, expires, signature]
          }
          
          wsRef.current.send(JSON.stringify(authMessage))
          log('Sent authentication request')
        }
        
        // Subscribe to feeds
        const subscribeMessage = {
          op: 'subscribe',
          args: selectedFeedsList
        }
        
        wsRef.current.send(JSON.stringify(subscribeMessage))
        log(`Subscribed to: ${selectedFeedsList.join(', ')}`)
      }
      
      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          
          // Handle subscription confirmations
          if (data.subscribe) {
            log(`✓ Subscribed to: ${data.subscribe}`)
            return
          }
          
          // Handle authentication
          if (data.success && data.request && data.request.op === 'authKeyExpires') {
            log('✓ Authenticated successfully')
            return
          }
          
          // Handle errors
          if (data.error) {
            setError(`WebSocket Error: ${data.error}`)
            log(`❌ Error: ${data.error}`)
            return
          }
          
          // Handle data messages
          if (data.table && data.action) {
            setMessageCount(prev => prev + 1)
            setLastUpdate(new Date().toTimeString().split(' ')[0])
            log(`${data.action.toUpperCase()} - ${data.table} (${data.data?.length || 0} records)`)
          }
          
        } catch (error) {
          log(`Failed to parse message: ${error.message}`)
        }
      }
      
      wsRef.current.onerror = () => {
        setError('WebSocket connection error')
        log('WebSocket error occurred')
      }
      
      wsRef.current.onclose = (event) => {
        setIsConnected(false)
        log(`WebSocket closed (Code: ${event.code})`)
        if (event.code !== 1000) {
          setError(`Connection closed unexpectedly (Code: ${event.code})`)
        }
      }
      
    } catch (error) {
      setError(`Failed to connect: ${error.message}`)
      log(`Connection failed: ${error.message}`)
    }
  }

  const connectDemo = () => {
    setIsConnected(true)
    setError('')
    log('Demo connected to BitMEX WebSocket simulation')
    setMessageCount(0)
    
    // Simulate receiving messages
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        setMessageCount(prev => prev + 1)
        setLastUpdate(new Date().toTimeString().split(' ')[0])
        
        const messageTypes = ['execution', 'orderBookL2', 'position']
        const actions = ['insert', 'update', 'delete']
        const messageType = messageTypes[Math.floor(Math.random() * messageTypes.length)]
        const action = actions[Math.floor(Math.random() * actions.length)]
        
        log(`${action.toUpperCase()} received for ${messageType}`)
      }
    }, 2000)

    // Store interval reference
    window.demoInterval = interval
  }

  const disconnect = () => {
    if (mode === 'live' && wsRef.current) {
      wsRef.current.close(1000, 'User requested disconnect')
    } else if (mode === 'simulation' && window.demoInterval) {
      clearInterval(window.demoInterval)
    }
    
    setIsConnected(false)
    log('Disconnected')
  }

  const clearLogs = () => {
    setLogs('')
    setError('')
  }

  const handleFeedChange = (feedKey, checked) => {
    setSelectedFeeds(prev => ({
      ...prev,
      [feedKey]: checked
    }))
  }

  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
      if (window.demoInterval) {
        clearInterval(window.demoInterval)
      }
    }
  }, [])

  return (
    <DemoContainer>
      <Title>BitMEX WebSocket Demo</Title>
      <Description>
        Connect to real BitMEX WebSocket API or use simulation mode. 
        Configure feeds and authentication to see live data in action.
      </Description>

      <ConfigSection>
        <ConfigTitle>Connection Mode</ConfigTitle>
        <ModeToggle>
          <ToggleButton 
            active={mode === 'simulation'} 
            onClick={() => setMode('simulation')}
          >
            Simulation
          </ToggleButton>
          <ToggleButton 
            active={mode === 'live'} 
            onClick={() => setMode('live')}
          >
            Live Connection
          </ToggleButton>
        </ModeToggle>

        {mode === 'live' && (
          <>
            <FormGroup>
              <Label>API Key (optional - for private feeds)</Label>
              <Input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your BitMEX API key"
              />
            </FormGroup>

            <FormGroup>
              <Label>API Secret (optional - for private feeds)</Label>
              <Input
                type="password"
                value={apiSecret}
                onChange={(e) => setApiSecret(e.target.value)}
                placeholder="Enter your BitMEX API secret"
              />
            </FormGroup>

            <FormGroup>
              <Label>Select Feeds to Subscribe</Label>
              <CheckboxGroup>
                {availableFeeds.map(feed => (
                  <CheckboxLabel key={feed.key}>
                    <input
                      type="checkbox"
                      checked={selectedFeeds[feed.key]}
                      onChange={(e) => handleFeedChange(feed.key, e.target.checked)}
                    />
                    {feed.label} {!feed.public && '(Auth Required)'}
                  </CheckboxLabel>
                ))}
              </CheckboxGroup>
            </FormGroup>
          </>
        )}
      </ConfigSection>

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      <StatusContainer connected={isConnected}>
        {isConnected ? 
          `Connected - ${mode === 'live' ? 'Live BitMEX' : 'Simulation'} Mode` : 
          'Disconnected'
        }
      </StatusContainer>

      <ControlsContainer>
        <Button 
          onClick={mode === 'live' ? connectLive : connectDemo} 
          disabled={isConnected}
        >
          Connect
        </Button>
        <Button onClick={disconnect} disabled={!isConnected}>
          Disconnect
        </Button>
        <Button onClick={clearLogs}>
          Clear Log
        </Button>
      </ControlsContainer>

      <Grid>
        <Panel>
          <PanelTitle>Connection Log</PanelTitle>
          <LogContainer>{logs}</LogContainer>
        </Panel>

        <Panel>
          <PanelTitle>Statistics</PanelTitle>
          <StatsContainer>
            <div className="metric">
              <span className="label">Messages Received:</span>
              <span className="value">{messageCount}</span>
            </div>
            <div className="metric">
              <span className="label">Connection Status:</span>
              <span className="value">{isConnected ? 'Connected' : 'Disconnected'}</span>
            </div>
            <div className="metric">
              <span className="label">Mode:</span>
              <span className="value">{mode === 'live' ? 'Live' : 'Simulation'}</span>
            </div>
            <div className="metric">
              <span className="label">Last Update:</span>
              <span className="value">{lastUpdate}</span>
            </div>
          </StatsContainer>
        </Panel>

        <Panel>
          <PanelTitle>Sample PARTIAL Message</PanelTitle>
          <CodeBlock>
{`{
  "table": "orderBookL2",
  "action": "partial",
  "keys": ["symbol", "id", "side"],
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 8790000000,
      "side": "Sell",
      "size": 1000,
      "price": 50000
    }
  ]
}`}
          </CodeBlock>
        </Panel>

        <Panel>
          <PanelTitle>Sample INSERT Message</PanelTitle>
          <CodeBlock>
{`{
  "table": "execution",
  "action": "insert",
  "data": [
    {
      "execID": "abc12345-def6-7890",
      "symbol": "XBTUSD",
      "side": "Buy",
      "lastQty": 100,
      "lastPx": 50000,
      "timestamp": "2025-08-16T10:30:00.000Z"
    }
  ]
}`}
          </CodeBlock>
        </Panel>

        <Panel>
          <PanelTitle>Sample UPDATE Message</PanelTitle>
          <CodeBlock>
{`{
  "table": "position",
  "action": "update",
  "data": [
    {
      "symbol": "XBTUSD",
      "currentQty": 500,
      "unrealisedPnl": 125000,
      "timestamp": "2025-08-16T10:30:01.000Z"
    }
  ]
}`}
          </CodeBlock>
        </Panel>

        <Panel>
          <PanelTitle>Sample DELETE Message</PanelTitle>
          <CodeBlock>
{`{
  "table": "orderBookL2",
  "action": "delete",
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 8790000000,
      "side": "Sell"
    }
  ]
}`}
          </CodeBlock>
        </Panel>
      </Grid>
    </DemoContainer>
  )
}

export default Demo
