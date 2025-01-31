import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Avatar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Mail, Phone, Lock } from "lucide-react";
import EmailChange from "./EmailChange";
import NumberChange from "./NumberChange";
import PasswordReset from "./PasswordReset";

export default function Profile({ open, onClose }) {
  const [activeView, setActiveView] = useState("profile");

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
      onChange: () => setActiveView("emailChange"), // Open Email Change View
    },
    {
      icon: <Phone color="#FFA500" size={22} />,
      label: "Phone Number",
      value: "+911234567890",
      onChange: () => setActiveView("numberChange"),
    },
    {
      icon: <Lock color="#FFA500" size={22} />,
      label: "Password",
      value: "**********",
      onChange: () => setActiveView("PasswordReset"),
    },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {activeView === "profile" ? (
        <Box sx={{ width: 450, p: 3 }}>
          {/* Close Button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={onClose} sx={{ position: "relative", top: 8 }}>
              <img
                src="close.png"
                alt="Close"
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
                  variant="body2"
                  align="left"
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    opacity: 0.5,
                    fontFamily: "outfit",
                    position: "relative",
                    top: "2px",
                  }}
                >
                  {item.icon}
                  <Box
                    sx={{
                      height: 25,
                      width: 1.1,
                      backgroundColor: "grey",
                      mx: 1,
                    }}
                  />
                  <span>{item.label}</span>
                </Typography>
                {item.onChange && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={item.onChange} // Opens the email change screen
                    sx={{
                      background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "outfit",
                      color: "#fff",
                      textTransform: "none",
                      ml: 1,
                      position: "relative",
                      borderRadius: "10px",
                      padding: "4px 12px",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                        padding: "1.7px",
                        background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        maskComposite: "exclude",
                      },
                      "&:hover::before": {
                        background: "linear-gradient(to bottom, #FF6B28, #FDD30F)",
                      },
                    }}
                  >
                    Change
                  </Button>
                )}
              </Box>
              <Typography
                variant="body2"
                align="left"
                sx={{ ml: 5, mt: -1, fontSize: "0.875rem", fontFamily: "outfit" }}
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
                border: "1.7px solid transparent",
                borderImageSource: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
                borderImageSlice: 1,
                "&:hover": {
                  borderImageSource:
                    "linear-gradient(to bottom, #FF6B28, #FDD30F)",
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
    ) : activeView === "emailChange" ? (
      <EmailChange onClose={() => setActiveView("profile")} />
    ) : activeView === "numberChange" ? (
      <NumberChange onClose={() => setActiveView("profile")} />
    ) : (
      <PasswordReset onClose={() => setActiveView("profile")} /> // ✅ Handles password reset view
    )}
    </Drawer>
  );
}
