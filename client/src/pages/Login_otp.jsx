import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate,Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  InputAdornment,
  Stack,
  Grid2,
} from "@mui/material";
import BackgroundLayout from "./BackgroundLayout";
import { styles } from "../styles/Login_Styles";

const Login_otp = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [message, setMessage] = useState("");

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
      navigate("/LoginEmail");
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
              src="Business_otp.png"
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
              Grocery and Bakery
            </Typography>
          </Grid2>

          <Grid2 item>
            <Typography variant="h5" sx={styles.bestFoodsText}>
              To wherever you are
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
          sx={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Grid2 item xs={12} sm={6} md={3} lg={3} sx={styles.capImage}>
            <Box
              component="img"
              src="cap.png"
              alt="Background"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid2>
        </Grid2>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Grid2 item xs={12} sm={6} md={3} lg={3} sx={styles.PageChange}>
            <Box
              component="img"
              src="bottom_2.png"
              alt="Background"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid2>
        </Grid2>

        <Stack sx={styles.loginBox} spacing={2}>
          <Typography variant="h4" sx={styles.welcomeText}>
            Welcome back!
          </Typography>
          <Typography variant="body1" sx={styles.boxInput}>
            we have sent a code to your phone number.
            <br />
            +91 123456780
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
            <Link to=""  sx={styles.resend}>
              Resend
            </Link>
          </Typography>

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
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
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
    </BackgroundLayout>
  );
};

export default Login_otp;
