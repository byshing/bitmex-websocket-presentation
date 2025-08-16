import React from "react";
import { Slide, Heading, Grid, Box, Text, CodePane } from "spectacle";

export default function PartialFieldsSlide() {
  return (
    <Slide backgroundColor="tertiary">
      <Heading color="primary" size={3}>
        PARTIAL Fields:
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridGap="30px">
        <Box>
          <Box margin="20px 0">
            <Text color="primary" fontSize="20px" fontWeight="bold">
              keys
            </Text>
            <Text color="secondary" fontSize="16px">
              Suggested unique identifiers for each record
            </Text>
            <CodePane language="json" fontSize="14px">
              {`"keys": ["symbol", "id", "side"]`}
            </CodePane>
          </Box>

          <Box margin="20px 0">
            <Text color="primary" fontSize="20px" fontWeight="bold">
              types
            </Text>
            <Text color="secondary" fontSize="16px">
              Data type definitions
            </Text>
            <Text color="secondary" fontSize="16px">
              Question: guess what it means by `"symbol": "symbol"` here?
            </Text>
            <CodePane language="json" fontSize="14px">
              {`"types": {"symbol": "symbol", "id": "long"}`}
            </CodePane>
          </Box>
        </Box>

        <Box>
          <Box margin="20px 0">
            <Text color="primary" fontSize="20px" fontWeight="bold">
              filter
            </Text>
            <Text color="secondary" fontSize="16px">
              Applied filters for this subscription
            </Text>
            <Text color="secondary" fontSize="16px">
              When multiple subscriptions are active to the same table, use the
              `filter` to correlate which datagram belongs to which subscription
            </Text>
            <CodePane language="json" fontSize="14px">
              {`"filter": {"symbol": "XBTUSD"}`}
            </CodePane>
          </Box>
        </Box>
      </Grid>
    </Slide>
  );
}
