import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react"; // Eye icon for password visibility

export default function PasswordReset({ onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password changed!");
  };

  return (
    <Box sx={{ width: 450, p: 3 }}>
      {/* Close Button */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={onClose} sx={{ position: "relative", top: 8 }}>
          <img src="close.png" alt="Close" style={{ width: 20, height: 20 }} />
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
          Reset Password
        </Typography>
      </Box>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "outfit",
          fontWeight: "bold",
          textAlign: "center",
          opacity: 0.9,
          fontSize: "34px",
          mt:11
        }}
      >
        Reset Password
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{
          fontFamily: "outfit",
          opacity: 0.6,
          fontSize: "16px",
          textAlign: "center",
          mt: 1,
        }}
      >
        Enter current password and set a new one
      </Typography>

      {/* Password Fields */}
      <Box sx={{ mt: 5 }}>
        {/* Current Password */}
        <TextField
          fullWidth
          variant="outlined"
          type={showCurrentPassword ? "text" : "password"}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowCurrentPassword((prev) => !prev)}
                >
                  {showCurrentPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, "& .MuiOutlinedInput-root": fieldStyles }}
        />

        {/* New Password */}
        <TextField
          fullWidth
          variant="outlined"
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowNewPassword((prev) => !prev)}>
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2, "& .MuiOutlinedInput-root": fieldStyles }}
        />

        {/* Confirm New Password */}
        <TextField
          fullWidth
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3, "& .MuiOutlinedInput-root": fieldStyles }}
        />
      </Box>

      {/* Save Button */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={buttonStyles}
      >
        ✓ Save
      </Button>
    </Box>
  );
}

// Common Styles
const fieldStyles = {
  "& fieldset": { borderColor: "#000" },
  "&:hover fieldset": { borderColor: "#FF6B28" },
  "&.Mui-focused fieldset": { borderColor: "#FF6B28" },
};

const buttonStyles = {
  mt: 4,
  fontFamily: "outfit",
  background: "linear-gradient(to right, #FDD30F, #FF6B28)",
  color: "#fff",
  textTransform: "none",
  borderRadius: "10px",
  height: 50,
  fontSize: "18px",
  fontWeight: "bold",
  "&:hover": {
    background: "linear-gradient(to right, #FF6B28, #FDD30F)",
  },
};
