import React from "react";
import {
  Slide,
  Heading,
  Grid,
  Box,
  UnorderedList,
  ListItem,
  CodePane,
} from "spectacle";

export default function OrderBookSlide() {
  return (
    <Slide>
      <Heading color="primary" size={3}>
        OrderBookL2, OrderBookL2_25 - Mixed Pattern
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="18px">
            <ListItem>INSERT for new price levels</ListItem>
            <ListItem>UPDATE for size changes</ListItem>
            <ListItem>Indexed by [symbol, id, side]</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <CodePane language="json" fontSize="10px">
            {`// New price level
{"table": "orderBookL2", "action": "insert",
 "data": [{
        "symbol": "AVAXUSDT", "id": 126295300416, "side": "Buy", // keys fields
        "price": 24.096,
        "size": 1000,
        }]}

// Size change  
{"table": "orderBookL2", "action": "update",
 "data": [{
        "symbol": "AVAXUSDT", "id": 126295300416, "side": "Buy", // keys fields
        "price": 24.096,
        "size": 1500
        }]}

// Price level removed
{"table": "orderBookL2", "action": "delete",
 "data": [{
        "symbol": "AVAXUSDT", "id": 126295300416, "side": "Buy", // keys fields
        "price": 24.096,
        }]}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  );
}
