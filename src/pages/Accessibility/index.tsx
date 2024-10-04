import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";
import { useIsMobile } from "../../utils/screenWidth";

const Accessibility: React.FC = () => {
  const isMobileDevice = useIsMobile();

  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Grid sx={{ m: "auto", width: "fit-content", pt: 8 }}>
        <Typography
          variant={"h2"}
          sx={{
            boxSizing: "border-box",
            width: "fit-content",
            margin: "0 auto",
            my: 4,
            fontFamily: "Futura",
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Accessibility
        </Typography>
      </Grid>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-start"
        alignItems="center"
        sx={{ m: "auto", maxWidth: "1000px" }}
      >
        <Box
          sx={{
            maxWidth: isMobileDevice ? "90%" : "800px",
            pb: 8,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Our Commitment to Accessibility
          </Typography>
          <Typography variant="body1">
            We are committed to providing an accessible website for all users,
            including individuals with disabilities. Our goal is to ensure that
            everyone has equal access to information and functionality on our
            site.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Compliance with Standards
          </Typography>
          <Typography variant="body1">
            We strive to meet the standards outlined in the Web Content
            Accessibility Guidelines (WCAG) 2.1.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Feedback and Support
          </Typography>
          <Typography variant="body1">
            We welcome your feedback on the accessibility of our website. If you
            encounter any accessibility barriers or need assistance, please{" "}
          </Typography>
          <Grid
            container
            sx={{ flexWrap: "nowrap", justifyContent: "flex-start" }}
          >
            <Typography variant="body1">
              <Link
                href="mailto:markus@konacare.ca?subject=Accessibility"
                sx={{
                  color: "#F7F7FF",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    color: "#fe914c",
                  },
                }}
              >
                contact us.
              </Link>
            </Typography>
          </Grid>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Future Improvements
          </Typography>
          <Typography variant="body1">
            We are continuously improving our website’s accessibility and are
            working on additional features to enhance user experience.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Accessibility;
