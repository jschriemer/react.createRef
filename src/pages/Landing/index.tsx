/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import Skyline from "../../assets/calgarySkyline.webp";

function Landing() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        height: isMobileDevice || isTabletDevice ? "100%" : "100vh",
        flexWrap: "nowrap",
        overflow: "auto",
        position: "relative",
        m: 0,
        p: 0,
        width: "100%",
      }}
    >
      {/* skyline that is at bottom of page at all times */}
      <Grid item>
        <img
          src={Skyline}
          alt="Calgary Skyline"
          style={{
            position: "fixed",
            left: 0,
            bottom: -10,
            width: "100%",
            height: "auto",
            zIndex: 0,
            filter: "contrast(0%) brightness(0%)",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Landing;
