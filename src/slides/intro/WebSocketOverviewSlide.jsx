import React from "react";
import { Slide, Heading, Box, UnorderedList, Text, ListItem } from "spectacle";

export default function WebSocketOverviewSlide() {
  return (
    <Slide className="slide-gradient-dark">
      <Box className="fade-in-up">
        <Heading
          color="primary"
          size={3}
          className="enhanced-heading"
          style={{
            fontSize: "2.8rem",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          WebSocket Connection Overview
        </Heading>
        <Text fontSize="24px" margin="0 0 10px 0">
          What is WebSocket?
        </Text>
        <UnorderedList color="secondary">
          <ListItem>
            Establishing a WebSocket connection to the BitMEX live data feed
          </ListItem>
          <ListItem>
            Subscribing to specific channels (e.g., orderBookL2_25)
          </ListItem>
          <ListItem>Handling incoming messages and updates</ListItem>
        </UnorderedList>
        <Text fontSize="24px" margin="0 0 10px 0">
          Different way of authentication though websocket
        </Text>
        <UnorderedList color="secondary">
          <ListItem>Signed request using header (API Key required)</ListItem>
          <ListItem>
            Signed request using url parameters (API Key required) [mobile]
          </ListItem>
          <ListItem>Cookie auth (same domain only) [web]</ListItem>
          <ListItem>
            Auth commands after connection established [deprecating]
          </ListItem>
        </UnorderedList>
      </Box>
    </Slide>
  );
}
