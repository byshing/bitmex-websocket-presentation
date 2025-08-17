import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, CodePane } from 'spectacle'

export default function InsertOperationSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>INSERT - Adding New Records</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <UnorderedList color="secondary" fontSize="20px">
            <ListItem>Adds new records to the dataset</ListItem>
            <ListItem>`data` fields is always an array</ListItem>
            <ListItem>Records in `data` must be unique identified by the fields specified in the `keys` array (No duplicated insert)</ListItem>
            <ListItem>Records in data may not contain all fields specified in the `types` schema </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <CodePane language="json" fontSize="12px">
{`{
  "table": "orderBookL2_25",
  "action": "insert",
  "data": [
    {
      "symbol": "XBTUSD",
      "id": 17999995500,
      "side": "Buy",
      "size": 10,
      "price": 45
    }
  ]
}`}
          </CodePane>
        </Box>
      </Grid>
    </Slide>
  )
}
