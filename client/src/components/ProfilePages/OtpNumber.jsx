import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import styles from "../../styles/ProfileStyles";

export default function OtpNumber({ onClose }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  return (
    <Box sx={styles.profileDrawer}>
      <Box sx={styles.CloseBox}>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <img src="close.png" alt="Close" style={styles.WidthHeight20} />
        </IconButton>
        <Typography variant="h6" sx={styles.headerText}>
          Change phone Number
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" sx={styles.EmailChange}>
          Otp Verification
        </Typography>
        <Typography variant="body2" sx={styles.EmailText}>
          We have sent a code to your number
        </Typography>
      </Box>
      <Box sx={styles.OtpBox}>
        {otp.map((value, index) => (
          <TextField
            key={index}
            id={`otp-${index}`}
            variant="outlined"
            value={value}
            onChange={(e) => handleChange(e, index)}
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center", fontSize: 24 },
            }}
            sx={styles.OtpPlaceholder}
          />
        ))}
      </Box>

      <Button variant="contained" fullWidth sx={styles.VerifyButton}>
        ✓ Verify OTP
      </Button>

      <Typography variant="body2" sx={styles.BottomText}>
        Didn’t receive the code? <span style={styles.Resend}>Resend</span>
      </Typography>
    </Box>
  );
}
