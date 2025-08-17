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

export default function StateUpdateSlide() {
  return (
    <Slide>
      <Heading color="primary" size={3}>
        State Update Feeds
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="18px">
            <ListItem>Fixed set of records (state)</ListItem>
            <ListItem>INSERT once, then UPDATE</ListItem>
            <ListItem>Examples: position, margin, wallet</ListItem>
            <ListItem>Perfect for signals (signals) </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <CodePane language="json" fontSize="11px">
            {`// Initial state
{
  "table": "position", 
  "action": "partial",
  "data": [{"account": 1,"symbol": "XBTUSD", "currentQty": 0}]
}

// State change
{
  "table": "position",
  "action": "update", 
  "data": [{"account": 1,"symbol": "XBTUSD", "currentQty": 500}]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  );
}
