import { Grid, Typography, Button } from "@mui/material";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import SnowflakeIcon from "@mui/icons-material/AcUnit";
import AboutProfile from "../../assets/aboutProfile.webp";

function Snow({ onItemClick }: { onItemClick: (route: string) => void }) {
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
              height: "100%",
              zIndex: 100,
            }}
          >
            <Typography
              variant={isMobileDevice ? "body1" : "h5"}
              sx={{
                maxWidth: isMobileDevice ? "none" : "500px",
                color: "#fff",
              }}
            >
              <SnowflakeIcon sx={{ mr: 1 }} />
              Kona Care is now accepting clients for the upcoming snow removal
              season 2024/2025. We offer a **fixed monthly cost**, ensuring that
              no matter if it's a light dusting or a heavy snowfall, your
              pathways and driveways will be clear and safe.
            </Typography>

            <Typography
              variant={isMobileDevice ? "body1" : "h5"}
              sx={{ mt: 4, maxWidth: "500px", color: "#fff" }}
            >
              Our services include:
              <ul>
                <li>Residential snow removal</li>
                <li>Sidewalk and driveway clearing</li>
                <li>Salting and ice management</li>
                <li>Emergency snow response</li>
              </ul>
            </Typography>

            <Typography
              variant={isMobileDevice ? "body1" : "h5"}
              sx={{ mt: 4, maxWidth: "500px", color: "#fff" }}
            >
              With proactive monitoring, 24/7 service, and **customized plans**
              tailored to meet your needs and budget, Kona Care makes sure
              you're prepared for winter.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: "#fe914c",
                color: "#fff",
                textTransform: "none",
                fontSize: "16px",
              }}
              onClick={() => onItemClick("/#contact")}
            >
              Contact Kona Care to be added to our snow removal list
            </Button>
          </Grid>

          {/* single image for desktop */}
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
                marginBottom: isMobileDevice ? "50px" : "none",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Snow;
