import { Grid, Typography } from "@mui/material";
import GrowTogether from "../../assets/growTogether.webp";
import Kona from "../../assets/konacarelogo.svg";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import { SocialIcon } from "react-social-icons";
import { useIsMobile } from "../../utils/screenWidth";
import { useNavigate } from "react-router-dom";
//import Skyline from "../../assets/calgarySkyline.webp";

interface FooterProps {
  onItemClick: (itemId: string) => void; // Adjust the type as needed
}

const Footer: React.FC<FooterProps> = ({ onItemClick }) => {
  const isMobileDevice = useIsMobile();
  //const isTabletDevice = useIsTablet();
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        backgroundColor: "black",
        px: 4,
        pt: 2,
        position: "relative",
        //borderTop: "4px solid #F7F7FF",
      }}
    >
      {/* <img
        src={Skyline}
        alt="Calgary Skyline"
        style={{
          position: "absolute",
          left: -1,
          bottom: isMobileDevice ? 200 : isTabletDevice ? 300 : 200,
          width: "101%",
          height: "auto",
          zIndex: 0,
          filter: "contrast(0%) brightness(0%)",
        }}
      /> */}
      <Grid sx={{ zIndex: 100 }}>
        <Grid
          container
          sx={{ flexWrap: "nowrap", justifyContent: "space-between" }}
        >
          <Grid>
            <Grid container>
              <Grid sx={{ width: isMobileDevice ? "150px" : "300px" }}>
                <Typography variant="overline">Kona Care</Typography>
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    height: "150px",
                    justifyContent: "space-between",
                    mt: 2,
                    flexWrap: "nowrap",
                  }}
                >
                  <Grid
                    onClick={() => onItemClick("/#about")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "80px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      About Us
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => onItemClick("/#services")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "130px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Snow Removal
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => onItemClick("/#services")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "90px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Lawn Care
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => onItemClick("/#services")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "130px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Garden Design
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Column 2 */}
              <Grid sx={{ width: "fit-content" }}>
                <Typography variant="overline">Support</Typography>
                <Grid
                  container
                  sx={{
                    flexDirection: "column",
                    height: isMobileDevice ? "200px" : "180px",
                    justifyContent: "space-between",
                    mt: 2,
                    flexWrap: "nowrap",
                  }}
                >
                  <Grid
                    onClick={() => onItemClick("/#contact")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "100px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => navigate("/termsOfService")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: isMobileDevice ? "100px" : "140px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Terms of Service
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => navigate("/privacy")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "120px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Privacy Policy
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => navigate("/accessibility")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      "&:hover": {
                        "&::after": {
                          width: "110px",
                        },
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: 0,
                        height: "1px",
                        backgroundColor: "#F7F7FF",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        fontWeight: "400",
                      }}
                    >
                      Accessibility
                    </Typography>
                  </Grid>
                  <Grid
                    onClick={() => onItemClick("/top")}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      pt: 2,
                    }}
                  ></Grid>
                </Grid>
                <Grid />
              </Grid>
            </Grid>
          </Grid>
          {!isMobileDevice && (
            <img
              onClick={() => onItemClick("/top")}
              src={Kona}
              alt="Kona Care Logo"
              style={{
                width: "200px",
                cursor: "pointer",
              }}
            />
          )}
        </Grid>
      </Grid>
      <Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{
            color: "#F7F7FF",
            padding: isMobileDevice ? 0 : "8px",
            pb: isMobileDevice ? 4 : "8px",
            bottom: 0,
            width: "100%",
            zIndex: 100,
            borderRadius: 0,
          }}
        >
          {isMobileDevice ? (
            <Grid item sx={{ width: "100%", px: 0, pt: 2 }}>
              <Grid container sx={{ flexDirection: "column" }}>
                {/* rooted in calgary text and socials  */}
                <Grid item sx={{ mb: 1 }}>
                  <Grid
                    container
                    sx={{ alignItems: "center", flexWrap: "nowrap" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#FE914C", maxWidth: "250px" }}
                    >
                      Established in 2018 and proudly rooted in Calgary.
                    </Typography>
                    {/*  social media */}
                    <Grid item sx={{ ml: "auto" }}>
                      <SocialIcon
                        url="https://www.facebook.com/KonaLawnGardenSnow/"
                        bgColor={"#526F48"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <SocialIcon
                        url="https://www.instagram.com/konacareyyc/?igsh=MWMxYnRrYnA2dGhhbQ%3D%3D"
                        bgColor={"#526F48"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "30px",
                          height: "30px",
                          marginLeft: 16,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                {/* copyright and Grow Together */}
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
                    <img
                      src={GrowTogether}
                      alt="Grow Together"
                      style={{
                        height: "40px",
                        marginLeft: "auto",
                      }}
                    />
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
                    <SocialIcon
                      url="https://www.facebook.com/KonaLawnGardenSnow/"
                      bgColor={"#526F48"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <SocialIcon
                      url="https://www.instagram.com/konacareyyc/?igsh=MWMxYnRrYnA2dGhhbQ%3D%3D"
                      bgColor={"#526F48"}
                      target="_blank"
                      rel="noopener noreferrer"
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
      </Grid>
    </Grid>
  );
};

export default Footer;
