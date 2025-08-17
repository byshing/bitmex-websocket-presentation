import React from "react";
import { Slide, Heading, CodePane, Box } from "spectacle";

export default function ErrorHandlingSlide() {
  return (
    <Slide>
      <Heading>Error Handling</Heading>
      <Box>
        <CodePane language="javascript" fontSize="12px" margin="20px 0">{
`{
  "status":400,
  "error":"Unknown table: orderBook. Please see the documentation at https://www.bitmex.com/app/wsAPI.",
  "meta":{},
  "request":{"op":"subscribe","args":"orderBook:test"}
}`}
        </CodePane>
      </Box>
    </Slide>
  );
}
