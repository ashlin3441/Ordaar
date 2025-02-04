import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
  Grid2,
  Snackbar,
  Alert,
} from "@mui/material";
import BackgroundLayout from "../components/BackgroundLayout";
import { styles } from "../styles/Login_Styles";
import { routes } from "../routes/routes";
import { signInWithFacebook,signInWithGoogle } from "../utils/firebase";

const Login_otp = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (index, event) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = event.target.value;
    setOtpValues(newOtpValues);

    if (event.target.value.length === 1 && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otpValues.join("");
    const expectedOtp = "123456";

    if (enteredOtp === expectedOtp) {
      setMessage("Otp Verified Successfully");
      setOpenSnackbar(true);
      setTimeout(() => navigate(routes.loginemail), 2000);
    } else {
      setMessage("Invalid OTP. Please try again.");
      setOpenSnackbar(true);
    }
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
              src="bottom_2.png"
              alt="Background"
              sx={styles.widthheight}
            />
          </Grid2>
        </Grid2>

        <Stack sx={styles.loginBox} spacing={2}>
          <Typography variant="h4" sx={styles.welcomeText}>
            Welcome back!
          </Typography>
          <Typography variant="body1" sx={styles.boxInput}>
            we have sent a code to your email
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ marginY: 4 }}
          >
            {[...Array(6)].map((_, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                variant="outlined"
                value={otpValues[index]}
                onChange={(event) => handleChange(index, event)}
                inputProps={{
                  maxLength: 1,
                  sx: {
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    padding: 0,
                  },
                }}
                sx={styles.otpflow}
              />
            ))}
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={styles.sendOtpButton}
            onClick={handleSubmit}
          >
            Verify OTP
          </Button>
          <Typography variant="body2" sx={styles.recieve}>
            Didn't receive the code?{" "}
            <Link to="" sx={styles.resend}>
              Resend
            </Link>
          </Typography>

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
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
        >
          {message}
        </Alert>
      </Snackbar>
    </BackgroundLayout>
  );
};

export default Login_otp;
