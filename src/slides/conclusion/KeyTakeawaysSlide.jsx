import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Box } from "spectacle";

export default function KeyTakeawaysSlide() {
  return (
    <Slide className="slide-gradient-1">
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
          Key Takeaways
        </Heading>
        <Box
          className="glass-card"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <UnorderedList
            fontSize="32px"
            style={{
              listStyle: "none",
              lineHeight: 2,
            }}
          >
            <ListItem
              className="slide-in-left"
              style={{
                padding: "20px",
                margin: "20px 0",
                background: "rgba(255, 215, 0, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(255, 215, 0, 0.4)",
                boxShadow: "0 4px 16px rgba(255, 215, 0, 0.2)",
                animationDelay: "0.1s",
                fontWeight: 600,
              }}
            >
              🎯 PARTIAL establishes initial state
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "20px",
                margin: "20px 0",
                background: "rgba(0, 255, 136, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(0, 255, 136, 0.4)",
                boxShadow: "0 4px 16px rgba(0, 255, 136, 0.2)",
                animationDelay: "0.2s",
                fontWeight: 600,
              }}
            >
              🔄 INSERT/UPDATE/DELETE maintain state
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "20px",
                margin: "20px 0",
                background: "rgba(0, 212, 255, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(0, 212, 255, 0.4)",
                boxShadow: "0 4px 16px rgba(0, 212, 255, 0.2)",
                animationDelay: "0.3s",
                fontWeight: 600,
              }}
            >
              🔑 Keys determine record identity
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "20px",
                margin: "20px 0",
                background: "rgba(255, 107, 0, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(255, 107, 0, 0.4)",
                boxShadow: "0 4px 16px rgba(255, 107, 0, 0.2)",
                animationDelay: "0.4s",
                fontWeight: 600,
              }}
            >
              📊 Feed patterns dictate data management
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "20px",
                margin: "20px 0",
                background: "rgba(138, 43, 226, 0.2)",
                borderRadius: "12px",
                border: "2px solid rgba(138, 43, 226, 0.4)",
                boxShadow: "0 4px 16px rgba(138, 43, 226, 0.2)",
                animationDelay: "0.5s",
                fontWeight: 600,
              }}
            >
              🛡️ Proper error handling ensures reliability
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          margin="60px 0 0"
          style={{
            textAlign: "center",
            padding: "20px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <span
            style={{
              color: "#0a0a0a",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            🚀 Master these concepts for effective real-time trading
            applications!
          </span>
        </Box>
      </Box>
    </Slide>
  );
}
