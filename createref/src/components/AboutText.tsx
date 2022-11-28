import React from "react";
import { createMuiTheme, ThemeProvider, Typography } from "@mui/material";

export default function AboutText() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Sora", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "orange", borderRadius: "5px", width: "500em" }}>
        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", padding: "10%" }}>
          <div style={{ fontSize: "2vw", padding: "2%", color: "#fff1db", }}>
            <div style={{ padding: "30px" }}>
              <Typography
                variant="h3"
                style={{ textDecoration: "none", color: "#fff1db" }}
              >
                My name's Markus, and I've been providing lawn and snow care in
                the Calgary area since 2017.{" "}
              </Typography>
            </div>
            <div style={{ padding: "30px" }}>
              <Typography
                variant="h4"
                style={{ textDecoration: "none", color: "#fff1db" }}
              >
                Kona Care has grown much since those early days, and the number
                of services offered has too.
              </Typography>
            </div>
            <div style={{ padding: "30px" }}>
              <Typography
                variant="h4"
                style={{ textDecoration: "none", color: "#fff1db" }}
              >
                With various lawn care services, including mowing, aeration, and
                more, Kona Care will have your yard looking show ready!
              </Typography>
            </div>

            <div style={{ padding: "30px" }}>
              <Typography
                variant="h4"
                style={{ textDecoration: "none", color: "#fff1db" }}
              >
                When winter rolls around the corner, we provide snow removal
                services at a flat monthly rate so that your property is
                accessible and safe.{" "}
              </Typography>
            </div>
            <div style={{ padding: "30px" }}>
              <Typography
                variant="h4"
                style={{ textDecoration: "none", color: "#fff1db" }}
              >
                Kona Care is fully licenced and insured, so you can rest assured
                that your property is in good hands.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
