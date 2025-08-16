import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane } from 'spectacle'

export default function DeleteOperationSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>DELETE - Removing Records</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="20px">
            <ListItem>Removes records by key</ListItem>
            <ListItem>Commonly for cancelled orders</ListItem>
            <ListItem>Empty arrays mean clear all</ListItem>
          </UnorderedList>
          
          <CodePane language="javascript" theme="dark" fontSize="14px" margin="20px 0">
{`function handleDelete(table, data, keys) {
    if (data.length === 0) {
        // Empty array = clear all records
        clearTable(table);
        return;
    }
    
    data.forEach(deleteData => {
        const index = findIndexByKeys(table, deleteData, keys);
        if (index !== -1) {
            removeRecord(table, index);
        }
    });
}`}
          </CodePane>
        </Box>
        
        <Box>
          <CodePane language="json" theme="dark" fontSize="12px">
{`{
  "table": "order",
  "action": "delete",
  "data": [
    {
      "orderID": "abc123-def456-789",
      "symbol": "XBTUSD"
    }
  ]
}

// Clear all orders
{
  "table": "order", 
  "action": "delete",
  "data": []
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
