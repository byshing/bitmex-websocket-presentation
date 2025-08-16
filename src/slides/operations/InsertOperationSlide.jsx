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
          
          <CodePane language="javascript" fontSize="14px" margin="20px 0">
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
          <CodePane language="json" fontSize="12px">
{`{
  "table": "orderBookL2_25",
  "action": "insert",
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 17999995500,
      "side": "Buy",
      "size": 10,
      "price": 45
    }
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
