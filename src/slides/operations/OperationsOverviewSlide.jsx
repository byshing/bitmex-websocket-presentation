import React from "react";
import { Slide, Heading, Grid, Box, UnorderedList, ListItem } from "spectacle";

export default function OperationsOverviewSlide() {
  return (
    <Slide className="slide-gradient-2">
      <Box className="fade-in-up">
        <Heading
          size={2}
          margin="0 0 60px 0"
          className="enhanced-heading"
          style={{
            fontSize: "3.5rem",
            textAlign: "center",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          Four Core Operations
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr" gridGap="60px">
          <Box className="slide-in-left">
            <Box
              className="glass-card"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <UnorderedList
                fontSize="36px"
                style={{
                  fontWeight: 600,
                  lineHeight: 2,
                  listStyle: "none",
                }}
              >
                <ListItem>
                  <strong>🎯 PARTIAL</strong> - Initial state
                </ListItem>
                <ListItem>
                  <strong>➕ INSERT</strong> - Add new records
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box className="slide-in-right">
            <Box>
              <UnorderedList
                fontSize="36px"
                style={{
                  fontWeight: 600,
                  lineHeight: 2,
                  listStyle: "none",
                }}
              >
                <ListItem>
                  <strong>✏️ UPDATE</strong> - Modify existing
                </ListItem>
                <ListItem>
                  <strong>🗑️ DELETE</strong> - Remove records
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Grid>
        <Box margin="60px 0 0">
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            🔄 These operations maintain real-time data synchronization
          </span>
        </Box>
      </Box>
    </Slide>
  );
}
