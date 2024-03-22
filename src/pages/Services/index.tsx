import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "react-social-icons/tiktok";
import "react-social-icons/instagram";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";

function Services() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 1000 },
  });

  // Trigger the animation when the section comes into view
  if (inView && !isVisible) {
    setIsVisible(true);
  }

  // Define object constant for seasons
  const seasonsObject = {
    winter: {
      textDescription:
        "Count on Kona Care for reliable residential snow removal services. Our monthly fixed-rate plans, available from November to April, ensure your property stays clear and safe during the winter months. Experience hassle-free winters with Kona Care's professional snow removal solutions.",
      borderColor: "#266BBC",
      seasonName: "Winter",
    },
    spring: {
      textDescription:
        "Kona Care provides a comprehensive spring clean-up service, offering a range of options such as aeration, power raking, and lawn fertilization. We specialize in planting trees, perennials, and annuals sourced from local nurseries in Calgary. Explore our garden design and planter options for a vibrant outdoor space.",
      borderColor: "#526F48",
      seasonName: "Spring",
    },
    summer: {
      textDescription:
        "Transform your yard with Kona Care's summer services, including lawn care, garden maintenance, and customizable landscaping solutions. Our dedicated team ensures your outdoor space reflects your vision and preferences, creating an inviting and beautiful home environment.",
      borderColor: "#F15A23",
      seasonName: "Summer",
    },
    fall: {
      textDescription:
        "As the seasons change, Kona Care remains committed to your outdoor space. Our fall services include aeration, fertilization, leaf collection and removal, and thorough garden preparation for winter. Trust us for a meticulous fall clean-up to keep your property in top shape.",
      borderColor: "#fe914c",
      seasonName: "Fall",
    },
  };

  return (
    <Grid
      container
      ref={ref}
      sx={{
        flexDirection: isMobileDevice ? "column" : "row",
        alignItems: "center",
        //minHeight: isTabletDevice ? "fit-content" : "60vh",
        maxWidth: "80vw",
        justifyContent: "center",
        height: isMobileDevice
          ? "100%"
          : isTabletDevice
          ? "fit-content"
          : "80vh",
        position: "relative",
        backgroundColor: "black",
        display: "grid",
        gridTemplateColumns: isMobileDevice ? "1fr" : "1fr 1fr",
        //gap: 0,
        pl: isMobileDevice || isTabletDevice ? 2 : 0,
        py: isMobileDevice ? 10 : 0,
        mb: isMobileDevice ? 0 : 25,
        zIndex: 100,
        m: "auto",
      }}
    >
      {Object.keys(seasonsObject).map((seasonKey: any, index: number) => {
        const key = seasonKey as "winter" | "spring" | "summer" | "fall";
        return (
          <animated.div key={index} style={fadeInAnimation}>
            <Grid
              item
              sx={{
                padding: 2, // Adjust padding as needed
                position: "relative",
                height: isMobileDevice
                  ? "340px"
                  : isTabletDevice
                  ? "450px"
                  : "300px",
              }}
            >
              <Grid
                container
                sx={{
                  flexDirection: "column",
                  border: 2,
                  borderRadius: 5,
                  borderColor: seasonsObject[key].borderColor,
                  width: "fit-content",
                  p: 4,
                  //backgroundColor: seasonsObject[key].borderColor,
                  //color: "black",
                }}
              >
                <Typography variant="h4" sx={{ zIndex: 10 }}>
                  {seasonsObject[key].seasonName}
                </Typography>
                <Typography
                  variant={isTabletDevice || isMobileDevice ? "body1" : "h6"}
                  sx={{ maxWidth: "510px", mt: 2, zIndex: 1000 }}
                >
                  {seasonsObject[key].textDescription}
                </Typography>
              </Grid>
            </Grid>
          </animated.div>
        );
      })}
    </Grid>
  );
}

export default Services;
