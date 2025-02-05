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
import styles from "../../styles/ProfileStyles";

export default function EmailChange({ onClose }) {
  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showOtpVerification, setShowOtpEmail] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const email = e.target.value;
    setNewEmail(email);

    if (!email) {
      setEmailError("Email is required");
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (!emailError && newEmail) {
      setShowOtpEmail(true);
    }
  };

  if (showOtpVerification) {
    return <OtpEmail onClose={onClose} />;
  }

  return (
    <Box sx={styles.profileDrawer}>
      <Box sx={styles.CloseBox}>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <img src="close.png" alt="Close" style={styles.WidthHeight20} />
        </IconButton>
        <Typography variant="h6" sx={styles.headerText}>
          Change mail
        </Typography>
      </Box>
      <Box sx={styles.mt}>
        <Typography variant="h3" sx={styles.EmailChange}>
          Enter your new email
        </Typography>

        <Typography variant="body2" sx={styles.EmailText}>
          Kindly input your new email address in the provided field
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          value={newEmail}
          onChange={handleChange}
          placeholder="Email ID"
          error={!!emailError}
          helperText={emailError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="mail_icon.png"
                  alt="Mail"
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
          disabled={!!emailError || !newEmail}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
