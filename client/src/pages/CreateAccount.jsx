import React, { useState, useEffect } from "react";
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
  Autocomplete,
  Snackbar,
  Alert,
} from "@mui/material";
import BackgroundLayout from "./BackgroundLayout";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, Link } from "react-router-dom";
import { styles } from "../styles/Login_Styles";
import countries from "country-codes-list";

const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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

  const validateForm = () => {
    if (!fullName.trim()) return "Full Name is required.";
    if (!/^[A-Za-z ]+$/.test(fullName))
      return "Full Name should only contain letters.";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Enter a valid email address.";
    if (!phoneNumber.match(/^\d{10}$/))
      return "Enter a valid 10-digit phone number.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    if (password !== confirmPassword) return "Passwords do not match.";
    if (!agreeToTerms) return "You must agree to the Terms & Conditions.";
    return "";
  };

  const handleSignUp = () => {
    const errorMsg = validateForm();
    if (errorMsg) {
      setErrorMessage(errorMsg);
      setOpenSnackbar(true);
    } else {
      setErrorMessage("Account Created Successfully. Please Login to continue.");
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

        <Stack sx={styles.loginbox3} spacing={0.7}>
          <Typography variant="h4" sx={styles.welcomeText}>
            Register
          </Typography>

          <Typography variant="body1" sx={styles.boxInput}>
            Enter details to register
          </Typography>

          <Stack spacing={1}>
            <TextField
              fullWidth
              placeholder="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="person.png" alt="user" style={styles.iconwidth} />
                  </InputAdornment>
                ),
              }}
              sx={styles.phoneInput}
            />

            <TextField
              fullWidth
              placeholder="Email ID"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="mail_icon.png"
                      alt="email"
                      style={styles.iconwidth}
                    />
                  </InputAdornment>
                ),
              }}
              sx={styles.phoneInput}
            />

            <Stack direction="row" spacing={1}>
              <Autocomplete
                options={countryCodes}
                getOptionLabel={(option) => option.label}
                value={
                  countryCodes.find(
                    (code) => code.value === selectedCountryCode
                  ) || null
                }
                onChange={(event, newValue) => {
                  if (newValue) setSelectedCountryCode(newValue.value);
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
                disableClearable
                sx={styles.phoneInput}
              />
              <TextField
                fullWidth
                placeholder="Enter Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="phone.png"
                        alt="phone"
                        style={styles.iconwidth}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={styles.phoneInput}
              />
            </Stack>

            <TextField
              fullWidth
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={styles.phoneInput}
            />

            <FormControlLabel
              control={<Checkbox checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />}
              label={
                <Typography variant="body2" sx={styles.recieve}>
                  By signing up you agree to our{" "}
                  <Typography component="a" href="#" sx={styles.resend}>
                    Terms & Conditions
                  </Typography>{" "}
                  and{" "}
                  <Typography component="a" href="#" sx={styles.resend}>
                    Privacy Policy
                  </Typography>
                </Typography>
              }
            />

            <Button fullWidth sx={styles.sendOtpButton} onClick={handleSignUp}>
              Sign Up
            </Button>

            <Typography variant="body2" sx={styles.createAccountText}>
              Already have an Account?{" "}
              <Link to="/login" style={styles.resend}>
                Login
              </Link>
            </Typography>
          </Stack>
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

export default CreateAccount;
