import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane } from 'spectacle'

export default function InsertOperationSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>INSERT - Adding New Records</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="20px">
            <ListItem>Adds new records to the dataset</ListItem>
            <ListItem>Common in execution feeds, new orders</ListItem>
            <ListItem>Use keys to determine insertion point</ListItem>
          </UnorderedList>
          
          <CodePane language="javascript" theme="dark" fontSize="14px" margin="20px 0">
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
          </CodePane>
        </Box>
        
        <Box>
          <CodePane language="json" theme="dark" fontSize="12px">
{`{
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
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
