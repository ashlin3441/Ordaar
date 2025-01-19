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
        backgroundColor: "#333",
        padding: "0 16px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* 🔹 Search Bar */}
        <Box
          sx={{
            display: "flex",
            border: "1px solid #aaa",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "15px 12px 12px 12px",
            width: "776px",
            height:"35px" // Adjust width as needed
          }}
        >
          <Search sx={{ color:"orangered", marginRight: "8px" }} />
          <InputBase
            placeholder="Search foods, restaurant by name"
            sx={{
              color: "#959595",
              flexGrow: 1,
              fontSize: "22px",
            }}
          />
        </Box>

        {/* 🔹 Right-Side Buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Question Icon Button */}
          <IconButton
            sx={{
              backgroundColor: "#555",
              color: "white",
              borderRadius: "50%",
              marginRight: "16px",
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