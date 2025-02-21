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
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PaymentsIcon from "@mui/icons-material/Payment";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HygieneIcon from "@mui/icons-material/CleanHands";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"; // Icon for Refund

const drawerWidth = 335;

const menuItems = [
  { text: "Dashboard", path: "/", icon: <HomeIcon /> },
  { text: "Hygiene", path: "/hygiene", icon: <HygieneIcon /> },
  { text: "Payments", path: "/payments", icon: <PaymentsIcon />, subItems: [{ text: "Refund", path: "/payments/refund", icon: <ReceiptLongIcon /> }] },
  { text: "Users", path: "/users", icon: <PeopleIcon /> },
  { text: "Offers", path: "/offers", icon: <LocalOfferIcon /> },
  { text: "Requests", path: "/requests", icon: <RequestQuoteIcon /> },
  { text: "Dining", path: "/dining", icon: <LocalDiningIcon /> },
  { text: "Customers", path: "/customers", icon: <RestaurantIcon /> },
];

function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // For handling submenu toggle
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (text) => {
    if (text === "Payments") {
      setOpenSubMenu(openSubMenu === text ? null : text);
    }
  };

  const gradientStyle = "linear-gradient(to right, #FDD30F, #FF6B28)";

  const drawer = (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        color: "white",
      }}
    >
      {/* Sidebar Background */}
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
            "linear-gradient(to bottom, rgba(77, 76, 76, 0.7), rgb(59, 59, 58), rgb(59, 58, 58), rgb(59, 58, 58), rgb(59, 58, 58))",
          zIndex: 1,
        }}
      />

      {/* Sidebar Title */}
      <Toolbar sx={{ justifyContent: "center", width: "100%", zIndex: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "36px" },
            background: gradientStyle,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            zIndex: 3,
            marginTop: "100px",
          }}
        >
          Orddar
        </Typography>
      </Toolbar>

      {/* Sidebar Menu */}
      <Box sx={{ width: "100%", flexGrow: 1, zIndex: 2, marginTop: "70px",color: "#FFA726" }}>
        <List>
          {menuItems.map((item) => (
            <Box key={item.text}>
              <ListItem
                button
                component={item.subItems ? "div" : Link}
                to={item.subItems ? undefined : item.path}
                onClick={() => handleMenuClick(item.text)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: { xs: "8px 16px", sm: "12px 20px" },
                  color: "#aaa",
                  background: location.pathname.startsWith(item.path) ? gradientStyle : "transparent",
                  borderRadius: "8px",
                  "&:hover": {
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
                      fontWeight: "bold",
                    },
                  }}
                />
                {item.subItems && (openSubMenu === item.text ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </ListItem>

              {/* Submenu for Payments */}
              {item.subItems && (
                <Collapse in={openSubMenu === item.text} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.text}
                        component={Link}
                        to={subItem.path}
                        sx={{
                          pl: 6,
                          color: "#aaa",
                          background: location.pathname === subItem.path ? gradientStyle : "transparent",
                          borderRadius: "8px",
                          "&:hover": { color: "#FFA726" },
                        }}
                      >
                        <ListItemIcon sx={{ color: "inherit", minWidth: "32px" }}>
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: { xs: "14px", sm: "16px" },
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
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
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer variant={isMobile ? "temporary" : "permanent"} open={!isMobile || mobileOpen} onClose={handleDrawerToggle} sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth } }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Sidebar;