import { Grid, Typography, Paper } from "@mui/material";

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
        width: "100%",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="body1">
            &copy; {new Date().getFullYear()} 
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
