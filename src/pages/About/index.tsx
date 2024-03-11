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
        flexDirection: isMobileDevice ? "column" : "row", // Adjusting direction based on mobile or desktop
        //alignItems: "center",
        flexWrap: "nowrap",
        position: "relative",
        backgroundColor: "#266BBC", //"#F15A23",
      }}
    >
      {/* Left side - Text */}
      <Grid
        item
        xs={isMobileDevice ? 12 : 6} // Full width on mobile, half on desktop
        sx={{
          mt: "15%",
          px: isMobileDevice ? 4 : 10,
          //padding: 2, // Adjust padding as needed
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
        <Typography variant={isMobileDevice ? "body1" : "h5"} sx={{ mt: 6, maxWidth: "500px" }}>
          Kona Care works with local nurseries to provide and plant native
          plants and trees that will last in Calgary’s climate.
        </Typography>
        <Typography variant={isMobileDevice ? "body1" : "h5"} sx={{ mt: 6, maxWidth: "500px" }}>
          Our goal is to provide exceptional work and deliver quality services.
          Contact us today and see what we can do for you.{" "}
        </Typography>
      </Grid>

      {/* Right side - Image Placeholder */}
      <Grid
        item
        xs={isMobileDevice ? 12 : 6} // Full width on mobile, half on desktop
        sx={
          {
            // Adjust padding as needed
          }
        }
      >
        <Box
          sx={{
            width: "100%", // Ensure the image placeholder takes full width
            height: "100%", // Adjust height as needed
            backgroundColor: "lightgray", // Placeholder color
          }}
        >
          <img
            src={AboutPhoto}
            alt="About"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
