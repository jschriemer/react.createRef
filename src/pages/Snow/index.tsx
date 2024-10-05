import { Grid, Typography, Button } from "@mui/material";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import SnowflakeIcon from "@mui/icons-material/AcUnit";
import Shape from "../../assets/shape.webp";
import SnowPhoto from "../../assets/snow.webp";

const services = [
  {
    id: 1,
    title: "Driveway & Sidewalk Clearing",
    description:
      "Keeping your driveway and sidewalks clear of snow and ice is essential for safety during the winter months. Kona Care provides reliable snow removal services to ensure that your pathways are accessible and hazard-free.",
  },
  {
    id: 2,
    title: "Ice & Salt Management",
    description:
      "Preventing ice build-up is critical during winter. Kona Care provides effective ice and salt management to reduce slippery surfaces, keeping your property safe.",
  },
  {
    id: 3,
    title: "24/7 Emergency Service & Monitoring",
    description:
      "Kona Care offers round-the-clock emergency snow removal services, ensuring that your property is safe and accessible during unexpected heavy snowfall events.",
  },
];

function Snow() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        flexWrap: "nowrap",
        position: "relative",
        backgroundColor: "black",
        border: "none",
        px: isMobileDevice ? 0 : isTabletDevice ? 4 : 16,
        pt: 4,
        maxWidth: isMobileDevice || isTabletDevice ? "100vw" : "100%",
      }}
    >
      <Grid
        sx={{
          backgroundColor: "white",
          borderRadius: 4,
          position: "relative",
          overflow: "clip",
        }}
      >
        <Grid container sx={{ flexDirection: "column", overflow: "clip" }}>
          {/* photo top */}
          <Grid
            sx={{
              position: "relative",
              overflow: "clip",
              backgroundImage: `url(${SnowPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 40%",
              width: "100%",
              height: isMobileDevice || isTabletDevice ? "700px" : "500px",
            }}
          />
          <Grid
            sx={{
              position: "absolute",
              top: "25px",
              left: "25px",
              borderRadius: 4,
            }}
          >
            <Grid container sx={{ flexDirection: "column", color: "white" }}>
              <Typography variant="h5">2024/2025 Winter</Typography>
              <Typography variant="h2">SNOW REMOVAL</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              position: "absolute",
              width: "323px",
              height: "420px",
              backgroundImage: `url(${Shape})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: isMobileDevice || isTabletDevice ? "20%" : "13%",
              right: isMobileDevice || isTabletDevice ? "4%" : "15%",
            }}
          >
            <Grid
              container
              sx={{
                ml: 2,
                mt: 4,
                height: "300px",
                width: "300px",
                color: "black",
                p: 3,
              }}
            >
              <Typography variant="h5">Winter is coming!</Typography>
              <Typography
                variant="h6"
                sx={{ mt: 2, fontSize: "18px", fontWeight: 1 }}
              >
                <span>Contact us</span> today to secure your spot for this
                upcoming snow removal season and enjoy peace of mind knowing
                your pathways and driveways will remain safe and accessible.
              </Typography>
              <Button
                //mailto with subject snow removal
                href="mailto:markus@konacare.ca?subject=Snow%20Removal%202024/2025%20Season"
                variant="contained"
                sx={{ mt: 4, backgroundColor: "#266BBC" }}
              >
                Secure your spot
              </Button>
            </Grid>
          </Grid>
          <Grid>
            <Grid
              container
              sx={{
                py: 4,
                pb: 8,
                px: 4,
                color: "black",
                justifyContent: "space-around",
                alignItems: "flex-start",
                height: "fit-content",
              }}
            >
              {services.map((service) => (
                <Grid>
                  <Grid container sx={{ flexDirection: "column" }}>
                    <Grid sx={{ maxWidth: "240px" }}>
                      <Typography variant="body1">
                        <SnowflakeIcon
                          sx={{
                            color: "lightgrey",
                            mt: isMobileDevice || isTabletDevice ? 4 : 0,
                          }}
                        />
                      </Typography>
                      <Typography variant="h5">{service.title}</Typography>
                    </Grid>
                    <Grid sx={{ maxWidth: isTabletDevice ? "250px" : "300px" }}>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        {service.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Snow;
