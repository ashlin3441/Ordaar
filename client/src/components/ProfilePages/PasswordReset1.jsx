import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import styles from "../../styles/ProfileStyles";
import PasswordField from "./PasswordField"; // Import reusable component

export default function PasswordReset({ onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password changed!");
  };

  return (
    <Box sx={styles.profileDrawer}>
      <Box sx={styles.CloseBox}>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <img src="close.png" alt="Close" style={styles.WidthHeight20} />
        </IconButton>
        <Typography variant="h6" sx={styles.headerText}>
          Reset Password
        </Typography>
      </Box>
      <Typography variant="h3" sx={styles.EmailChange}>
        Reset Password
      </Typography>

      <Typography variant="body2" sx={styles.EmailText}>
        Enter current password and set a new one
      </Typography>

      <Box sx={styles.mt1}>
        <PasswordField
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
        />
        <PasswordField
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <PasswordField
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={styles.SubmitButton}
      >
        ✓ Save
      </Button>
    </Box>
  );
}
