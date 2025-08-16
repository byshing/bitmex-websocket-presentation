import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane } from 'spectacle'

export default function UpdateOperationSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>UPDATE - Modifying Existing Records</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="20px">
            <ListItem>Updates existing records by key</ListItem>
            <ListItem>Only modified fields are included</ListItem>
            <ListItem>Common for positions, margins, order book</ListItem>
          </UnorderedList>
          
          <CodePane language="javascript" theme="dark" fontSize="14px" margin="20px 0">
{`function handleUpdate(table, data, keys) {
    data.forEach(updateData => {
        const existing = findRecordByKeys(table, updateData, keys);
        if (existing) {
            Object.assign(existing, updateData);
            
            if (table === 'position') {
                updatePositionDisplay(existing);
            }
        }
    });
}`}
          </CodePane>
        </Box>
        
        <Box>
          <CodePane language="json" theme="dark" fontSize="12px">
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
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
