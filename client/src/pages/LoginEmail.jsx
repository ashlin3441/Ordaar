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
  FormControlLabel,
  Checkbox,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import BackgroundLayout from "../components/BackgroundLayout";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, Link } from "react-router-dom";
import { styles } from "../styles/Login_Styles";
import { routes } from "../routes/routes";
import { signInWithFacebook,signInWithGoogle } from "../utils/firebase";


const LoginEmail = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleSendOtpClick = () => {
    if (!email.includes("@") || email.length < 5) {
      setErrorMessage("Please enter a valid email address.");
      setOpenSnackbar(true);
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setOpenSnackbar(true);
      return;
    }
    else{
      setErrorMessage("Logging in..");
      setOpenSnackbar(true);
      setTimeout(() => navigate(routes.dashboard), 2000);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
   const handleGoogleLogin = async () => {
     try {
       const user = await signInWithGoogle();
       alert(`Welcome, ${user.displayName}!`);
     } catch (error) {
       alert("Google login failed: " + error.message);
     }
   };
   
   const handleFacebookLogin = async () => {
     try {
       const user = await signInWithFacebook();
       alert(`Welcome, ${user.displayName}!`);
     } catch (error) {
       alert("Facebook login failed: " + error.message);
     }
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
            Enter your details to login
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Email ID"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="mail_icon.png"
                    alt="icon"
                    style={styles.iconwidth}
                  />
                </InputAdornment>
              ),
            }}
            sx={styles.phoneInput}
          />

          <TextField
            variant="outlined"
            placeholder="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
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

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={<Checkbox sx={styles.Checkbox1} />}
              label="Remember Me"
              sx={styles.boxInput}
            />
            <Link to={routes.loginOtpEmail} style={styles.resend}>
              Forgot Password?
            </Link>
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={styles.sendOtpButton}
            onClick={handleSendOtpClick}
          >
            Login 
          </Button>

          <Typography variant="body2" sx={styles.orLoginText}>
            Or login with
          </Typography>

          <Stack
            direction={styles.columnrow}
            spacing={1}
            justifyContent="space-between"
            marginBottom={2}
            gap={2}
            sx={styles.height}>
            {[
              {
                src: "gmail.png",
                alt: "Email Icon",
                text: "Email",
                color: "red",
                onClick:handleGoogleLogin
              },
              {
                src: "facebook.png",
                alt: "Facebook Icon",
                text: "Facebook",
                color: "#3B7DED",
                onClick:handleFacebookLogin
              },
            ].map((option, index) => (
              <Box key={index} sx={styles.socialLoginButton} onClick={option.onClick}>
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
            <Link to={routes.createAccount} style={styles.resend}>
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
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </BackgroundLayout>
  );
};

export default LoginEmail;
