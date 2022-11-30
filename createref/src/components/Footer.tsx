import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function BounceAnimation(props: { handleClick: (offset: number) => void }) {
  const [bounced, setBounced] = useState(false);
  const style = {
    display: "inline-block",
    transform: bounced ? `rotate(10deg)` : `rotate(0deg)`,
    transition: `transform 150ms`,
  };
  useEffect(() => {
    if (!bounced) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setBounced(false);
    }, 150);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [bounced, 150]);
  const trigger = () => {
    setBounced(true);
  };

  return (
    <span onMouseEnter={trigger} style={style}>
      <button
        onClick={() => props.handleClick(0)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          outline: "none",
          position: "relative",
          top: "74%",
        }}
      >
        <img
          src={require("../images/up.png")}
          style={{ width: "100%", height: "auto", maxWidth: "100px" }}
        />
      </button>
    </span>
  );
}

export default function Footer(props: {
  offset: Number;
  handleClick: (offset: number) => void;
  isMobile: boolean;
}) {
  console.log(props.isMobile)
  console.log(typeof props.handleClick);
  return (
    <div style={{ position: "absolute", width: "100%", bottom: props.isMobile? -120 : -150 }}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "left",
            display: "flex",
          }}
        >
          <Typography
            variant="caption"
            color="white"
            style={{ position: "relative", top: "80%" }}
          >
            Kona Care Landscaping®
          </Typography>
          {!props.isMobile && <BounceAnimation handleClick={props.handleClick} />}
        </Box>
          <Box
            sx={{
              flexGrow: 0.1,
              justifyContent: "center",
              display: "flex", 
              my: 1,
            }}
          >
            <a
              href="https://www.instagram.com/konacareyyc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={props.isMobile? 70 : 85}
                style={{
                  color: "white",
                  padding: props.isMobile? "10px" : "20px",
                  position: "relative",
                  top: "40%",
                }}
              />
            </a>
            <a
              href="https://www.facebook.com/KonaLawnGardenSnow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={props.isMobile? 70 : 85}
                style={{
                  color: "white",
                  padding: props.isMobile? "10px" : "20px",
                  position: "relative",
                  top: "40%",
                  marginRight: "20%",
                }}
              />
            </a>
          </Box>
        <Box
          sx={{
            flexGrow: 0.1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <a href="/">
            <img
              src={require("../images/kona_care_logo.PNG")}
              style={{ width: "100%", height: "auto", maxWidth: "180px" }}
            />
          </a>
        </Box>
      </Container>
    </div>
  );
}
