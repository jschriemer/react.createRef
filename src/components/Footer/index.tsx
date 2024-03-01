import { Grid, Typography, Paper } from "@mui/material";
import GrowTogether from "../../assets/growTogether.png";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import { SocialIcon } from "react-social-icons";

const Footer = ({ backgroundColor = "transparent", fontColor = "white" }) => {
  return (
    <Paper
      elevation={0} // Remove shadow
      style={{
        backgroundColor,
        color: fontColor,
        padding: "10px",
        position: "fixed",
        bottom: 0,
        width: "98%",
      }}
    >
      <Grid container justifyContent="space-between">
        <Grid item sx={{ alignSelf: "flex-end" }}>
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Grid item>
              <Typography variant="body1">
                &copy; {new Date().getFullYear()} Kona Care
              </Typography>
            </Grid>
            <Grid item sx={{ ml: 4 }}>
              <SocialIcon
                url="www.facebook.com"
                bgColor={"#FF5733"}
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                url="www.instagram.com"
                bgColor={"#FF5733"}
                style={{ width: "30px", height: "30px", marginLeft: 8 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={GrowTogether}
            alt="Grow Together"
            style={{ width: "100px", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
