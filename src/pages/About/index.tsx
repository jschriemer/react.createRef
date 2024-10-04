import { Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import AboutProfile from "../../assets/aboutProfile.webp";

function About() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        flexWrap: "nowrap",
        position: "relative",
        backgroundColor: "black", //"#266BBC",
        overflow: "clip",
        border: "none",
      }}
    >
      <Grid item>
        <Grid
          container
          sx={{
            flexWrap: "nowrap",
            flexDirection: isMobileDevice ? "column" : "row",
          }}
        >
          {/* Left side - Text */}
          <Grid
            item
            sx={{
              my: "10%",
              px: isMobileDevice ? 4 : 10,
              py: isMobileDevice || isTabletDevice ? 6 : 0,
              minWidth: isTabletDevice ? "400px" : "none",
              //backgroundColor: "#266BBC",
              height: "100%",
              zIndex: 100,
            }}
          >
            <Typography
              variant={isMobileDevice ? "body1" : "h5"}
              sx={{ maxWidth: isMobileDevice ? "none" : "500px" }}
            >
              Kona Care has been providing landscaping, lawn care, and snow
              removal services to the Calgary area{" "}
              <span style={{ color: "#fe914c" }}>since 2018</span>.
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
              Our goal is to provide exceptional work and deliver quality
              services. Contact us today and see what we can do for you.{" "}
            </Typography>
          </Grid>

          {/* single image for desktop*/}
          <Grid
            item
            sx={{
              mt: isMobileDevice ? 2 : "10%",
              px: isMobileDevice ? 4 : 10,
              py: 0,
            }}
          >
            <img
              src={AboutProfile}
              alt="About"
              style={{
                width: "100%",
                height: "80%",
                maxHeight: "900px",
                objectFit: "cover",
                marginBottom: isMobileDevice ? "50px" : "none",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
