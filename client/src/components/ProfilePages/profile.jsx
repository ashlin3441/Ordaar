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
import PasswordReset from "./PasswordReset1";
import styles from "../../styles/ProfileStyles";

export default function Profile({ open, onClose }) {
  const [activeView, setActiveView] = useState("profile");

  const profileData = [
    {
      icon: <img src="name.png" alt="Name" style={styles.Nameicon} />,
      label: "Name",
      value: "Jhone Smith",
    },
    {
      icon: <Mail color="#FFA500" size={22} />,
      label: "Email",
      value: "jhonesmith@gmail.com",
      onChange: () => setActiveView("emailChange"),
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
        <Box sx={styles.profileDrawer}>
          <Box sx={styles.CloseBox}>
            <IconButton onClick={onClose} sx={styles.closeButton}>
              <img src="close.png" alt="Close" style={styles.WidthHeight20} />
            </IconButton>
            <Typography variant="h6" sx={styles.headerText}>
              Profile
            </Typography>
          </Box>

          <Box sx={styles.avatarBox}>
            <Avatar alt="Profile" src="/profile.jpg" sx={styles.ProfileAvataar} />
          </Box>
          {profileData.map((item, index) => (
            <Box key={index} sx={styles.profileDetailBox}>
              <Box sx={styles.profileBox}>
                <Typography variant="body2" align="left" sx={styles.iconLabelText}>
                  {item.icon}
                  <Box sx={styles.iconDivider} />
                  <span>{item.label}</span>
                </Typography>
                {item.onChange && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={item.onChange} 
                    sx={styles.changeButton}
                  >
                    Change
                  </Button>
                )}
              </Box>
              <Typography variant="body2" align="left" sx={styles.valueText}>
                {item.value}
              </Typography>
            </Box>
          ))}
          <Box sx={styles.buttonBox}>
            <Button variant="outlined" fullWidth sx={styles.donationButton}>
              Donations
            </Button>
            <Button variant="outlined" color="error" fullWidth sx={styles.logoutButton}>
              Log out
            </Button>
          </Box>
        </Box>
      ) : activeView === "emailChange" ? (
        <EmailChange onClose={() => setActiveView("profile")} />
      ) : activeView === "numberChange" ? (
        <NumberChange onClose={() => setActiveView("profile")} />
      ) : (
        <PasswordReset onClose={() => setActiveView("profile")} />
      )}
    </Drawer>
  );
}
