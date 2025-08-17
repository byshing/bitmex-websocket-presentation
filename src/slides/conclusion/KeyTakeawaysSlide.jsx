import React from "react";
import { Slide, Heading, UnorderedList, ListItem, Box } from "spectacle";

export default function KeyTakeawaysSlide() {
  return (
    <Slide 
      backgroundColor="#0f172a"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
      }}
    >
      <Box className="fade-in-up">
        <Heading
          size={2}
          margin="0 0 60px 0"
          className="enhanced-heading"
          style={{
            fontSize: "3.5rem",
            textAlign: "center",
            color: "#60a5fa",
            textShadow: "0 4px 20px rgba(96, 165, 250, 0.4)",
            fontWeight: 700,
          }}
        >
          Key Takeaways
        </Heading>
        <Box
          className="glass-card"
          style={{
            background: "rgba(30, 41, 59, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(71, 85, 105, 0.5)",
            borderRadius: "16px",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <UnorderedList
            fontSize="28px"
            style={{
              listStyle: "none",
              lineHeight: 1.8,
              color: "#e2e8f0",
            }}
          >
            <ListItem
              className="slide-in-left"
              style={{
                padding: "24px",
                margin: "20px 0",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%)",
                borderRadius: "12px",
                border: "2px solid rgba(59, 130, 246, 0.4)",
                boxShadow: "0 4px 16px rgba(59, 130, 246, 0.2)",
                animationDelay: "0.1s",
                fontWeight: 600,
                color: "#dbeafe",
              }}
            >
              🎯 PARTIAL establishes initial state
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "24px",
                margin: "20px 0",
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.15) 100%)",
                borderRadius: "12px",
                border: "2px solid rgba(16, 185, 129, 0.4)",
                boxShadow: "0 4px 16px rgba(16, 185, 129, 0.2)",
                animationDelay: "0.2s",
                fontWeight: 600,
                color: "#d1fae5",
              }}
            >
              🔄 INSERT/UPDATE/DELETE maintain state
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "24px",
                margin: "20px 0",
                background: "linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)",
                borderRadius: "12px",
                border: "2px solid rgba(34, 211, 238, 0.4)",
                boxShadow: "0 4px 16px rgba(34, 211, 238, 0.2)",
                animationDelay: "0.3s",
                fontWeight: 600,
                color: "#cffafe",
              }}
            >
              🔑 Keys determine record identity
            </ListItem>
            <ListItem
              className="slide-in-left"
              style={{
                padding: "24px",
                margin: "20px 0",
                background: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)",
                borderRadius: "12px",
                border: "2px solid rgba(251, 146, 60, 0.4)",
                boxShadow: "0 4px 16px rgba(251, 146, 60, 0.2)",
                animationDelay: "0.4s",
                fontWeight: 600,
                color: "#fed7aa",
              }}
            >
              📊 Feed patterns dictate data management
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Slide>
  );
}
