/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";

function Extra() {
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
      }}
    ></Grid>
  );
}

export default Extra;
