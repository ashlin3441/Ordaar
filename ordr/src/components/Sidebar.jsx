// Sidebar.jsx
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PaymentsIcon from "@mui/icons-material/Payment";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HygieneIcon from "@mui/icons-material/CleanHands";

const drawerWidth = 335;

const menuItems = [
  { text: "Dashboard", path: "/", icon: <HomeIcon /> },
  { text: "Hygiene", path: "/hygiene", icon: <HygieneIcon /> },
  { text: "Payments", path: "/payments", icon: <PaymentsIcon /> },
  { text: "Users", path: "/users", icon: <PeopleIcon /> },
  { text: "Offers", path: "/offers", icon: <LocalOfferIcon /> },
  { text: "Requests", path: "/requests", icon: <RequestQuoteIcon /> },
  { text: "Dining", path: "/dining", icon: <LocalDiningIcon /> },
  { text: "Customers", path: "/customers", icon: <RestaurantIcon /> },
];

function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Paper
      sx={{
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        color: "white",
        fontFamily:'Outfit'
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25vh",
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          filter: "grayscale(100%)",
        }}
      />

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient(to bottom,rgba(77, 76, 76, 0.7),rgb(59,59,58),rgb(59, 58,58), rgb(59,58,58),rgb(59,58,58))",
          zIndex: 1,
        }}
      />

      <Toolbar sx={{ justifyContent: "center", width: "100%", zIndex: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "36px" },
            background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            zIndex: 3,
            marginTop: "100px",
          }}
        >
          Orddar
        </Typography>
      </Toolbar>

      <Box sx={{ width: "100%", flexGrow: 1, zIndex: 2, marginTop: "70px" }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => isMobile && handleDrawerToggle()}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: { xs: "8px 16px", sm: "12px 20px" },
                color: "#aaa",
                "&:hover": {
                  color: "#FFA726",
                },
                "&.active": {
                  color: "#FFA726",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: "40px" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ 
                  "& .MuiTypography-root": {
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "bold"
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ 
            position: 'fixed', 
            top: '10px', 
            left: '10px', 
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)'
            }
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth 
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth 
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </>
  );
}

export default Sidebar;