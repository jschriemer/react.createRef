import React from "react";
import { createMuiTheme, ThemeProvider, Typography } from "@mui/material";

export default function Home(props: {
  offset: Number;
  handleClick: (offset: number) => void;
}) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Sora", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Typography
            variant="h1"
            style={{ textDecoration: "none", color: "orange" }}
          >
            Kona Care
          </Typography>
          <Typography
            variant="h1"
            style={{ textDecoration: "none", color: "orange" }}
          >
            Landscaping
          </Typography>
          <button
            className="button-77"
            role="button"
            style={{ marginTop: "40px" }}
            onClick={() => props.handleClick(2)}
          >
            Book Now
          </button>
        </div>
      </ThemeProvider>
      <img
        src={require("../images/markus.png")}
        style={{ width: "100%", height: "auto", maxWidth: "35vw" }}
      />
    </>
  );
}
