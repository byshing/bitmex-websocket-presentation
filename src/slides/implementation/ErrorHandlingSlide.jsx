import React from 'react'
import { Slide, Heading, CodePane, Box } from 'spectacle'

export default function ErrorHandlingSlide() {
  return (
    <Slide backgroundColor="primary">
      <Heading color="tertiary" size={3}>Error Handling & Edge Cases</Heading>
      <Box>
        <CodePane language="javascript" theme="dark" fontSize="12px" margin="20px 0">
{`class BitMEXWebSocket {
  handleMessage(message) {
    try {
      const data = JSON.parse(message);
      
      // Handle subscription confirmations
      if (data.subscribe) {
        this.handleSubscriptionConfirm(data);
        return;
      }
      
      // Handle errors
      if (data.error) {
        this.handleError(data.error);
        return;
      }
      
      // Handle data messages
      if (data.table && data.action) {
        this.dataManager.handleMessage(data);
      }
      
    } catch (error) {
      console.error('Failed to parse WebSocket message:', error);
    }
  }
  
  handleError(error) {
    console.error('BitMEX WebSocket error:', error);
    // Implement reconnection logic
    this.reconnect();
  }
}`}
        </CodePane>
      </Box>
    </Slide>
  )
}
