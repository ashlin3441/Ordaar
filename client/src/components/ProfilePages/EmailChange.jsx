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

  const [showOtpVerification, setShowOtpEmail] = useState(false);

  const handleSubmit = () => {
    setShowOtpEmail(true);
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
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Email ID"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="mail_icon.png"
                  alt="Search"
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
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
