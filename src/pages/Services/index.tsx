import { Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";

function Services() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return (
    <Grid
      container
      sx={{
        flexDirection: isMobileDevice ? "column" : "row",
        alignItems: "center",
        alignSelf: "center",
        minHeight: isTabletDevice ? "fit-content" : "100vh",
        justifyContent: "center",
        height: isMobileDevice
          ? "100%"
          : isTabletDevice
          ? "fit-content"
          : "100vh",
        position: "relative",
        backgroundColor: "black",
        display: "grid",
        gridTemplateColumns: isMobileDevice ? "1fr" : "1fr 1fr",
        gap: 4,
        px: isMobileDevice || isTabletDevice ? 2 : 10,
        py: isMobileDevice ? 10 : 0,
        zIndex: 100,
      }}
    >
      {/* Season 1 */}
      <Grid
        item
        sx={{
          padding: 2, // Adjust padding as needed
          position: "relative",
          height: isMobileDevice ? "340px" : isTabletDevice ? "450px" : "200px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            left: 0,
            bottom: isMobileDevice ? "-10%" : isTabletDevice ? "0%" : "-50%",
            zIndex: 0,
            width: "512px",
            height: "512px",
            transform: "translate(-40%, 0)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="#266BBC"
          viewBox="0 0 16 16"
        >
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 00ma.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>
        <Grid container sx={{ flexDirection: "column" }}>
          <Typography variant="h4" sx={{ zIndex: 10 }}>
            Winter
          </Typography>
          <Typography
            variant={isTabletDevice || isMobileDevice ? "body1" : "h6"}
            sx={{ maxWidth: "500px", mt: 2, zIndex: 1000 }}
          >
            Count on Kona Care for reliable residential snow removal services.
            Our monthly fixed-rate plans, available from November to April,
            ensure your property stays clear and safe during the winter months.
            Experience hassle-free winters with Kona Care's professional snow
            removal solutions.
          </Typography>
        </Grid>
      </Grid>

      {/* Season 2 */}
      <Grid
        item
        sx={{
          padding: 2, // Adjust padding as needed
          position: "relative",
          height: isMobileDevice ? "340px" : isTabletDevice ? "450px" : "200px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            left: 0,
            bottom: isMobileDevice ? "-10%" : isTabletDevice ? "0%" : "-50%",
            zIndex: 0,
            width: "512px",
            height: "512px",
            transform: "translate(-40%, 0)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width={isMobileDevice ? "256px" : "64"}
          height={isMobileDevice ? "256px" : "64"}
          fill="#526F48"
          viewBox="0 0 16 16"
        >
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 00ma.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>
        <Grid container sx={{ flexDirection: "column" }}>
          <Typography variant="h4" sx={{ zIndex: 10 }}>
            Spring
          </Typography>
          <Typography
            variant={isTabletDevice || isMobileDevice ? "body1" : "h6"}
            sx={{ maxWidth: "500px", mt: 2, zIndex: 1000 }}
          >
            Kona Care provides a comprehensive spring clean-up service, offering
            a range of options such as aeration, power raking, and lawn
            fertilization. We specialize in planting trees, perennials, and
            annuals sourced from local nurseries in Calgary. Explore our garden
            design and planter options for a vibrant outdoor space.
          </Typography>
        </Grid>
      </Grid>

      {/* Season 3 */}
      <Grid
        item
        sx={{
          padding: 2, // Adjust padding as needed
          position: "relative",
          height: isMobileDevice ? "340px" : isTabletDevice ? "450px" : "200px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            left: 0,
            bottom: isMobileDevice ? "-10%" : isTabletDevice ? "0%" : "-50%",
            zIndex: 0,
            width: "512px",
            height: "512px",
            transform: "translate(-40%, 0)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="#F15A23"
          viewBox="0 0 16 16"
        >
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 00ma.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>

        <Grid container sx={{ flexDirection: "column" }}>
          <Typography variant="h4" sx={{ zIndex: 10 }}>
            Summer
          </Typography>
          <Typography
            variant={isTabletDevice || isMobileDevice ? "body1" : "h6"}
            sx={{ maxWidth: "500px", mt: 2, zIndex: 1000 }}
          >
            Transform your yard with Kona Care's summer services, including lawn
            care, garden maintenance, and customizable landscaping solutions.
            Our dedicated team ensures your outdoor space reflects your vision
            and preferences, creating an inviting and beautiful environment for
            your enjoyment.
          </Typography>
        </Grid>
      </Grid>

      {/* Season 4 */}
      <Grid
        item
        sx={{
          padding: 2, // Adjust padding as needed
          position: "relative",
          height: isMobileDevice ? "340px" : isTabletDevice ? "450px" : "200px",
        }}
      >
        <svg
          style={{
            position: "absolute",
            left: 0,
            bottom: isMobileDevice ? "-10%" : isTabletDevice ? "0%" : "-50%",
            zIndex: 0,
            width: "512px",
            height: "512px",
            transform: "translate(-40%, 0)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="#fe914c"
          viewBox="0 0 16 16"
        >
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 00ma.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
        </svg>

        <Grid container sx={{ flexDirection: "column" }}>
          <Typography variant="h4" sx={{ zIndex: 10 }}>
            Fall
          </Typography>
          <Typography
            variant={isTabletDevice || isMobileDevice ? "body1" : "h6"}
            sx={{ maxWidth: "500px", mt: 2, zIndex: 1000 }}
          >
            As the seasons change, Kona Care remains committed to your outdoor
            space. Our fall services include aeration, fertilization, and
            thorough garden preparation for winter. Trust us for a meticulous
            fall clean-up to keep your property in top shape.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
