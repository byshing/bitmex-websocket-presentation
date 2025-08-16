import React from 'react'
import { Slide, Heading, UnorderedList, ListItem, Box } from 'spectacle'

export default function FeedTypesOverviewSlide() {
  return (
    <Slide backgroundColor="quaternary">
      <Heading color="primary" size={2} margin="0 0 40px 0">Feed Types & Patterns</Heading>
      <Box color="secondary" fontSize="24px">
        <UnorderedList>
          <ListItem>
            <strong>Infinite Insert Feeds</strong> - orderBookL2, trade, liquidation
          </ListItem>
          <ListItem>
            <strong>State Update Feeds</strong> - position, margin, wallet
          </ListItem>
          <ListItem>
            <strong>Snapshot + Updates</strong> - Most authenticated feeds
          </ListItem>
        </UnorderedList>
      </Box>
    </Slide>
  )
}
