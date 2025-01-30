import React, { useState } from "react";
import { Box, Typography, TextField, Button ,IconButton} from "@mui/material";

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
    <Box sx={{ width: 450, p: 3, textAlign: "center" }}>
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
        sx={{ fontFamily: "outfit", fontWeight: "bold", opacity: 0.9,mt:'10px' }}
      >
        Change phone Number
      </Typography>
      </Box>
      <Box>
      <Typography
        variant="h3"
        sx={{ fontFamily: "outfit", fontWeight: "bold", opacity: 0.9,mt:15 }}
      >
        Otp Verification
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontFamily: "outfit", opacity: 0.6, mt: 1 }}
      >
        We have sent a code to your number
      </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      
        {otp.map((value, index) => (
            
          <TextField
            key={index}
            id={`otp-${index}`}
            variant="outlined"
            value={value}
            onChange={(e) => handleChange(e, index)}
            inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: 24 } }}
            sx={{
              width: 50,
              height: 50,
              mx: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#000" },
                "&:hover fieldset": { borderColor: "#FF6B28" },
                "&.Mui-focused fieldset": { borderColor: "#FF6B28" },
              },
            }}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
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
        }}
      >
        ✓ Verify OTP
      </Button>

      <Typography
        variant="body2"
        sx={{ mt: 2, fontFamily: "outfit", opacity: 0.6 }}
      >
        Didn’t receive the code? <span style={{ color: "red", fontWeight: "bold" }}>Resend</span>
      </Typography>
    </Box>
  );
}
