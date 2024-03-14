/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import {
  BannerLayer,
  ParallaxBanner,
  useParallax,
} from "react-scroll-parallax";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import Skyline from "../../assets/calgarySkyline.webp";
import KonaLogo from "../../assets/kona.svg";
import CareLogo from "../../assets/care.svg";
import Leaves from "../../assets/leaves.webp";
import Contact from "../Contact";
import About from "../About";
import Services from "../Services";

function Landing() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  /*  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  const leafParallax = useParallax<HTMLDivElement>({
    speed: 100,
  });

  const textParallax = useParallax<HTMLDivElement>({
    speed: 5,
    //translateY: [-100, 100],
  });

  const descriptionParallax = useParallax<HTMLDivElement>({
    speed: 100,
    translateY: [40, 100],
  });

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
        overflow: "clip",
        position: "relative",
        m: 0,
        p: 0,
        width: "100%",
      }}
    >
      <section id="top" />
      {/* landing page contents */}
      <Grid
        item
        sx={{
          width: "100%",
          maxHeight: "100vh",
          height: "100vh",
          maxWidth: "100vw",
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          {/* LEAVES */}
          <Grid
            component="div"
            ref={leafParallax.ref}
            item
            sx={{
              height: "30vh",
              zIndex: 2, // Increase z-index to overlap other elements
            }}
          >
            <img
              src={Leaves}
              alt="Leaves"
              style={{ transform: "translateX(-2%) translateY(-2%)" }}
            />
          </Grid>

          {/* KONA CARE */}
          <Grid
            item
            ref={textParallax.ref}
            component="div"
            sx={{
              zIndex: 10,
              position: "absolute",
              top: "15%",
              width: "100%",
              ml: "2%" /* , position: "relative" */,
            }}
          >
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

          {/* DESCRIPTION */}
          <Grid
            item
            ref={descriptionParallax.ref}
            sx={{
              position: "absolute",
              left: "2%",
              bottom: isMobileDevice ? "30%" : "23%",
              zIndex: 1,
              p: 2,
              //backdropFilter: "blur(10px)",
              //backgroundColor: "rgba(211, 211, 211,  0.9)",
            }}
          >
            <Typography
              variant={isMobileDevice ? "h6" : "h5"}
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
              , and <span style={{ color: "#FE914C" }}>snow removal</span>.
              Explore a diverse range of services provided to elevate your
              outdoor spaces throughout the seasons.
            </Typography>
          </Grid>

          {/* SKYLINE */}
          <img
            src={Skyline}
            alt="Calgary Skyline"
            style={{
              position: "absolute",
              left: 0,
              bottom: -10,
              width: "100%",
              height: "auto",
              zIndex: 10,
              filter: "contrast(0%) brightness(0%)",
            }}
          />
        </Grid>
      </Grid>
      {/* other sections */}
      <Grid item>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Grid>
    </Grid>
  );
}

export default Landing;
