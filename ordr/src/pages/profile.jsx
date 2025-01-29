import React from "react";
import {
  Drawer,
  IconButton,
  Avatar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Mail, User, Phone, Lock } from "lucide-react";

export default function Profile({ open, onClose }) {
  const profileData = [
    {
      icon: <img src="name.png" alt="Name" style={{ width: 22, height: 22 }} />,
      label: "Name",
      value: "Jhone Smith",
    },
    {
      icon: <Mail color="#FFA500" size={22} />,
      label: "Email",
      value: "jhonesmith@gmail.com",
    },
    {
      icon: <Phone color="#FFA500" size={22} />,
      label: "Phone Number",
      value: "+911234567890",
    },
    {
      icon: <Lock color="#FFA500" size={22} />,
      label: "Password",
      value: "**********",
    },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 450, p: 3 }}>
        {/* Close Button */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={onClose} sx={{ position: "relative", top: 8 }}>
            <img
              src="close.png"
              alt="Phone"
              style={{ width: 20, height: 20 }}
            />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "outfit",
              fontWeight: "bold",
              marginTop: "10px",
              marginLeft: "8px",
              fontSize: "28px",
            }}
          >
            Profile
          </Typography>
        </Box>

        {/* Profile Details */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4, mt: 5 }}>
          <Avatar
            alt="Profile"
            src="/profile.jpg"
            sx={{ width: 140, height: 140 }}
          />
        </Box>
        {profileData.map((item, index) => (
          <Box key={index} sx={{ mb: 0.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 0.2,
              }}
            >
              <Typography
                variant="body2" // Reduced font size for label
                align="left"
                sx={{
                  display: "flex",
                  alignItems: "left",
                  opacity: 0.5,
                  fontFamily: "outfit",
                  position: "relative",
                  top: "2px",
                }} // Reduced opacity
              >
                {item.icon}
                <Box
                  sx={{
                    height: 25,
                    width: 1.1,
                    backgroundColor: "grey",
                    mx: 1,
                  }}
                />{" "}
                {/* Small line between icon and text */}
                <span>{item.label}</span>
              </Typography>
              {item.label !== "Name" && (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "outfit",
                  color: "#fff",
                  textTransform: "none",
                  ml: 1,
                  position: "relative",
                  borderRadius: "10px", // Ensure border-radius applies
                  padding: "4px 12px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    padding: "1.7px", // Border thickness
                    background: "linear-gradient(to bottom, #FDD30F, #FF6B28)", // Gradient border
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  },
                  "&:hover::before": {
                    background: "linear-gradient(to bottom, #FF6B28, #FDD30F)", // Reverse gradient on hover
                  },
                }}
              >
                Change
              </Button>
              )}
            </Box>
            <Typography
              variant="body2" // Reduced font size for value
              align="left"
              sx={{ ml: 5, mt: -1, fontSize: "0.875rem", fontFamily: "outfit" }} // Smaller font size for value
            >
              {item.value}
            </Typography>
          </Box>
        ))}
        {/* Buttons */}
        <Box sx={{ mt: 10 }}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              mb: 1,
              fontFamily: "outfit",
              background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              border: "1.7px solid transparent", // Set a transparent border
              borderImageSource: "linear-gradient(to bottom, #FDD30F, #FF6B28)", // Apply gradient to border
              borderImageSlice: 1, // Ensures the gradient is applied properly
              "&:hover": {
                borderImageSource:
                  "linear-gradient(to bottom, #FF6B28, #FDD30F)", // Reverse gradient on hover
              },
            }}
          >
            Donations
          </Button>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            sx={{ fontFamily: "outfit" }}
          >
            Log out
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
