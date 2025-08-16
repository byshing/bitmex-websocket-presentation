import React from 'react'
import { Slide, Heading, UnorderedList, ListItem, Box } from 'spectacle'

export default function IntroductionSlide() {
  return (
    <Slide  className="slide-gradient-dark">
      <Box className="fade-in-up">
        <Heading 
          color="primary" 
          size={3}
          className="enhanced-heading"
          style={{
            fontSize: '3rem',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          What is BitMEX WebSocket?
        </Heading>
        <Box className="glass-card">
          <UnorderedList 
            color="secondary" 
            fontSize="32px"
            style={{
              lineHeight: 1.8,
              listStyle: 'none'
            }}
          >
            <ListItem 
              margin="20px 0"
              className="slide-in-left"
              style={{
                padding: '15px 20px',
                borderLeft: '4px solid #ffd700',
                background: 'rgba(255, 215, 0, 0.05)',
                borderRadius: '8px',
                animationDelay: '0.1s'
              }}
            >
              🚀 Real-time streaming data from BitMEX exchange
            </ListItem>
            <ListItem 
              margin="20px 0"
              className="slide-in-left"
              style={{
                padding: '15px 20px',
                borderLeft: '4px solid #00d4ff',
                background: 'rgba(0, 212, 255, 0.05)',
                borderRadius: '8px',
                animationDelay: '0.2s'
              }}
            >
              ⚡ Low-latency updates for trading applications
            </ListItem>
            <ListItem 
              margin="20px 0"
              className="slide-in-left"
              style={{
                padding: '15px 20px',
                borderLeft: '4px solid #00ff88',
                background: 'rgba(0, 255, 136, 0.05)',
                borderRadius: '8px',
                animationDelay: '0.3s'
              }}
            >
              🔄 Efficient state synchronization mechanism
            </ListItem>
            <ListItem 
              margin="20px 0"
              className="slide-in-left"
              style={{
                padding: '15px 20px',
                borderLeft: '4px solid #ff6b00',
                background: 'rgba(255, 107, 0, 0.05)',
                borderRadius: '8px',
                animationDelay: '0.4s'
              }}
            >
              📊 Various data types: orders, positions, executions, market data
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Slide>
  )
}
