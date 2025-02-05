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
import styles from "../../styles/ProfileStyles";

export default function NumberChange({ onClose }) {
  const [newNumber, setNewNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [showOtpNumber, setShowOtpNumber] = useState(false);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); 
    setNewNumber(value);

    if (!value) {
      setNumberError("Phone number is required");
    } else if (!validatePhoneNumber(value)) {
      setNumberError("Enter a valid 10-digit phone number");
    } else {
      setNumberError("");
    }
  };

  const handleSubmit = () => {
    if (!numberError && newNumber) {
      setShowOtpNumber(true);
    }
  };

  if (showOtpNumber) {
    return <OtpNumber onClose={onClose} />;
  }

  return (
    <Box sx={styles.profileDrawer}>
      <Box sx={styles.CloseBox}>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <img src="close.png" alt="Close" style={styles.WidthHeight20} />
        </IconButton>
        <Typography variant="h6" sx={styles.headerText}>
          Change phone number
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h3" sx={styles.EmailChange}>
          Enter your new number
        </Typography>

        <Typography variant="body2" sx={styles.EmailText}>
          Kindly input your new number in the provided field
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          value={newNumber}
          onChange={handleChange}
          placeholder="Enter Phone Number"
          error={!!numberError}
          helperText={numberError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="phone-icon.png"
                  alt="Phone"
                  style={styles.WidthHeight20}
                />
              </InputAdornment>
            ),
          }}
          sx={styles.placeholder}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={styles.SubmitButton}
          disabled={!!numberError || !newNumber}
        >
          Submit
        </Button>

      </Box>
    </Box>
  );
}
