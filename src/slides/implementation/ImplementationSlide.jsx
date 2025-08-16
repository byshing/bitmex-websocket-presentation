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

export default function ImplementationSlide() {
  return (
    <Slide>
      <Heading>Implementation Patterns</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList fontSize="20px">
            <ListItem>Router by table + action</ListItem>
            <ListItem>Separate handlers per feed type</ListItem>
            <ListItem>Key-based record management</ListItem>
            <ListItem>Memory management for infinite feeds</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <CodePane language="javascript" fontSize="11px">
            {`class BitMEXDataManager {
  constructor() {
    this.tables = new Map();
    this.keys = {
      order: ['orderID'],
      position: ['symbol'], 
      orderBookL2: ['symbol', 'id']
    };
  }
  
  handleMessage(msg) {
    const handler = this.getHandler(msg.table, msg.action);
    handler(msg.table, msg.data, this.keys[msg.table]);
  }
  
  getHandler(table, action) {
    return this.handlers[action] || this.handleUnknown;
  }
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  );
}
