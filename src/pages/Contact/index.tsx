import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import Footer from "../../components/Footer";
import BackgroundImage from "../../assets/kona.png";
import Grow, { GrowProps } from "@mui/material/Grow";
import CheckIcon from "@mui/icons-material/Check";
import { JSX } from "react/jsx-runtime";

interface FormErrors {
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

function Contact() {
  const isMobileDevice = useIsMobile();
  const isTabletDevice = useIsTablet();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

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
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSnackbarSeverity("success");
        setSnackbarMessage(result.message);
        setSnackbarOpen(true);
        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage(result.error);
        setSnackbarOpen(true);
        // Highlight the field that caused the error
        const errorField = Object.keys(result.error)[0];
        setErrors((prevErrors) => ({
          ...prevErrors,
          [errorField]: true,
        }));
      }
    } catch (error) {
      console.error("Error:", error);
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
      }}
    >
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
        <form>
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
            rows={4}
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
      <Footer backgroundColor={"black"} fontColor={"white"} />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        TransitionComponent={GrowTransition}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
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
