import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

export default function WebSocketOverviewSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>WebSocket Connection Overview</Heading>
      <CodePane language="javascript" theme="dark" fontSize="16px">
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
      </CodePane>
    </Slide>
  )
}
