import {useState, useEffect} from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BounceAnimation({ parallax }: any) {
    const [bounced, setBounced] = useState(false);
    const style = {
      display: 'inline-block',
      transform: bounced
        ? `rotate(0deg)`
        : `rotate(0deg)`,
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
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <img
            src={require("../images/up.png")}
            style={{ width: "100%", height: "auto", maxWidth: "100px" }}
          />
        </button>
      </span>
    );
  };

export default function Footer({ parallax }: any) {
  return (
    <div style={{ position: "absolute", width: "100%", bottom: -150 }}>
      <Container
        maxWidth="lg"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <a href="/">
            <img
              src={require("../images/kona_care_logo.PNG")}
              style={{ width: "100%", height: "auto", maxWidth: "100px" }}
            />
          </a>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
            <BounceAnimation {...parallax}/>
          <Typography variant="caption" color="initial">
            Copyright ©2022. [] Limited
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
