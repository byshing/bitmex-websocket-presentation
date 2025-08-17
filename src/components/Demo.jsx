import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CryptoJS from 'crypto-js'

const DemoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #e2e8f0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 80px 20px 20px;
`

const Title = styled.h1`
  text-align: center;
  color: #3b82f6;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
`

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const StatusContainer = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 40px;
  background: ${props => props.connected 
    ? 'linear-gradient(135deg, #065f46 0%, #047857 100%)' 
    : 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)'};
  border: 2px solid ${props => props.connected ? '#10b981' : '#ef4444'};
  box-shadow: 0 4px 16px ${props => props.connected 
    ? 'rgba(16, 185, 129, 0.3)' 
    : 'rgba(239, 68, 68, 0.3)'};
  color: white;
  font-weight: 600;
`

const ControlsContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const Button = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 10px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }

  &:disabled {
    background: linear-gradient(135deg, #64748b 0%, #475569 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.6;
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
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid #475569;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`

const PanelTitle = styled.h3`
  color: #60a5fa;
  margin-top: 0;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 12px;
  font-size: 1.25rem;
  font-weight: 600;
`

const LogContainer = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #22d3ee;
  padding: 16px;
  border-radius: 8px;
  height: 240px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.4;
  white-space: pre-wrap;
  border: 1px solid #334155;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
`

const StatsContainer = styled.div`
  .metric {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #475569;
    transition: all 0.2s ease;
  }

  .metric:last-child {
    border-bottom: none;
  }

  .metric:hover {
    background: rgba(59, 130, 246, 0.1);
    border-radius: 6px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .label {
    color: #94a3b8;
    font-weight: 500;
  }

  .value {
    color: #f1f5f9;
    font-weight: 600;
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
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid #475569;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 24px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
`

const ConfigTitle = styled.h3`
  color: #60a5fa;
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 1.5rem;
  font-weight: 600;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  color: #94a3b8;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 2px solid #475569;
  border-radius: 8px;
  color: #f1f5f9;
  font-size: 14px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #64748b;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 2px solid #475569;
  border-radius: 8px;
  color: #f1f5f9;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #64748b;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #e2e8f0;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.1);
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
    accent-color: #3b82f6;
    width: 16px;
    height: 16px;
  }
`

const EnvironmentSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 2px solid #475569;
  border-radius: 8px;
  color: #f1f5f9;
  font-size: 14px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  option {
    background: #1e293b;
    color: #f1f5f9;
    padding: 8px;
  }
`

const EnvironmentInfo = styled.div`
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  font-size: 13px;
  color: #93c5fd;
  margin-top: 8px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
`

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
  border: 2px solid #ef4444;
  color: #fecaca;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
`

function Demo() {
  const [environment, setEnvironment] = useState('testnet') // 'devhk', 'testnet', 'prod'
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

  // Environment configurations
  const environments = {
    devhk: { 
      name: 'DevHK', 
      url: 'wss://ws.devhk.bitmex.com/realtime',
      description: 'Development (Hong Kong)'
    },
    testnet: { 
      name: 'Testnet', 
      url: 'wss://ws.testnet.bitmex.com/realtime',
      description: 'Test Environment'
    },
    prod: { 
      name: 'Production', 
      url: 'wss://ws.bitmex.com/realtime',
      description: 'Live Trading'
    }
  }

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

  const connect = () => {
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
      let wsUrl = environments[environment].url
      
      // Add authentication parameters to URL if needed
      if (needsAuth && apiKey && apiSecret) {
        const expires = Math.round(new Date().getTime() / 1000) + 60
        const signature = generateAuthSignature('GET', '/realtime', expires)
        
        const authParams = new URLSearchParams({
          'api-expires': expires.toString(),
          'api-signature': signature,
          'api-key': apiKey
        })
        
        wsUrl += '?' + authParams.toString()
        log('Using URL-based authentication for WebSocket')
      }
      
      wsRef.current = new WebSocket(wsUrl)
      
      wsRef.current.onopen = () => {
        log(`Connected to BitMEX WebSocket (${environments[environment].name})`)
        setIsConnected(true)
        
        // No need for separate auth message when using URL params
        // Subscribe to feeds directly
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
          
          // Handle info messages
          if (data.info) {
            log(`ℹ️ Info: ${data.info}`)
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

  const disconnect = () => {
    if (wsRef.current) {
      wsRef.current.close(1000, 'User requested disconnect')
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
    }
  }, [])

  return (
    <DemoContainer>
      <Title>BitMEX WebSocket Live Demo</Title>
      <Description>
        Connect to real BitMEX WebSocket API and see live data in action. 
        Configure feeds and authentication to receive real-time market data.
      </Description>

      <ConfigSection>
        <ConfigTitle>WebSocket Configuration</ConfigTitle>
        
        <FormGroup>
          <Label>Environment</Label>
          <EnvironmentSelect
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
          >
            {Object.entries(environments).map(([key, env]) => (
              <option key={key} value={key}>
                {env.name} - {env.description}
              </option>
            ))}
          </EnvironmentSelect>
          <EnvironmentInfo>
            URL: {environments[environment].url}
          </EnvironmentInfo>
        </FormGroup>

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
      </ConfigSection>

      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}

      <StatusContainer connected={isConnected}>
        {isConnected ? 
          `Connected - Live BitMEX (${environments[environment].name})` : 
          'Disconnected'
        }
      </StatusContainer>

      <ControlsContainer>
        <Button 
          onClick={connect} 
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
              <span className="value">Live ({environments[environment].name})</span>
            </div>
            <div className="metric">
              <span className="label">Last Update:</span>
              <span className="value">{lastUpdate}</span>
            </div>
          </StatsContainer>
        </Panel>

      </Grid>
    </DemoContainer>
  )
}

export default Demo
