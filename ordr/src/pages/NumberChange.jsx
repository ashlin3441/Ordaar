import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import OtpNumber from "./OtpNumber";    

export default function NumberChange({ onClose }) {
  const [newEmail, setNewEmail] = useState("");

  const [showOtpNumber, setShowOtpNumber] = useState(false); // New state to toggle OTP screen

  const handleSubmit = () => {
    setShowOtpNumber(true); // Switch to OTP verification
  };

  if (showOtpNumber) {
    return <OtpNumber onClose={onClose} />; // Render OTP verification screen
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
            Change phone number
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
            Enter your new number
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
            Kindly input your new number in the provided field
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter Phone Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="phone-icon.png"
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
