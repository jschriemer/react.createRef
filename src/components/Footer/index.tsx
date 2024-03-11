import { Grid, Typography } from "@mui/material";
import GrowTogether from "../../assets/growTogether.png";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import { SocialIcon } from "react-social-icons";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";

const Footer = ({ backgroundColor = "transparent", fontColor = "white" }) => {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return backgroundColor === "transparent" ? (
    <></>
  ) : (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        backgroundColor,
        color: fontColor,
        padding: "8px",
        bottom: 0,
        width: "100%",
        zIndex: 100,
        borderRadius: 0,
      }}
    >
      {isMobileDevice ? (
        <Grid item sx={{ width: "100%", px: 2, pt: 2 }}>
          <Grid container sx={{ flexDirection: "column" }}>
            {/* rooted in calgary text */}
            <Grid item sx={{ mb: 1 }}>
              <Grid container sx={{ alignItems: "center", flexWrap: "nowrap" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "0px", color: "#FE914C" }}
                >
                  Established in 2018 and proudly rooted in Calgary.
                </Typography>
                <img
                  src={GrowTogether}
                  alt="Grow Together"
                  style={{ width: "100px", height: "auto", marginLeft: 16 }}
                />
              </Grid>
            </Grid>

            {/* copyright and social media icons */}
            <Grid item sx={{ width: "100%" }}>
              <Grid
                container
                sx={{
                  justfiyContent: "space-between",
                  flexWrap: "nowrap",
                }}
              >
                {/* copyright */}
                <Grid item sx={{ alignSelf: "flex-end" }}>
                  <Typography variant="caption" sx={{ fontWeight: "0px" }}>
                    &copy; {new Date().getFullYear()} Kona Care Landscaping
                  </Typography>
                </Grid>

                {/*  social media */}
                <Grid item sx={{ ml: "auto" }}>
                  <a
                    href="https://www.facebook.com/KonaLawnGardenSnow/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon
                      url="https://www.facebook.com/KonaLawnGardenSnow/"
                      bgColor={"#526F48"}
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>

                  <SocialIcon
                    url="www.instagram.com"
                    bgColor={"#526F48"}
                    style={{ width: "35px", height: "35px", marginLeft: 16 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid item sx={{ alignSelf: "flex-end" }}>
            <Typography variant="overline" sx={{ fontWeight: "0px" }}>
              &copy; {new Date().getFullYear()} Kona Care Landscaping
            </Typography>
          </Grid>
          <Grid item sx={{ alignSelf: "flex-end" }}>
            <Typography
              variant="overline"
              sx={{ fontWeight: "0px", color: "#FE914C", mb: 1 }}
            >
              Established in 2018 and proudly rooted in Calgary.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item sx={{ mr: 2 }}>
                <a
                  href="https://www.facebook.com/KonaLawnGardenSnow/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon
                    url="https://www.facebook.com/KonaLawnGardenSnow/"
                    bgColor={"#526F48"}
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>

                <SocialIcon
                  url="www.instagram.com"
                  bgColor={"#526F48"}
                  style={{ width: "30px", height: "30px", marginLeft: 16 }}
                />
              </Grid>
              <img
                src={GrowTogether}
                alt="Grow Together"
                style={{ width: "85px", height: "auto" }}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Footer;
