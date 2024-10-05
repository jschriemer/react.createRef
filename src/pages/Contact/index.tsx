import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useIsMobile } from "../../utils/screenWidth";
import Grow, { GrowProps } from "@mui/material/Grow";
import CheckIcon from "@mui/icons-material/Check";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "emailjs-com";
import PhoneIcon from "@mui/icons-material/Phone";
import Kona from "../../assets/konacarelogo.svg";
import KonaLogo from "../../assets/kona.svg";
import CareLogo from "../../assets/care.svg";

const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const USER_ID: string = import.meta.env.VITE_EMAILJS_USER_ID || "";

interface FormErrors {
  [key: string]: boolean;
}

function Contact() {
  const isMobileDevice = useIsMobile();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(USER_ID || "");
  }, []);

  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = async () => {
    const formErrors: FormErrors = {};
    let hasErrors = false;

    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        formErrors[key] = true;
        hasErrors = true;
      }
    });

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(formErrors);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact_form");
      setSnackbarSeverity("success");
      setSnackbarMessage("Email sent successfully");
      setSnackbarOpen(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Error sending email");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  function GrowTransition(props: JSX.IntrinsicAttributes & GrowProps) {
    return <Grow {...props} />;
  }

  return (
    <Grid
      container
      sx={{
        overflowY: "clip",
        color: "black",
        position: "relative",
        pt: 2,
        backgroundColor: "black",
      }}
    >
      <Grid>
        <Grid container sx={{ flexWrap: isMobileDevice ? "wrap" : "nowrap" }}>
          {/* glass background card*/}
          {!isMobileDevice && (
            <Box
              sx={{
                zIndex: 10,
                pl: 8,
                py: 4,
                //backgroundColor: "rgba(255, 255, 255, 0.9)",
                //backdropFilter: "blur(5px)",
                //borderRadius: 2,
                color: "black",
                //border: "1px solid white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Grid sx={{ height: isMobileDevice ? "220px" : "300px" }}>
                <img
                  src={KonaLogo}
                  alt="Kona Logo"
                  style={{ width: "200px" }}
                />
                <img
                  src={CareLogo}
                  alt="Care Logo"
                  style={{ width: "200px" }}
                />
              </Grid>{" "}
              <Grid
                container
                sx={{
                  flexDirection: "column",
                  backgroundColor: "#F15A23",
                  p: 4,
                  borderRadius: "16px 0 0 0",
                }}
              >
                <img
                  src={Kona}
                  alt="Kona Care Logo"
                  style={{
                    width: isMobileDevice ? "100px" : "150px",
                    transform: "translateX(-15px)",
                    filter: "brightness(100) invert(1)",
                  }}
                />
                <Box display="flex" alignItems="center" mb={1} sx={{ mt: 0 }}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Marda Loop, Calgary, AB</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1} sx={{ mt: 1 }}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="h6"
                    component="a"
                    href="mailto:markus@konacare.ca"
                    sx={{
                      textDecoration: "underline",
                      color: "black",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    markus@konacare.ca
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2} sx={{ mt: 1 }}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ textDecoration: "none" }}>
                    587 889 8999
                  </Typography>
                </Box>
              </Grid>
            </Box>
          )}

          {/* Right side with contact form */}
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EEEEEE", //"#526F48",
              padding: isMobileDevice ? 4 : 10,
              zIndex: 1000,
              width: "100%",
              my: 4,
              minWidth: "400px",
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                width: isMobileDevice ? "80%" : "100%",
                zIndex: 10,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <form id="contact_form">
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  helperText={errors.firstName && "First name is required"}
                  fullWidth
                  margin="normal"
                  sx={{
                    color: "black",
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                  }}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  helperText={errors.lastName && "Last name is required"}
                  fullWidth
                  margin="normal"
                  sx={{
                    color: "black",
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                  }}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={
                    errors.email && "Please enter a valid email address"
                  }
                  fullWidth
                  margin="normal"
                  sx={{
                    color: "black",
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                  }}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  helperText={errors.subject && "Subject is required"}
                  fullWidth
                  margin="normal"
                  sx={{
                    color: "black",
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                  }}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={isMobileDevice ? 2 : 4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  helperText={errors.message && "Message is required"}
                  fullWidth
                  margin="normal"
                  sx={{
                    color: "black",
                    "& .MuiInputBase-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{
                    width: isMobileDevice ? "100%" : "auto",
                    height: isMobileDevice ? "50px" : "auto",
                    mt: isMobileDevice ? 2 : 0,
                  }}
                >
                  Send
                </Button>
              </form>
            </Box>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message={snackbarMessage}
              TransitionComponent={GrowTransition}
            >
              <Alert
                icon={
                  snackbarSeverity === "error" ? (
                    <CloudOffIcon fontSize="inherit" />
                  ) : (
                    <CheckIcon fontSize="inherit" />
                  )
                }
                onClose={handleCloseSnackbar}
                severity={snackbarSeverity}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Grid>

          {isMobileDevice && (
            <Box
              sx={{
                zIndex: 10,
                pl: 8,
                py: 4,
                color: "black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Grid sx={{ mb: 1 }}>
                <Grid container sx={{ flexWrap: "nowrap" }}>
                  <img
                    src={KonaLogo}
                    alt="Kona Logo"
                    style={{ width: "120px" }}
                  />
                  <img
                    src={CareLogo}
                    alt="Care Logo"
                    style={{ width: "120px", marginLeft: 2 }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  flexDirection: "column",
                  backgroundColor: "#F15A23",
                  p: 4,
                  borderRadius: 4,
                }}
              >
                <img
                  src={Kona}
                  alt="Kona Care Logo"
                  style={{
                    width: isMobileDevice ? "100px" : "150px",
                    transform: "translateX(-15px)",
                    filter: "brightness(100) invert(1)",
                  }}
                />
                <Box display="flex" alignItems="center" mb={1} sx={{ mt: 0 }}>
                  <LocationOnIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Marda Loop, Calgary, AB</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1} sx={{ mt: 1 }}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="h6"
                    component="a"
                    href="mailto:markus@konacare.ca"
                    sx={{ textDecoration: "none", color: "black" }}
                  >
                    markus@konacare.ca
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2} sx={{ mt: 1 }}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="h6" sx={{ textDecoration: "none" }}>
                    587 889 8999
                  </Typography>
                </Box>
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
      {/* blue banner for snow removal contact */}
      <Grid
        item
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: isMobileDevice ? "210px" : "320px",
          backgroundColor: "#F15A23",
          zIndex: 1,
        }}
      />
    </Grid>
  );
}

export default Contact;
