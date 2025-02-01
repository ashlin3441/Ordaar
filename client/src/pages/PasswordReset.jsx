import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  InputAdornment,
  Stack,
  Grid2,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import BackgroundLayout from "./BackgroundLayout";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, Link } from "react-router-dom";
import { styles } from "../styles/Login_Styles";

const PasswordReset = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    if (password.length < 6) return "Password must be at least 6 characters long.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return "";
  };

  const handleSignUp = () => {
    const errorMsg = validateForm();
    if (errorMsg) {
      setErrorMessage(errorMsg);
      setOpenSnackbar(true);
    } else {
      setErrorMessage("Password reset successfully. Please login to continue.");
      setOpenSnackbar(true);
      setTimeout(() => navigate("/LoginEmail"), 2000);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <BackgroundLayout>
      <Container maxWidth={false} sx={styles.container}>
        <Stack spacing={-1} sx={styles.header}>
          <Typography variant="h3" sx={styles.title}>
            Orddar
          </Typography>
          <Typography variant="subtitle1" sx={styles.subtitle}>
            Perfect food companion
          </Typography>
        </Stack>

        <Grid2 container justifyContent="center" sx={styles.imageContainer2}>
          <Grid2 item xs={12} sm={8} md={6} lg={5} xl={4}>
            <Box
              component="img"
              src="Business_growth.png"
              alt="Delivery Instructions"
              sx={styles.image2}
            />
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="column"
          spacing={2}
          sx={styles.textContainer}
        >
          <Grid2 item>
            <Typography variant="h4" sx={styles.GroceryText}>
              Book Dining
            </Typography>
          </Grid2>

          <Grid2 item>
            <Typography variant="h5" sx={styles.bestFoodsText}>
              in Best Restaurants
            </Typography>
          </Grid2>

          <Grid2 item>
            <Box>
              {[
                "When an unknown printer took a galley of type",
                "and scrambled it to make a type specimen",
                " book.",
              ].map((text, index) => (
                <Typography key={index} variant="body1" sx={styles.bodyText}>
                  {text}
                </Typography>
              ))}
            </Box>
          </Grid2>
        </Grid2>

        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.positionwidth}
        >
          <Grid2 item xs={12} sm={6} md={3} lg={3} sx={styles.capImage}>
            <Box
              component="img"
              src="cap.png"
              alt="Background"
              sx={styles.widthheight}
            />
          </Grid2>
        </Grid2>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.positionwidth}
        >
          <Grid2 item xs={12} sm={6} md={3} lg={3} sx={styles.PageChange}>
            <Box
              component="img"
              src="bottom_3.png"
              alt="Background"
              sx={styles.widthheight}
            />
          </Grid2>
        </Grid2>

        <Stack sx={styles.loginBox2} spacing={2}>
          <Typography variant="h4" sx={styles.welcomeText}>
            Welcome back!
          </Typography>
          <Typography variant="body1" sx={styles.boxInput}>
            Reset your password
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Password"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="password_icon.png"
                    alt="icon"
                    style={styles.iconwidth}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={styles.phoneInput}
          />

          <TextField
            fullWidth
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="password_icon.png"
                    alt="password"
                    style={styles.iconwidth}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={styles.phoneInput}
          />
          <Button
            variant="contained"
            fullWidth
            sx={styles.sendOtpButton}
            onClick={handleSignUp}
          >
            Reset Password {">"}
          </Button>

          <Typography variant="body2" sx={styles.orLoginText}>
            Or login with
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent="space-between"
            marginBottom={2}
            gap={2}
            sx={{
              height: "45px",
            }}
          >
            {[
              {
                src: "gmail.png",
                alt: "Email Icon",
                text: "Email",
                color: "red",
              },
              {
                src: "facebook.png",
                alt: "Facebook Icon",
                text: "Facebook",
                color: "#3B7DED",
              },
            ].map((option, index) => (
              <Box key={index} sx={styles.socialLoginButton}>
                <img
                  src={option.src}
                  alt={option.alt}
                  style={styles.iconwidth}
                />
                <Typography
                  variant="body2"
                  sx={{ color: option.color, fontFamily: "Outfit" }}
                >
                  {option.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Typography variant="body2" sx={styles.createAccountText}>
            Don't have an Account?{" "}
            <Link to="/CreateAccount" style={styles.resend}>
              Create Account
            </Link>
          </Typography>
        </Stack>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </BackgroundLayout>
  );
};

export default PasswordReset;
