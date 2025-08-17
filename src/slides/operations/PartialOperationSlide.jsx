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

export default function PartialOperationSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>
        PARTIAL - Initial Data Snapshot
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="20px">
            <ListItem>First message received after subscription</ListItem>
            <ListItem>Contains complete current state</ListItem>
            <ListItem>Establishes baseline for incremental updates</ListItem>
            <ListItem>
              Sent only once per subscription, with exception for orderBookL2
              (may send new partials when push image)
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <CodePane language="json" fontSize="10px">
            {`{
  "table": "orderBookL2_25",
  "keys": ["symbol","id","side"],
  "types": {"id":"long","price":"float","side":"symbol","size":"long","symbol":"symbol","timestamp":"timestamp"}
  "action": "partial",
  "filter": {"symbol":"XBTUSD"},
  "data":[
    {"symbol":"XBTUSD","id":17999992000,"side":"Sell","size":100,"price":80,"timestamp":"..."},
    {"symbol":"XBTUSD","id":17999993000,"side":"Sell","size":20,"price":70,"timestamp":"..."},
    {"symbol":"XBTUSD","id":17999994000,"side":"Sell","size":10,"price":60,"timestamp":"..."},
    {"symbol":"XBTUSD","id":17999995000,"side":"Buy","size":10,"price":50,"timestamp":"..."},
    {"symbol":"XBTUSD","id":17999996000,"side":"Buy","size":20,"price":40,"timestamp":"..."},
    {"symbol":"XBTUSD","id":17999997000,"side":"Buy","size":100,"price":30,"timestamp":"..."}
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  );
}
