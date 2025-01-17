import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundImage: "url('ordr/public/background.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          //color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
             textAlign: "center",
              width: "100%",
              fontWeight: "bold",
            background: "linear-gradient(45deg, #FDD30F 10%, #FF6B28 100%)",
          WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"}}
        >
          Orddar
        </Typography>
      </Toolbar>
      <List>
        {[
          { text: "Dashboard", path: "/" },
          { text: "Hygiene", path: "/hygiene" },
          { text: "Payments", path: "/payments" },
          { text: "Users", path: "/users" },
          { text: "Offers", path: "/offers" },
          { text: "Requests", path: "/requests" },
          { text: "Dining", path: "/dining" },
          { text: "Customers", path: "/customers" },
        ].map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} sx={{ color: "white" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
