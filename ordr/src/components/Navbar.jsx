// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Avatar } from "@mui/material";
import { Search, HelpOutline } from "@mui/icons-material";

function Navbar() {
  return (
    <Box
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "white",
        width: "100%",
        padding: "16px",
      }}
    >
      <Toolbar sx={{ justifyContent: "left" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "1px solid #E5E5E5",
            padding: "8px 16px",
            width: "100%",
            maxWidth: "700px",
            height: "40px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Search 
            sx={{ 
              color: "#FF8A00",
              fontSize: "32px",
              marginRight: "12px"
            }} 
          />
          <InputBase
            placeholder="Search foods, restaurant by name"
            sx={{
              flexGrow: 1,
              "& input": {
                fontSize: "18px",
                fontFamily: "Outfit",
                color: "#959595",
                "&::placeholder": {
                  color: "#959595",
                  opacity: 1,
                  fontSize: "18px",
                  fontFamily: "Outfit",
                }
              }
            }}
          />
        </Box>

        {/* 🔹 Right-Side Buttons */}
        <Box sx={{ display: "flex", alignItems: "center",marginLeft:'300px' }}>
          {/* Question Icon Button */}
          <IconButton
            sx={{
              backgroundColor: "#555",
              color: "white",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          >
            <HelpOutline />
          </IconButton>

          {/* Profile Picture Button */}
          <IconButton>
            <Avatar
              alt="Profile"
              src="/profile.jpg" // Replace with your profile image path
              sx={{ width: "40px", height: "40px" }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Navbar;