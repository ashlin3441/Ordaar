// Navbar.jsx
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
        width: "80%",
        padding: { xs: "8px", sm: "16px" },
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "1px solid #E5E5E5",
            padding: "8px 16px",
            width: "100%",
            maxWidth: { xs: "100%", sm: "700px" },
            height: "40px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Search 
            sx={{ 
              color: "#FF8A00",
              fontSize: { xs: "24px", sm: "32px" },
              marginRight: "12px"
            }} 
          />
          <InputBase
            placeholder="Search foods, restaurant by name"
            sx={{
              flexGrow: 1,
              "& input": {
                fontSize: { xs: "16px", sm: "18px" },
                fontFamily: "Outfit",
                color: "#959595",
                "&::placeholder": {
                  color: "#959595",
                  opacity: 1,
                  fontSize: { xs: "16px", sm: "18px" },
                  fontFamily: "Outfit",
                }
              }
            }}
          />
        </Box>

        <Box sx={{ 
          display: "flex", 
          alignItems: "center",
          marginLeft: { xs: '0', sm: '20px', md: '30px' },
          width: { xs: '100%', sm: '100%' ,md:'100%'},
          justifyContent: { xs: 'center', sm: 'flex-end' ,md:'flex-end'}
        }}>
          <IconButton
            sx={{
              backgroundColor: "#555",
              color: "white",
              borderRadius: "50%",
              marginRight: "5px",
              padding: { xs: "6px", sm: "8px" },
            }}
          >
            <HelpOutline sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
          </IconButton>

          <IconButton>
            <Avatar
              alt="Profile"
              src="/profile.jpg"
              sx={{ 
                width: { xs: "32px", sm: "40px" }, 
                height: { xs: "32px", sm: "40px" } 
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Navbar;

