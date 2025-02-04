import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";
import OtpNumber from "./OtpNumber";
import styles from "../../styles/ProfileStyles";

export default function NumberChange({ onClose }) {
  const [newEmail, setNewEmail] = useState("");

  const [showOtpNumber, setShowOtpNumber] = useState(false);

  const handleSubmit = () => {
    setShowOtpNumber(true);
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
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Enter Phone Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="phone-icon.png"
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
