import React from 'react'
import { Slide, Heading, CodePane, Box } from 'spectacle'

export default function WebSocketOverviewSlide() {
  return (
    <Slide  className="slide-gradient-dark">
      <Box className="fade-in-up">
        <Heading 
          color="primary" 
          size={3}
          className="enhanced-heading"
          style={{
            fontSize: '2.8rem',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          WebSocket Connection Overview
        </Heading>
        <Box className="enhanced-code glass-card">
          <CodePane 
            language="javascript" 
            fontSize="18px"
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              lineHeight: 1.6
            }}
          >
{`const WebSocket = require('ws');

// Connect to BitMEX WebSocket
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
    handleMessage(message); // Process incoming data
});

ws.on('error', (error) => {
    console.error('❌ WebSocket error:', error);
});`}
          </CodePane>
        </Box>
        <Box 
          margin="30px 0 0"
          style={{
            textAlign: 'center',
            padding: '15px',
            background: 'rgba(0, 212, 255, 0.1)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '8px'
          }}
        >
          <span style={{ 
            color: '#00d4ff', 
            fontSize: '18px',
            fontWeight: 500 
          }}>
            💡 Real-time connection to live market data
          </span>
        </Box>
      </Box>
    </Slide>
  )
}
