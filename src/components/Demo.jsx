import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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

function Demo() {
  const [isConnected, setIsConnected] = useState(false)
  const [logs, setLogs] = useState('')
  const [messageCount, setMessageCount] = useState(0)
  const [lastUpdate, setLastUpdate] = useState('-')

  const log = (message) => {
    const timestamp = new Date().toTimeString().split(' ')[0]
    setLogs(prev => prev + `[${timestamp}] ${message}\n`)
  }

  const connectDemo = () => {
    setIsConnected(true)
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

  const disconnectDemo = () => {
    setIsConnected(false)
    log('Disconnected from BitMEX WebSocket simulation')
    if (window.demoInterval) {
      clearInterval(window.demoInterval)
    }
  }

  const clearLogs = () => {
    setLogs('')
  }

  useEffect(() => {
    return () => {
      if (window.demoInterval) {
        clearInterval(window.demoInterval)
      }
    }
  }, [])

  return (
    <DemoContainer>
      <Title>BitMEX WebSocket Demo</Title>
      <Description>
        This demo simulates real-time data from BitMEX WebSocket API. 
        Use this alongside the presentation to see the concepts in action.
      </Description>

      <StatusContainer connected={isConnected}>
        {isConnected ? 'Connected to Demo' : 'Disconnected'}
      </StatusContainer>

      <ControlsContainer>
        <Button onClick={connectDemo} disabled={isConnected}>
          Connect
        </Button>
        <Button onClick={disconnectDemo} disabled={!isConnected}>
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
