/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import Skyline from "../../assets/calgarySkyline.webp";
import KonaLogo from "../../assets/kona.svg";
import CareLogo from "../../assets/care.svg";
import Leaves from "../../assets/leaves.webp";
import Contact from "../Contact";


function Landing() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        //minHeight: "100vh",
        justifyContent: "flex-start",
        //height: isMobileDevice || isTabletDevice ? "100%" : "100vh",
        flexWrap: "nowrap",
        //overflow: "clip",
        position: "relative",
        m: 0,
        p: 0,
        pt: 6,
        width: "100%",
      }}
    >
      <Grid
        item
        sx={{
          position: "fixed",
          left: -5,
          top: "-65%",
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      >
        <img src={Leaves} alt="Leaves" />
      </Grid>

      <Grid item sx={{ zIndex: 1, width: "100%", ml: "2%" }}>
        <Grid
          container
          direction={isMobileDevice ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexWrap: "nowrap",
            width: "100%",
            maxWidth: "97.5%",
          }}
        >
          <Grid item sx={{ flex: 1 }}>
            <img src={KonaLogo} alt="Kona Logo" style={{ width: "100%" }} />
          </Grid>

          <Grid item sx={{ flex: 1 }}>
            <img src={CareLogo} alt="Care Logo" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          position: "absolute",
          left: "2%",
          bottom: "23%",
          zIndex: 1000,
          p: 2,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(211, 211, 211,  0.9)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            maxWidth: "630px",
            color: "black",
            textAlign: "left",
          }}
        >
          Calgary's best for lawn and snow. Providing{" "}
          <span style={{ color: "#FE914C" }}>
            landscape maintenance, horticulture
          </span>
          , and <span style={{ color: "#FE914C" }}>snow removal</span>. Explore
          a diverse range of services provided to elevate your outdoor spaces
          throughout the seasons.
        </Typography>
      </Grid>
      <img
        src={Skyline}
        alt="Calgary Skyline"
        style={{
          position: "fixed",
          left: 0,
          bottom: -30,
          width: "100%",
          height: "auto",
          zIndex: 10,
          filter: "contrast(0%) brightness(0%)",
        }}
      />
      <Contact />
    </Grid>
  );
}

export default Landing;
/*       <div
        style={{
          position: "fixed",
          top: "100%",
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: isLogoVisible ? "transparent" : "black",
          transition: "background-color 0.3s ease-in-out",
        }}
      ></div> */
