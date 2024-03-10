/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from "@mui/material";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import Fall from "../../assets/fall.png";

function Services() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  return (
    <Grid
      container
      sx={{
        flexDirection: isMobileDevice ? "column" : "row", // Adjusting direction based on mobile or desktop
        alignItems: "center",
        minHeight: "100vh",
        height: isMobileDevice || isTabletDevice ? "100%" : "100vh",
        //flexWrap: "nowrap",
        position: "relative",
        backgroundColor: "black",
        display: "grid",
        gridTemplateColumns: isMobileDevice ? "1fr" : "1fr 1fr", // Adjusted columns
        gap: 4,
        px: isMobileDevice ? 2 : 10,
      }}
    >
      {/* Season 1 */}
      <Grid
        item
        sx={{
          padding: 2, // Adjust padding as needed
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Grid
              container
              sx={{ alignItems: "center", justifyContent: "flex-start" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#266BBC"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5" />
              </svg>
              <Typography variant="h4" sx={{ ml: 2 }}>
                Winter
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ maxWidth: "500px", mt: 2 }}>
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
          //alignItems: "center",
        }}
      >
        <Grid container direction="column" sx={{  }}>
          <Grid item sx={{ alignSelf: "flex-start" }}>
            <Grid
              container
              sx={{ alignItems: "center", justifyContent: "flex-start" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#526F48"
                viewBox="0 0 16 16"
              >
                <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <Typography variant="h4" sx={{ ml: 2 }}>
                Spring
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ maxWidth: "500px", mt: 2 }}>
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
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Grid
              container
              sx={{ alignItems: "center", justifyContent: "flex-start" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="#F15A23"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
              <Typography variant="h4" sx={{ ml: 2 }}>
                Summer
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ maxWidth: "500px", mt: 2 }}>
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
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Grid
              container
              sx={{ alignItems: "center", justifyContent: "flex-start" }}
            >
              <img
                src={Fall}
                alt="Fall"
                style={{
                  color: "#fe914c",
                  width: "64px",
                  height: "64px",
                  filter:
                    "invert(35%) sepia(82%) saturate(7242%) hue-rotate(30deg) brightness(192%) contrast(80%)",
                }}
              />
              <Typography variant="h4" sx={{ ml: 2 }}>
                Fall
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ maxWidth: "500px", mt: 2 }}>
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
