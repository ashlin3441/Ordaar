import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  InputAdornment,
  Stack,
  Grid,
  Autocomplete,
} from "@mui/material";
import BackgroundLayout from "./BackgroundLayout";
import { styles } from "../styles/Login_Styles";
import countries from "country-codes-list";

const Login_0 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [countryCodes, setCountryCodes] = useState(["+91"]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch country codes dynamically
    const countryList = countries.customList(
      "countryCode",
      "+{countryCallingCode} ({countryNameEn})"
    );
    const countryArray = Object.entries(countryList).map(([code, label]) => ({
      value: `+ ${code}`, // Ensure + sign is always included
      label: ` ${label}`, // Display the + sign properly
    }));

    setCountryCodes(countryArray);
  }, []);

  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);

  const handleSendOtpClick = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number");
    } else {
      setError("Otp Sent");
      navigate("/Login_otp");
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

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
          >
            {/* Searchable Country Code Dropdown */}
            <Autocomplete
              options={countryCodes}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="" variant="outlined" fullWidth />
              )}
              onChange={(newValue) => {
                if (newValue) setCountryCodes(newValue);
              }}
              disableClearable
              sx={styles.phoneInput}
              ListboxProps={{
                sx: { width: "350px" }, // Enlarged dropdown list
              }}
            />

            <TextField
              sx={styles.phoneInput}
              fullWidth
              placeholder="Enter Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="phone.png"
                      alt="Phone Icon"
                      style={styles.iconwidth}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          {error && <Typography sx={styles.errorMessage}>{error}</Typography>}
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
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent="space-between"
            marginBottom={2}
            gap={2}
            sx={{ height: "45px" }}
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
    </BackgroundLayout>
  );
};
export default Login_0;
