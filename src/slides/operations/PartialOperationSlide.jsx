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
          <CodePane language="json" fontSize="10px">
{`{
      "table":"orderBookL2_25",
      "keys":["symbol","id","side"],
      "types":{"id":"long","price":"float","side":"symbol","size":"long","symbol":"symbol","timestamp":"timestamp"}
      "action":"partial",
      "data":[
        {"symbol":"XBTUSD","id":17999992000,"side":"Sell","size":100,"price":80,"timestamp":"2022-02-09T11:23:06.802Z"},
        {"symbol":"XBTUSD","id":17999993000,"side":"Sell","size":20,"price":70,"timestamp":"2022-02-09T11:23:06.802Z"},
        {"symbol":"XBTUSD","id":17999994000,"side":"Sell","size":10,"price":60,"timestamp":"2022-02-09T11:23:06.802Z"},
        {"symbol":"XBTUSD","id":17999995000,"side":"Buy","size":10,"price":50,"timestamp":"2022-02-09T11:23:06.802Z"},
        {"symbol":"XBTUSD","id":17999996000,"side":"Buy","size":20,"price":40,"timestamp":"2022-02-09T11:23:06.802Z"},
        {"symbol":"XBTUSD","id":17999997000,"side":"Buy","size":100,"price":30,"timestamp":"2022-02-09T11:23:06.802Z"}
      ]
    }`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
