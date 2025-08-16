import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane } from 'spectacle'

export default function OrderBookSlide() {
  return (
    <Slide backgroundColor="quaternary">
      <Heading color="primary" size={3}>Order Book - Mixed Pattern</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="18px">
            <ListItem>INSERT for new price levels</ListItem>
            <ListItem>UPDATE for size changes</ListItem>
            <ListItem>DELETE when size = 0</ListItem>
            <ListItem>Indexed by [symbol, id]</ListItem>
          </UnorderedList>
        </Box>
        
        <Box>
          <CodePane language="json" fontSize="10px">
{`// New price level
{"table": "orderBookL2", "action": "insert",
 "data": [{"symbol": "XBTUSD", "id": 8799427500,
           "side": "Buy", "size": 1000, "price": 42500}]}

// Size change  
{"table": "orderBookL2", "action": "update",
 "data": [{"symbol": "XBTUSD", "id": 8799427500, 
           "size": 1500}]}

// Price level removed
{"table": "orderBookL2", "action": "delete",
 "data": [{"symbol": "XBTUSD", "id": 8799427500}]}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
