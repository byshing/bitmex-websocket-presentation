import React from "react";
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, Text } from "spectacle";

export default function FeedTypesOverviewSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3} margin="0 0 30px 0">
        Available WebSocket Feeds
      </Heading>
      
      <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="20px" fontSize="14px">
        {/* Public Feeds */}
        <Box>
          <Heading color="primary" size={5} margin="0 0 15px 0">
            🌐 Public Feeds
          </Heading>
          <Text color="secondary" fontSize="12px" margin="0 0 10px 0">
            No authentication required
          </Text>
          <UnorderedList color="secondary" fontSize="12px" lineHeight="1.4">
            <ListItem><strong>funding</strong> - Swap funding rates</ListItem>
            <ListItem><strong>instrument</strong> - Instrument updates</ListItem>
            <ListItem><strong>insurance</strong> - Insurance fund</ListItem>
            <ListItem><strong>liquidation</strong> - Liquidation orders</ListItem>
            <ListItem><strong>orderBookL2_25</strong> - Top 25 levels</ListItem>
            <ListItem><strong>orderBookL2</strong> - Full level 2 book</ListItem>
            <ListItem><strong>orderBook10</strong> - Top 10 levels</ListItem>
            <ListItem><strong>quote</strong> - Top level of book</ListItem>
            <ListItem><strong>quoteBin*</strong> - Quote bins (1m,5m,1h,1d)</ListItem>
            <ListItem><strong>settlement</strong> - Settlement data</ListItem>
            <ListItem><strong>trade</strong> - Live trades</ListItem>
            <ListItem><strong>tradeBin*</strong> - Trade bins (1m,5m,1h,1d)</ListItem>
          </UnorderedList>
        </Box>

        {/* Authenticated Feeds */}
        <Box>
          <Heading color="primary" size={5} margin="0 0 15px 0">
            🔐 Authenticated Feeds
          </Heading>
          <Text color="secondary" fontSize="12px" margin="0 0 10px 0">
            Requires authentication
          </Text>
          <UnorderedList color="secondary" fontSize="12px" lineHeight="1.4">
            <ListItem><strong>affiliate</strong> - Affiliate status & payouts</ListItem>
            <ListItem><strong>execution</strong> - Individual executions</ListItem>
            <ListItem><strong>order</strong> - Live order updates</ListItem>
            <ListItem><strong>margin</strong> - Account balance & requirements</ListItem>
            <ListItem><strong>position</strong> - Position updates</ListItem>
            <ListItem><strong>transact</strong> - Deposit/withdrawal updates</ListItem>
            <ListItem><strong>wallet</strong> - Bitcoin address balance</ListItem>
          </UnorderedList>
        </Box>

        {/* Platform Feeds */}
        <Box>
          <Heading color="primary" size={5} margin="0 0 15px 0">
            🔧 Platform Feeds
          </Heading>
          <Text color="secondary" fontSize="12px" margin="0 0 10px 0">
            /realtimePlatform endpoint only
          </Text>
          <UnorderedList color="secondary" fontSize="12px" lineHeight="1.4">
            <ListItem><strong>announcement</strong> - Site announcements</ListItem>
            <ListItem><strong>chat</strong> - Trollbox chat</ListItem>
            <ListItem><strong>connected</strong> - User/bot statistics</ListItem>
            <ListItem><strong>publicNotifications</strong> - System notifications</ListItem>
            <ListItem><strong>privateNotifications</strong> - Individual notifications</ListItem>
          </UnorderedList>
          
          <Box 
            margin="15px 0 0"
            padding="10px"
            style={{
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '6px'
            }}
          >
            <Text color="primary" fontSize="11px" fontWeight="bold">
              💡 Most trading apps focus on orderBookL2_25, trade, and authenticated feeds
            </Text>
          </Box>
        </Box>
      </Grid>
    </Slide>
  );
}
