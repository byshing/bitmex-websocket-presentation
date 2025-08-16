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
            <ListItem>Mostly see in orderBook feeds</ListItem>
          </UnorderedList>
        </Box>
        
        <Box>
          <CodePane language="json" fontSize="12px">
{`{
  "table": "orderBookL2_25",
  "action": "delete",
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 17999995000,
      "side": "Buy"
    }
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
