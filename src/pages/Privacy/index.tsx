import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";
import { useIsMobile } from "../../utils/screenWidth";

const Privacy: React.FC = () => {
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
        <>
          <Typography
            variant={"h2"}
            sx={{
              boxSizing: "border-box",
              width: "fit-content",
              margin: "0 auto",
              my: 4,
              fontFamily: "Futura",
              fontWeight: "bold", // Adjust as needed
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Privacy Policy
          </Typography>
        </>
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
              Accountability
            </Typography>
            <Typography variant="body1">
              We are committed to protecting your personal information in
              compliance with the Personal Information Protection Act (PIPA) and
              the Personal Information Protection and Electronic Documents Act
              (PIPEDA) here in Canada.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Information We Collect
            </Typography>
            <Typography variant="body1">
              We collect both personal and non-personal information when you
              interact with our website. Personal information, such as your name
              and email address, and location, are only collected when you
              voluntarily provide it, such as when you leave a product review.
              Non-personal information, such as browser type, language
              preference, and the date and time of each visitor request, is
              collected automatically through our web analytics tools.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              How We Use Your Information
            </Typography>
            <Typography variant="body1">
              We use the personal information you provide only for enabling you
              to post product reviews and interact with our website.
              Non-personal information is used to understand how visitors use
              our site, improve the user experience, and make better business
              decisions. We do not sell or trade your personal information to
              outside parties.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Data Access and Retention
            </Typography>
            <Typography variant="body1">
              Under PIPA, you have the right to request access to or deletion of
              your personal information at any time. We retain personal data
              only for as long as necessary to provide services and comply with
              legal obligations.
            </Typography>

            <Grid
              container
              sx={{ flexWrap: "nowrap", justifyContent: "flex-start" }}
            >
              <Typography variant="body1">
                If you'd like to correct or delete your personal data, please{" "}
              </Typography>
              <Link
                href="mailto:markus@konacare.ca"
                sx={{
                  color: "white",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    color: "#fe914c",
                  },
                }}
              >
                <Typography variant="body1" sx={{ ml: 0.5 }}>
                  contact us.
                </Typography>
              </Link>
            </Grid>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Data Security
            </Typography>
            <Typography variant="body1">
              We implement security measures to protect your data, including the
              use of HTTPS to ensure data transmission is secure. However, no
              method of transmission over the internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Changes to Our Privacy Policy
            </Typography>
            <Typography variant="body1">
              We reserve the right to update this Privacy Policy at any time.
              Any changes will be posted on this page, and we encourage you to
              review this page regularly to stay informed.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Your Consent
            </Typography>
            <Typography variant="body1">
              By using our website, you consent to the terms outlined in this
              Privacy Policy.
            </Typography>
            <Grid
              container
              sx={{ flexWrap: "nowrap", justifyContent: "flex-start" }}
            >
              <Typography variant="body1">
                If you have any questions, feel free to{" "}
              </Typography>
              <Link
                href="mailto:markus@konacare.ca"
                sx={{
                  color: "white",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    color: "#fe914c",
                  },
                }}
              >
                <Typography variant="body1" sx={{ ml: 0.5 }}>
                  contact us.
                </Typography>
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Privacy;
