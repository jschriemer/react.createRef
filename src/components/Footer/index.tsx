import { Grid, Typography } from "@mui/material";
import GrowTogether from "../../assets/growTogether.png";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import { SocialIcon } from "react-social-icons";

const Footer = ({ backgroundColor = "transparent", fontColor = "white" }) => {
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
        //position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 100,
        borderRadius: 0,
      }}
    >
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
    </Grid>
  );
};

export default Footer;
