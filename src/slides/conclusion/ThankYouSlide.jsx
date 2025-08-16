import React from 'react'
import { Slide, Heading, Text, Box } from 'spectacle'

export default function ThankYouSlide() {
  return (
    <Slide backgroundColor="tertiary" className="slide-gradient-dark">
      <Box textAlign="center" className="fade-in-up">
        <Box className="floating">
          <Heading 
            color="primary" 
            size={1} 
            margin="0 0 60px 0"
            className="enhanced-heading glow-text"
            style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            Thank You! 🎉
          </Heading>
        </Box>
        
        <Box 
          className="glass-card"
          style={{
            maxWidth: '800px',
            margin: '0 auto 40px',
            textAlign: 'center'
          }}
        >
          <Heading 
            color="accent" 
            size={3}
            className="enhanced-subheading"
            style={{
              fontSize: '2.5rem',
              marginBottom: '30px'
            }}
          >
            Questions & Discussion
          </Heading>
          
          <Text 
            fontSize="28px" 
            color="secondary"
            style={{
              lineHeight: 1.6,
              marginBottom: '30px'
            }}
          >
            Ready to implement real-time WebSocket connections?
          </Text>
          
          <Box 
            style={{
              padding: '20px',
              background: 'rgba(255, 215, 0, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              marginBottom: '30px'
            }}
          >
            <Text 
              fontSize="20px" 
              color="primary"
              style={{ fontWeight: 600 }}
            >
              📚 BitMEX WebSocket API Documentation
            </Text>
            <Text 
              fontSize="18px" 
              color="accent" 
              margin="10px 0 0"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: 'rgba(0, 212, 255, 0.1)',
                padding: '8px 12px',
                borderRadius: '6px',
                display: 'inline-block'
              }}
            >
              https://www.bitmex.com/app/wsAPI
            </Text>
          </Box>
        </Box>
        
        <Box 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <Box 
            style={{
              padding: '15px 25px',
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '25px',
              color: '#00ff88',
              fontWeight: 600
            }}
          >
            ✅ Live Demo Available
          </Box>
          <Box 
            style={{
              padding: '15px 25px',
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '25px',
              color: '#00d4ff',
              fontWeight: 600
            }}
          >
            🔗 Real WebSocket Connection
          </Box>
          <Box 
            style={{
              padding: '15px 25px',
              background: 'rgba(255, 107, 0, 0.1)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              borderRadius: '25px',
              color: '#ff6b00',
              fontWeight: 600
            }}
          >
            📈 Trading Ready
          </Box>
        </Box>
      </Box>
    </Slide>
  )
}
