/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import AboutPhoto from "../../assets/about2.jpeg";

function About() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return (
    <Grid
      container
      sx={{
        flexDirection: isMobileDevice ? "column" : "row",
        flexWrap: "nowrap",
        position: "relative",
        backgroundColor: "#266BBC",
      }}
    >
      {/* Left side - Text */}
      <Grid
        item
        xs={isMobileDevice ? 12 : 6}
        sx={{
          mt: "15%",
          px: isMobileDevice ? 4 : 10,
          py: isMobileDevice ? 6 : 0,
        }}
      >
        <Typography
          variant={isMobileDevice ? "body1" : "h5"}
          sx={{ maxWidth: isMobileDevice ? "none" : "500px" }}
        >
          Kona Care has been providing landscaping, lawn care, and snow removal
          services to the Calgary area since 2018.
        </Typography>
        <Typography
          variant={isMobileDevice ? "body1" : "h5"}
          sx={{ mt: 6, maxWidth: "500px" }}
        >
          Kona Care works with local nurseries to provide and plant native
          plants and trees that will last in Calgary’s climate.
        </Typography>
        <Typography
          variant={isMobileDevice ? "body1" : "h5"}
          sx={{ mt: 6, maxWidth: "500px" }}
        >
          Our goal is to provide exceptional work and deliver quality services.
          Contact us today and see what we can do for you.{" "}
        </Typography>
      </Grid>

      {/* Right side - Image Placeholder */}
     
        <img
          src={AboutPhoto}
          alt="About"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
    </Grid>
  );
}

export default About;
