import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import styles from "../../styles/ProfileStyles";

const PasswordField = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      variant="outlined"
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={styles.placeholder}
    />
  );
};

export default PasswordField;
