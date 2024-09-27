import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";
import { useIsMobile } from "../../utils/screenWidth";

const TermsOfService: React.FC = () => {
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
            Terms of Service
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
              Introduction
            </Typography>
            <Typography variant="body1">
              Welcome to our website. These Terms and Services govern your use
              of our site. By accessing or using our website, you agree to
              comply with and be bound by these terms. If you do not agree to
              these terms, please do not use our site.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Use of Our Website
            </Typography>
            <Typography variant="body1">
              You agree to use our website only for lawful purposes and in a
              manner that does not infringe on the rights of, restrict or
              inhibit anyone else’s use and enjoyment of the site. You may not
              use the site in any way that could damage, disable, overburden, or
              impair the site or interfere with any other party’s use of the
              site.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Content and Intellectual Property
            </Typography>
            <Typography variant="body1">
              All content on our website, including text, graphics, logos, and
              images, are the property of Poly Star Sport and/or 99 Sports and
              their content suppliers and is protected by copyright and other
              intellectual property laws. You may not reproduce, distribute, or
              create derivative works from any content on our website without
              our express written permission.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Limitation of Liability
            </Typography>
            <Typography variant="body1">
              Our website and its content are provided on an “as is” basis. We
              do not warrant that the site will be available at all times or
              that the content will be error-free. We are not liable for any
              damages or losses arising from the use or inability to use our
              website.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Changes to These Terms
            </Typography>
            <Typography variant="body1">
              We reserve the right to modify these Terms and Services at any
              time. Changes will be effective when posted on this page, and you
              are encouraged to review this page periodically for any updates.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Governing Law
            </Typography>
            <Typography variant="body1">
              These Terms and Services are governed by and construed in
              accordance with the laws of British Columbia, Canada. Any disputes
              arising from these terms will be resolved in the courts of British
              Columbia.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}></Typography>

            <Grid
              container
              sx={{ flexWrap: "nowrap", justifyContent: "flex-start" }}
            >
              <Typography variant="body1">
                If you have any questions or concerns about these Terms and
                Services, please{" "}
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

export default TermsOfService;
