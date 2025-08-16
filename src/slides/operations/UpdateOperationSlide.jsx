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
          
          <CodePane language="javascript" fontSize="14px" margin="20px 0">
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
          <CodePane language="json" fontSize="12px">
{`{
  "table": "orderBookL2_25",
  "action": "update",
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 17999995000,
      "side": "Buy",
      "size": 5
    }
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
