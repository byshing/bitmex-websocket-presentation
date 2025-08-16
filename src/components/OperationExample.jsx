import React from 'react'
import CodeBlock from './CodeBlock'

const examples = {
  partial: {
    title: 'PARTIAL Example',
    code: `{
  "table": "orderBookL2",
  "action": "partial",
  "keys": ["symbol", "id", "side"],
  "types": {
    "symbol": "symbol",
    "id": "long", 
    "side": "symbol",
    "size": "long",
    "price": "float"
  },
  "foreignKeys": {
    "symbol": "instrument",
    "side": "side"
  },
  "attributes": {
    "symbol": "grouped",
    "id": "sorted"
  },
  "filter": {
    "symbol": "XBTUSD"
  },
  "data": [
    {
      "symbol": "XBTUSD", 
      "id": 8790000000, 
      "side": "Sell", 
      "size": 1000, 
      "price": 50000
    },
    {
      "symbol": "XBTUSD", 
      "id": 8790000001, 
      "side": "Buy", 
      "size": 2000, 
      "price": 49999
    }
  ]
}`
  },
  insert: {
    title: 'INSERT Example',
    code: `{
  "table": "execution",
  "action": "insert",
  "data": [
    {
      "execID": "abc12345-def6-7890-ghij-klmn12345678",
      "symbol": "XBTUSD",
      "side": "Buy",
      "lastQty": 100,
      "lastPx": 50000,
      "execType": "Trade",
      "timestamp": "2025-08-16T10:30:00.000Z"
    }
  ]
}`
  },
  update: {
    title: 'UPDATE Example',
    code: `{
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
}`
  },
  delete: {
    title: 'DELETE Example',
    code: `{
  "table": "orderBookL2",
  "action": "delete",
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 8790000000,
      "side": "Sell"
    }
  ]
}`
  }
}

function OperationExample({ type }) {
  const example = examples[type]
  
  if (!example) {
    return null
  }

  return (
    <CodeBlock language="json" title={example.title} small>
      {example.code}
    </CodeBlock>
  )
}

export default OperationExample
