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
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Example Icons
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PaymentsIcon from "@mui/icons-material/Payment";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HygieneIcon from "@mui/icons-material/CleanHands";

const drawerWidth = 240;

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
  return (
    <Paper
      sx={{
        width: drawerWidth,
        height: "100vh",
        flexShrink: 0,
        ".MuiPaper-root": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), #202020)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "20px",
          position: "relative",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* 🔹 Background Image at the Top */}
      <Box
        sx={{
          width: "100%",
          height: "120px",
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          zIndex:1,
          filter: "grayscale(100%)",
        }}
      />
      <Box
      sx={{
        width: "100%",
        height: "120px",
        position: "absolute",
        top: 0,
        left: 0,
        background: "linear-gradient(to,#3D3C3C 13%, #3C3B3B 63%,#3E3D3D 100%)",
        zIndex:1,
        opacity:.8,
      }}></Box>

      {/* 🔹 App Title */}
      <Toolbar sx={{ justifyContent: "center", width: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "bold",
            fontSize: "36px",
            background: "linear-gradient(to bottom, #FDD30F, #FF6B28)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            zIndex:2,
          }}
        >
          Orddar
        </Typography>
      </Toolbar>

      {/* 🔹 Sidebar Menu */}
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "12px 20px",
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
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default Sidebar;