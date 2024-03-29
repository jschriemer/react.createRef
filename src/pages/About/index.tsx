/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
//import AboutPhoto from "../../assets/about2.jpeg";
import AboutProfile from "../../assets/aboutProfile.jpeg";
import About1 from "../../assets/about1.png";
import About2 from "../../assets/about2.png";
import About3 from "../../assets/about3.png";
import Carousel from "../../components/Carousel";

const images = [
  {
    id: 1,
    src: About1,
  },
  {
    id: 2,
    src: About2,
  },
  {
    id: 3,
    src: About3,
  },
];

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
        backgroundColor: "#266BBC",
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
              backgroundColor: "#266BBC",
              height: "100%",
              zIndex: 100,
            }}
          >
            <Typography
              variant={isMobileDevice ? "body1" : "h5"}
              sx={{ maxWidth: isMobileDevice ? "none" : "500px" }}
            >
              Kona Care has been providing landscaping, lawn care, and snow
              removal services to the Calgary area since 2018.
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
              }}
            />
          </Grid>
        </Grid>

        {/* bottom - Image Placeholder */}
        <Grid
          item
          sx={{
            width: "100%", // Take half of the screen width
            height: "auto", // Automatically adjust height
            maxWidth: isMobileDevice || isTabletDevice ? "none" : "none", // No max width on mobile and tablet
          }}
        >
          {isMobileDevice ? (
            <Carousel
              sx={{ height: "100%", py: 3, px: 2 }}
              fadeEdges={true}
              carouselItems={images}
              renderItem={(item: { id: number; src: string }, idx: number) => {
                return (
                  <img
                    key={idx}
                    src={item.src}
                    alt="About"
                    style={{
                      width: "100%",
                      height: "100%",
                      // Other styles here
                    }}
                  />
                );
              }}
            />
          ) : (
            <Grid container sx={{ flexWrap: "nowrap" }}>
              {images.map((image, idx) => (
                <Grid item key={idx} xs={12} sm={6}>
                  <img
                    src={image.src}
                    alt="About"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
