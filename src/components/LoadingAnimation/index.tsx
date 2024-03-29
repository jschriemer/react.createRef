import { Grid } from "@mui/material";
//import GrowTogether from "../../assets/growTogether.png";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import { useIsMobile } from "../../utils/screenWidth";

const LoadingAnimation = ({ fontColor = "white" }) => {
  const isMobileDevice = useIsMobile();

  return (
    <Grid
      item
      sx={{ width: isMobileDevice ? "100%" : "100%", color: fontColor }}
    >
      LOADING_ANIMATION_HERE
    </Grid>
  );
};

export default LoadingAnimation;
