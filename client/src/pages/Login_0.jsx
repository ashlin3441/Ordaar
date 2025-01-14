import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { Email, Facebook, Phone } from "@mui/icons-material";
import BackgroundLayout from "./BackgroundLayout";

const Login_0 = () => {
  const [countryCode, setCountryCode] = useState("+1"); // Default country code

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <BackgroundLayout>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "10%",
            marginBottom: "550px",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: "0px",
              marginLeft: "20px",
              fontFamily: "Outfit",
            }}
          >
            Orddar
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: "0px", fontSize: "20px", fontFamily: "Outfit" }}
          >
            Perfect food companion
          </Typography>

          <Box
            component="img"
            src="amico.png"
            alt="Delivery Instructions"
            sx={{
              position: "absolute",
              top: "140px",
              left: "165px",
              width: "420px",
              height: "auto",
              zIndex: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            width: "20%",
            textAlign: "left",
            zIndex: 3,
            color: "#fff",
            position: "absolute",
            left: 210,
            bottom: 110,
            margin: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Outfit",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              marginTop: 1,
              textAlign: "center",
            }}
          >
            Explore
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Outfit",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              marginTop: 1,
              textAlign: "left",
            }}
          >
            Best Foods & Restaurants
          </Typography>
        </Box>

        <Box
          sx={{
            width: "20%",
            textAlign: "left",
            zIndex: 3,
            color: "#fff",
            position: "absolute",
            left: 200,
            bottom: 35,
            margin: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: "Outfit", marginTop: 1, textAlign: "center",fontSize:'15px' }}
          >
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </Typography>
        </Box>
        <Box
          component="img"
          src="cap.png"
          alt="Background"
          sx={{
            position: "absolute",
            top: "30px",
            left: "910px",
            width: "350px",
            height: "auto",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            width: "29%",
            minHeight: "60vh",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: 6,
            padding: 4,
            marginRight: 20,
            zIndex: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Outfit",
              color: "#333",
              marginBottom: 2,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Welcome back!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              color: "#656565",
              marginBottom: 2,
              textAlign: "center",
            }}
          >
            Enter your phone number to login into this account.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 4,
              marginTop: 8,
            }}
          >
            <FormControl sx={{ marginRight: 2, minWidth: 70 }}>
              <Select
                sx={{
                  backgroundColor: "white",
                  height: "50px",
                  borderRadius: "8px",
                  boxShadow: "none",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:focus": {
                    borderRadius: "4px",
                  },
                }}
                labelId="country-code-label"
                value={countryCode}
                onChange={handleCountryCodeChange}
                label="Country Code"
              >
                <MenuItem value="+1">+1 (USA)</MenuItem>
                <MenuItem value="+91">+91 (India)</MenuItem>
                <MenuItem value="+44">+44 (UK)</MenuItem>
                <MenuItem value="+61">+61 (Australia)</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{
                backgroundColor: "white",
                fontFamily: "Outfit",
                height: "50px",
                borderRadius: "8px",
                boxShadow: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& input": {
                  fontFamily: "Outfit",
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: "Outfit",
                  textAlign: "left",
                },
              }}
              fullWidth
              placeholder="Enter Phone Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="phone.png"
                      alt="Phone Icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(to bottom, #FFDD44, #FF5500)",
              color: "#fff",
              marginBottom: 2,
              height: "45px",
            }}
          >
            Send OTP
          </Button>

          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontFamily: "Nunito",
              textAlign: "center",
              marginBottom: 2,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                left: "0",
                right: "50%",
                top: "50%",
                backgroundImage: "url(Line.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "1px",
                width: "38%",
                transform: "translateY(-50%)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: "62%",
                right: "0",
                top: "50%",
                backgroundImage: "url(Line.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "1px",
                width: "40%",
                transform: "translateY(-50%)",
              },
            }}
          >
            Or login with
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
              gap: 2,
              height: "45px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: "48%",
                padding: 2,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="gmail.png"
                alt="Email Icon"
                style={{ width: "20px", height: "17px", marginRight: "8px" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "red", fontFamily: "Outfit" }}
              >
                Email
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "white",
                width: "48%",
                padding: 2,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="facebook.png"
                alt="Facebook Icon"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#3B7DED", fontFamily: "Outfit" }}
              >
                Facebook
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{ color: "#000000", fontFamily: "Outfit", textAlign: "center" }}
          >
            Don't have an Account?{" "}
            <a href="#" style={{ color: "#FF0000", fontFamily: "Outfit" }}>
              Create Account
            </a>
          </Typography>
        </Box>
      </Container>
    </BackgroundLayout>
  );
};

export default Login_0;
