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
import { JSX } from "react/jsx-runtime";
import emailjs from "emailjs-com";

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

    // Reset error for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = async () => {
    // Validate form fields
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
      // Clear form fields
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
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        overflow: "auto",
        position: "relative",
        m: 0,
        p: 0,
        backgroundColor: "#526F48",
        height: isMobileDevice ? " 90dvh" : "94vh",
        overflowY: "clip",
        pb: isMobileDevice ? 10 : 0,
      }}
    >
      <Box sx={{width: '100%', height: '50px', backgroundColor: '#266BBC'}}>
        <Typography variant="h6" sx={{ my: 2, ml: 2 }}>
          
        </Typography>
      </Box>
      <Box
        sx={{
          py: isMobileDevice ? 4 : 10,
          mt: isMobileDevice ? 8 : 0,
          width: isMobileDevice ? "80%" : "50%",
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
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email && "Please enter a valid email address"}
            fullWidth
            margin="normal"
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
          />
          <TextField
            label="Message"
            multiline
            rows={isMobileDevice ? 2 : 8}
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message && "Message is required"}
            fullWidth
            margin="normal"
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
  );
}

export default Contact;
