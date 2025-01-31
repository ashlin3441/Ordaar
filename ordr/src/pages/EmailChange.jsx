import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import OtpEmail from "./OtpEmail";    

export default function EmailChange({ onClose }) {
  const [newEmail, setNewEmail] = useState("");

  const [showOtpVerification, setShowOtpEmail] = useState(false); // New state to toggle OTP screen

  const handleSubmit = () => {
    setShowOtpEmail(true); // Switch to OTP verification
  };

  if (showOtpVerification) {
    return <OtpEmail onClose={onClose} />; // Render OTP verification screen
  }
  return (

  
      <Box sx={{ width: 450, p: 3 ,zIndex:1}}>
        {/* Close Button */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={onClose} sx={{ position: "relative", top: 8 }}>
            <img
              src="close.png"
              alt="Close"
              style={{ width: 20, height: 20 }}
            />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "outfit",
              fontWeight: "bold",
              marginTop: "10px",
              marginLeft: "8px",
              fontSize: "28px",
            }}
          >
            Change mail
          </Typography>
        </Box>

        {/* Email Input */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "outfit",
              mb: 2,
              mt: 5,
              opacity: 0.8,
              fontSize: "38px",
              fontWeight: "bold",
              textAlign: "center", // Centers the text
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter your new email
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "outfit",
              mb: 2,
              opacity: 0.6,
              fontSize: "16px",
              textAlign: "center", // Centers the text
              maxWidth: "80%", // Restricts width to create a two-line effect
              margin: "0 auto", // Centers the text horizontally
              lineHeight: "1.5", // Increases readability
            }}
          >
            Kindly input your new email address in the provided field
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Email ID"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="mail_icon.png"
                    alt="Search"
                    style={{ width: 20, height: 20 }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#FFA500" },
                "&:hover fieldset": { borderColor: "#FF6B28" },
                "&.Mui-focused fieldset": { borderColor: "#FF6B28" },
              },
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "outfit",
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              fontFamily: "outfit",
              background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
              color: "#fff",
              textTransform: "none",
              borderRadius: "10px",
              "&:hover": {
                background: "linear-gradient(to bottom, #FF6B28, #FDD30F)",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    
  );
}
