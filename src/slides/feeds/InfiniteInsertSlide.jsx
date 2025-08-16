import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane, codePaneThemes} from 'spectacle'

export default function InfiniteInsertSlide() {
  return (
    <Slide backgroundColor="quaternary">
      <Heading color="primary" size={3}>Infinite Insert Feeds</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="18px">
            <ListItem>Continuous stream of new records</ListItem>
            <ListItem>Never use UPDATE/DELETE</ListItem>
            <ListItem>Examples: trades, liquidations</ListItem>
            <ListItem>Manage memory with sliding windows</ListItem>
          </UnorderedList>
        </Box>
        
        <Box>
          <CodePane language="json" fontSize="12px">
{`{
  "table": "trade",
  "action": "insert",
  "data": [
    {
      "timestamp": "2025-08-16T10:30:01.000Z",
      "symbol": "XBTUSD",
      "side": "Buy",
      "size": 1000,
      "price": 42500,
      "trdMatchID": "abc-123-def"
    }
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
