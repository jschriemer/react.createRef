/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useIsMobile, useIsTablet } from "../../utils/screenWidth";
import Footer from "../../components/Footer";

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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
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
        alert(result.message);
        // You can perform additional actions upon successful submission
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Grid
      container
      sx={{
        flexDirection: "column",
        alignItems: "center",
        //height: isMobileDevice || isTabletDevice ? "100%" : "100vh",
        flexWrap: "nowrap",
        overflow: "auto",
        position: "relative",
        m: 0,
        p: 0,
        backgroundColor: "#526F48",
      }}
    >
      <Box sx={{ p: 10, width: "50%" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
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
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
          </Button>
        </form>
      </Box>
      <Footer backgroundColor={"black"} fontColor={"white"} />
    </Grid>
  );
}

export default Contact;
