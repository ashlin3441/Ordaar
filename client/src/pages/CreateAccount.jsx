import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  Stack,
  Grid2,
  FormControlLabel,
  Checkbox,
  Link,
  IconButton,
} from "@mui/material";
import BackgroundLayout from "./BackgroundLayout";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleSendOtpClick = () => {
    navigate("/LoginOtpEmail");
  };

  return (
    <BackgroundLayout>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <Stack
          spacing={-1}
          sx={{
            width: "100%",
            textAlign: "left",
            color: "white",
            position: "absolute",
            top: { xs: "10px", sm: "30px", md: "25px", lg: "30px" },
            left: { xs: "10px", sm: "40px", md: "40px", lg: "50px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginTop: "0px",
              marginRight: "1%px",
              fontFamily: "Outfit",
              marginBottom: "10px",
              fontSize: {
                xs: "1.5rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.7rem",
              },
            }}
          >
            Orddar
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              marginTop: "0px",
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "1.1rem",
              },
              fontFamily: "Outfit",
              marginBottom: "10px",
            }}
          >
            Perfect food companion
          </Typography>
        </Stack>

        <Grid2
          container
          justifyContent="center"
          sx={{
            width: "100%",
            position: "absolute",
            top: {
              xs: "0rem",
              sm: "7rem",
              md: "8rem",
              lg: "9rem",
            },
            left: {
              xs: "0rem",
              sm: "2rem",
              md: "0rem",
              lg: "-2rem",
            },
          }}
        >
          <Grid2 item xs={12} sm={8} md={6} lg={5} xl={4}>
            <Box
              component="img"
              src="Business_growth.png"
              alt="Delivery Instructions"
              sx={{
                width: {
                  xs: "60%",
                  sm: "33%",
                  md: "29%",
                  lg: "33%",
                },
                maxWidth: "100%",
                height: "auto",
                zIndex: 1,
                transform: {
                  xs: "scale(0.8)",
                  sm: "scale(0.9)",
                  md: "scale(1)",
                  lg: "scale(1.1)",
                },
                transition:
                  "transform 0.3s ease-in-out, width 0.3s ease-in-out",
              }}
            />
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction="column"
          spacing={2}
          sx={{
            width: { xs: "90%", sm: "60%", md: "50%", lg: "30%" },
            position: "absolute",
            left: { xs: "5%", sm: "-8%", md: "-5%", lg: "12%" },
            bottom: { xs: "10px", sm: "20%", md: "14%", lg: "12%" },
            color: "#fff",
            zIndex: 3,
            margin: "0px auto",
            textAlign: "center",
          }}
        >
          <Grid2 item>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Outfit",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                fontSize: {
                  xs: "clamp(1.2rem, 4vw, 1.5rem)",
                  sm: "clamp(1.2rem, 4vw, 1.7rem)",
                  md: "clamp(1.9rem, 3vw, 2.2rem)",
                  lg: "clamp(2.3rem, 2.5vw, 2.4rem)",
                },
                textAlign: "center",
                marginBottom: {
                  xs: "-10%",
                  sm: "-5%",
                  md: "-6%",
                  lg: "-6%",
                },
                transition: "font-size 0.3s ease-in-out",
              }}
            >
              Book Dining
            </Typography>
          </Grid2>

          <Grid2 item>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "Outfit",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                fontSize: {
                  xs: "clamp(1rem, 3.5vw, 1.25rem)",
                  sm: "clamp(1rem, 3.5vw, 1.5rem)",
                  md: "clamp(1.8rem, 3vw, 1.8rem)",
                  lg: "clamp(1.5rem, 2.5vw, 1.6rem)",
                },
                textAlign: "center",
                transition: "font-size 0.3s ease-in-out",
              }}
            >
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
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: {
                      xs: "clamp(0.7rem, 2.5vw, 0.8rem)",
                      sm: "clamp(0.6rem, 2.5vw, .8rem)",
                      md: "clamp(1rem, 2.5vw, 1rem)",
                      lg: "clamp(0.7rem, 2.5vw, .9rem)",
                    },
                    textAlign: "center",
                    transition: "font-size 0.3s ease-in-out",
                  }}
                >
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
          <Grid2
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              position: {
                xs: "static",
                sm: "absolute",
                md: "absolute",
                lg: "absolute",
              },
              top: { xs: "2px", sm: "40px", md: "-20px", lg: "-40px" },
              left: { xs: "0", sm: "62%", md: "62%", lg: "66%" },
              transform: {
                xs: "none",
                sm: "translateX(-50%)",
                md: "translateX(-50%)",
                lg: "translateX(-50%)",
              },
              width: { xs: "50%", sm: "32%", md: "26%", lg: "25%" },
              maxWidth: "100%",
              height: "auto",
              zIndex: 1,
            }}
          >
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
          <Grid2
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{
              position: {
                xs: "static",
                sm: "absolute",
                md: "absolute",
                lg: "absolute",
              },
              top: { xs: "2px", sm: "550px", md: "500px", lg: "570px" },
              left: { xs: "0", sm: "86%", md: "86%", lg: "86%" },
              transform: {
                xs: "none",
                sm: "translateX(-50%)",
                md: "translateX(-50%)",
                lg: "translateX(-50%)",
              },
              width: { xs: "50%", sm: "3%", md: "3%", lg: "3%" },
              maxWidth: "100%",
              height: "auto",
              zIndex: 1,
            }}
          >
            <Box
              component="img"
              src="bottom_3.png"
              alt="Background"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid2>
        </Grid2>

        <Stack
          sx={{
            width: { xs: "90%", sm: "50%", md: "34%", lg: "32%" },
            minHeight: "60vh",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 6,
            padding: { xs: 2, sm: 3, md: 4 },
            margin: "auto",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
            marginLeft: { xs: "10px", sm: "280px", md: "500px", lg: "750px" },
            marginRight: { xs: "10px", sm: "40px", md: "80px", lg: "40px" },
            marginTop: { xs: "10px", sm: "80px", md: "-50px", lg: "-30px" },
            zIndex:2
          }}
          spacing={0.7}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Outfit",
              color: "#1E293B",
              textAlign: "center",
              fontWeight: "600",
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2rem",
                lg: "2rem",
              },
            }}
          >
            Register
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              color: "#64748B",
              textAlign: "center",
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1rem",
              },
              marginTop: "-8px",
            }}
          >
            Enter details to register
          </Typography>

          <Stack spacing={1}>
            <TextField
              fullWidth
              placeholder="Full Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="person.png"
                      alt="user"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFF",
                  borderRadius: "12px",
                  fontFamily: "Outfit",
                },
              }}
            />

            <TextField
              fullWidth
              placeholder="Email ID"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="mail_icon.png"
                      alt="email"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFF",
                  borderRadius: "12px",
                  fontFamily: "Outfit",
                },
              }}
            />

            <Stack direction="row" spacing={1}>
              <Select
                defaultValue="BD"
                sx={{
                  width: "100px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                  backgroundColor: "#FFF",
                }}
              >
                <MenuItem value="BD">
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography>+880</Typography>
                  </Box>
                </MenuItem>
              </Select>

              <TextField
                fullWidth
                placeholder="Enter Phone Number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="phone.png"
                        alt="phone"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFF",
                    borderRadius: "12px",
                    fontFamily: "Outfit",
                  },
                }}
              />
            </Stack>

            <TextField
              fullWidth
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="password_icon.png"
                      alt="password"
                      style={{ width: "20px", height: "20px" }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFF",
                  borderRadius: "12px",
                  fontFamily: "Outfit",
                },
              }}
            />

            <TextField
              fullWidth
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="password_icon.png"
                      alt="password"
                      style={{ width: "20px", height: "20px" }}
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFF",
                  borderRadius: "12px",
                  fontFamily: "Outfit",
                },
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#FF6B28",
                    "&.Mui-checked": {
                      color: "#FF6B28",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Outfit",
                    color: "#64748B",
                    fontSize: "0.875rem",
                  }}
                >
                  By signing up you agree to our{" "}
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: "#FF2D1F",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Terms & Conditions
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: "#FF6B28",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Typography>
              }
            />

            <Button
              fullWidth
              sx={{
                background: "linear-gradient(to right, #FFD744, #FF5500)",
                color: "#fff",
                textTransform: "none",
                height: "48px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontFamily: "Outfit",
                "&:hover": {
                  background: "linear-gradient(to right, #FFD744, #FF5500)",
                  opacity: 0.9,
                },
              }}
            >
              Sign Up
            </Button>

            <Typography
              variant="body2"
              sx={{
                color: "#64748B",
                fontFamily: "Outfit",
                textAlign: "center",
                fontSize: "0.875rem",
              }}
            >
              Already have an Account?{" "}
              <Typography
                component="a"
                href="http://localhost:5173/LoginEmail"
                sx={{
                  color: "#FF2D1F",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                  fontFamily: "Outfit",
                }}
              >
                Login
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </BackgroundLayout>
  );
};

export default CreateAccount;
