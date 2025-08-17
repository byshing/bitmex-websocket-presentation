import React from 'react'
import { Slide, Heading, Grid, Box, UnorderedList, ListItem, Text, CodePane } from 'spectacle'

export default function ProblemStatementSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3} margin="0 0 30px 0" textAlign="center">
        The Problem: High-Frequency Data vs React-Redux
      </Heading>
      
      <Grid gridTemplateColumns="1fr 1fr" gridGap="40px">
        <Box>
          <Heading color="primary" size={5} margin="0 0 20px 0">
            ⚡ WebSocket Reality
          </Heading>
          <UnorderedList color="secondary" fontSize="18px" lineHeight="1.6">
            <ListItem margin="15px 0">
              <strong>Unpredictable Updates</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Messages arrive out-of-order, at varying frequencies
              </span>
            </ListItem>
            <ListItem margin="15px 0">
              <strong>High-Frequency Bursts</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                100+ updates/second during market volatility
              </span>
            </ListItem>
            <ListItem margin="15px 0">
              <strong>Mixed Operation Types</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Insert, update, delete operations on the same dataset
              </span>
            </ListItem>
            <ListItem margin="15px 0">
              <strong>State Synchronization</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Partial updates require merging with existing state
              </span>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading color="primary" size={5} margin="0 0 20px 0">
            🐌 React-Redux Struggles
          </Heading>
          <UnorderedList color="secondary" fontSize="18px" lineHeight="1.6">
            <ListItem margin="15px 0">
              <strong>Action Dispatch Overhead</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Every update triggers action → reducer → state
              </span>
            </ListItem>
            <ListItem margin="15px 0">
              <strong>Immutable State Cost</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Deep cloning large datasets on every update
              </span>
            </ListItem>
            <ListItem margin="15px 0">
              <strong>Re-render Cascades</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Connected components re-render unnecessarily
              </span>
            </ListItem>
            <ListItem margin="15px 0">
              <strong>Complex Reducers</strong><br/>
              <span style={{ fontSize: '14px', opacity: 0.8 }}>
                Handling partial updates requires intricate logic
              </span>
            </ListItem>
          </UnorderedList>
        </Box>
      </Grid>

      <Box margin="30px 0 0" textAlign="center">
        <Box 
          padding="20px"
          style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '8px',
            display: 'inline-block'
          }}
        >
          <Text color="primary" fontSize="20px" fontWeight="bold">
            🎯 Our Goal: Find a better way to manage real-time state
          </Text>
          <Text color="secondary" fontSize="16px" margin="10px 0 0">
            while keeping React apps performant and developer-friendly
          </Text>
        </Box>
      </Box>
    </Slide>
  )
}
