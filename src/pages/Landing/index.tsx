/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from "@mui/material";
import { useParallax } from "react-scroll-parallax";
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
import Footer from "../../components/Footer";

function Landing() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  const leafParallax = useParallax<HTMLDivElement>({
    speed: 100,
  });

  const textParallax = useParallax<HTMLDivElement>({
    translateY: [isMobileDevice ? -120 : -350, 200],
    speed: 5,
  });

  /*
  const descriptionParallax = useParallax<HTMLDivElement>({
    speed: 100,
    translateY: [50, 50],
  }); */

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
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
          {/* KONA CARE */}
          <Grid
            item
            ref={textParallax.ref}
            component="div"
            sx={{
              zIndex: 1,
              position: "absolute",
              top: isTabletDevice ? "5%" : "15%",
              width: "100%",
              ml: "2%" /* , position: "relative" */,
            }}
          >
            <Grid
              container
              direction={"column"}
              justifyContent={isTabletDevice ? "flex-start" : "center"}
              alignItems="center"
              sx={{
                flexWrap: "nowrap",
                width: "100%",
                maxWidth: "96%",
              }}
            >
              <Grid item sx={{ width: isMobileDevice ? "100%" : "25%" }}>
                <img src={KonaLogo} alt="Kona Logo" style={{ width: "100%" }} />
              </Grid>

              <Grid item sx={{ width: isMobileDevice ? "100%" : "25%" }}>
                <img src={CareLogo} alt="Care Logo" style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Grid>

          {/* LEAVES */}
          <Grid
            component="div"
            ref={leafParallax.ref}
            item
            sx={{
              height: isMobileDevice ? "45vh" : "100vh",
              zIndex: 1000, // Increase z-index to overlap other elements
            }}
          >
            <img
              src={Leaves}
              alt="Leaves"
              style={{
                transform: `translateX(${
                  isMobileDevice ? "-14%" : "-10%"
                }) translateY(-5%) rotateY(0deg) scale(1.2)`,
              }}
            />
          </Grid>

          {/* DESCRIPTION */}
          <Grid
            item
            //ref={descriptionParallax.ref}
            sx={{
              position: "absolute",
              left: isMobileDevice ? "0" : "25%",
              bottom: isMobileDevice ? "0%" : "13%",
              zIndex: 1000,
              p: 2,
              /* mixBlendMode: "difference", */
              backdropFilter: "blur(10px)",
              backgroundColor: "black",
            }}
          >
            <Typography
              variant={isMobileDevice ? "h6" : "h5"}
              sx={{
                maxWidth: "1030px",
                color: "lightgrey",
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
              left: -1,
              bottom: isMobileDevice ? 200 : 100,
              width: "101%",
              height: "auto",
              zIndex: 100,
              filter: "contrast(0%) brightness(0%)",
            }}
          />
          {/* black box right below skyline */}
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: isMobileDevice ? "210px" : "120px",
              backgroundColor: "black",
              zIndex: 100,
            }}
          />
        </Grid>
      </Grid>
      {/* other sections */}
      <Grid item sx={{ width: "100%" }}>
        <Grid container sx={{ flexDirection: "column", position: "relative" }}>
          <Grid item sx={{ backgroundColor: "black" }}>
            <section id="services">
              <Services />
            </section>
          </Grid>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer backgroundColor={"black"} fontColor={"white"} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Landing;
