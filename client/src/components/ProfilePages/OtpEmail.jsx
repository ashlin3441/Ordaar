import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import styles from "../../styles/ProfileStyles";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
export default function OtpEmail({ onClose }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString !== "123456") {
      setSnackbarMessage("Invalid OTP. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } else {
      setError("");
      setSnackbarMessage("OTP verified successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    }
    setTimeout(() => {
      navigate(routes.dashboard); }, 2000); 
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
      <Box>
        <Typography variant="h3" sx={styles.EmailChange}>
          Otp Verification
        </Typography>
        <Typography variant="body2" sx={styles.EmailText}>
          We have sent a code to your email
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
      <Button
        variant="contained"
        fullWidth
        sx={styles.VerifyButton}
        onClick={handleSubmit}
        disabled={otp.some((digit) => digit === "")}
      >
        ✓ Verify OTP
      </Button>

      <Typography variant="body2" sx={styles.BottomText}>
        Didn’t receive the code? <span style={styles.Resend}>Resend</span>
      </Typography>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
