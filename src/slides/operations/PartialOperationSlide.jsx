import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane } from 'spectacle'

export default function PartialOperationSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>PARTIAL - Initial Data Snapshot</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="20px">
            <ListItem>First message received after subscription</ListItem>
            <ListItem>Contains complete current state</ListItem>
            <ListItem>Establishes baseline for incremental updates</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <CodePane language="json" theme="dark" fontSize="12px">
{`{
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
  "data": [
    {
      "symbol": "XBTUSD", 
      "id": 8790000000, 
      "side": "Sell", 
      "size": 1000, 
      "price": 50000
    }
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
