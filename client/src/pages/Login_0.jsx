import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import BackgroundLayout from "../components/BackgroundLayout";
import { styles } from "../styles/Login_Styles";
import { routes } from "../routes/routes";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { signInWithFacebook,signInWithGoogle } from "../utils/firebase";

const Login_0 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
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

  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return "Phone number is required";
    }
    if (phoneNumber.length < 10) {
      return "Enter a valid phone number";
    }
    return null; 
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setError(""); 
  };

  const handleSendOtpClick = () => {
    const validationError = validatePhoneNumber(phoneNumber);
    if (validationError) {
      setError(validationError); 
      setOpenSnackbar(true); 
    } else {
      setError("OTP Sent Successfully");
      setOpenSnackbar(true);
      setTimeout(() => navigate(routes.loginOtp), 1000); 
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

        <Grid container justifyContent="center" sx={styles.imageContainer}>
          <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
            <Box
              component="img"
              src="amico.png"
              alt="Delivery Instructions"
              sx={styles.image}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          spacing={2}
          sx={styles.textContainer}
        >
          <Grid item>
            <Typography variant="h4" sx={styles.exploreText}>
              Explore
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={styles.bestFoodsText}>
              Best Foods & Restaurants
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              {[
                "When an unknown printer took a galley of",
                "type and scrambled it to make a type",
                "specimen book.",
              ].map((text, index) => (
                <Typography key={index} variant="body1" sx={styles.bodyText}>
                  {text}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.positionwidth}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} sx={styles.capImage}>
            <Box
              component="img"
              src="cap.png"
              alt="Background"
              sx={styles.widthheight}
            />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={styles.positionwidth}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} sx={styles.PageChange}>
            <Box
              component="img"
              src="bottom_1.png"
              alt="Background"
              sx={styles.widthheight}
            />
          </Grid>
        </Grid>

        <Stack sx={styles.loginBox} spacing={2}>
          <Typography variant="h4" sx={styles.welcomeText}>
            Welcome back!
          </Typography>
          <Typography variant="body1" sx={styles.boxInput}>
            Enter your phone number to login into this account.
          </Typography>

          <PhoneInput
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            placeholder="Enter phone number"
            defaultCountry="US"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            inputStyle={styles.phInput}
          />

          <Button
            variant="contained"
            fullWidth
            sx={styles.sendOtpButton}
            onClick={handleSendOtpClick}
          >
            Send OTP {">"}
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
            sx={styles.height}
          >
            {[
              {
                src: "gmail.png",
                alt: "Email Icon",
                text: "Email",
                color: "red",
                onclick:handleGoogleLogin
              },
              {
                src: "facebook.png",
                alt: "Facebook Icon",
                text: "Facebook",
                color: "#3B7DED",
                onclick:handleFacebookLogin
              },
            ].map((option, index) => (
              <Box key={index} sx={styles.socialLoginButton} onClick={option.onclick}>
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
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          severity={error === "OTP Sent Successfully" ? "success" : "error"}
          onClose={() => setOpenSnackbar(false)}
        >
          {error}
        </Alert>
      </Snackbar>
    </BackgroundLayout>
  );
};

export default Login_0;