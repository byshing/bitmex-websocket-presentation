import React from 'react'
import { Slide, Heading, UnorderedList, ListItem, Box } from 'spectacle'

export default function KeyTakeawaysSlide() {
  return (
    <Slide backgroundColor="secondary">
      <Heading color="primary" size={2} margin="0 0 40px 0">Key Takeaways</Heading>
      <Box color="primary" fontSize="24px">
        <UnorderedList>
          <ListItem>PARTIAL establishes initial state</ListItem>
          <ListItem>INSERT/UPDATE/DELETE maintain state</ListItem>
          <ListItem>Keys determine record identity</ListItem>
          <ListItem>Feed patterns dictate data management</ListItem>
          <ListItem>Proper error handling ensures reliability</ListItem>
        </UnorderedList>
      </Box>
    </Slide>
  )
}
