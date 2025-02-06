import React from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Card,
  List,
  Avatar,
  Button
} from "@mui/material";
import styles from "../../styles/ProfileStyles";
import { styles1 } from "../../styles/DashBoardStyles";

export default function Donations({ onClose }) {
  return (
    <Box sx={styles1.ScrollBar3}>
      {/* Top Header with Close Button */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={onClose} sx={styles.closeButton}>
          <img src="close.png" alt="Close" style={styles.WidthHeight20} />
        </IconButton>
        <Typography variant="h6" sx={styles.headerText}>
          Donations
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ p: 0, maxWidth: 400, mx: "auto", fontFamily: "Poppins, sans-serif" }}>
        {/* Organization Details Form */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1,fontFamily:'outfit' }}>
          Donating Organization Details
        </Typography>
        <Box sx={{ mb: 2, p: 2, boxShadow: 3, borderRadius: 3,opacity:0.4,fontFamily:'outfit' }}>
        Organization Name
          <TextField fullWidth label="Add Description" variant="outlined" margin="dense" multiline rows={3} borderRadius = '10px' fontFamily='outfit' />
        </Box>

        {/* Donation Stats */}
        <Box sx={{ mt: 3, p: 1,border:"1px solid #ddd",borderRadius:3 }}>
          <Box>
            <Typography variant="body1" fontFamily='outfit'sx={{ borderBottom: "1px solid #ddd", pb: 1 ,pt:1}}>
              Total Donations <span style={{ float: "right",fontFamily:'outfit', }}>18</span>
            </Typography>
            <Typography variant="body1" fontFamily='outfit' sx={{ borderBottom: "1px solid #ddd", pb: 1,pt:1 }}>
              Total Amount <span style={{ float: "right" ,fontFamily:'outfit'}}>180</span>
            </Typography>
            <Typography variant="body1" fontFamily='outfit' sx={{ borderBottom: "1px solid #ddd", pb: 1,pt:1}}>
              Balance <span style={{ float: "right" ,fontFamily:'outfit'}}>80</span>
            </Typography>
            <Box sx={{ p: 1, mt: 1, bgcolor: "white", borderRadius: 2,boxShadow:1 }}>
              <Typography fontWeight="bold" fontFamily='outfit'>
                Amount Transferred <span style={{ float: "right" ,fontFamily:'outfit'}}>100</span>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Today's Donations */}
        <Typography variant="h6" sx={{ fontWeight: "medium", mt: 2,fontFamily:'outfit' }}>
          Today's Donations
        </Typography>
        <List>
          {[1, 2].map((_, index) => (
            <Box key={index} sx={{ mb: 1, p: 1, display: "flex", alignItems: "center", border:"1px solid #ddd", borderRadius: 3 }}>
              <Avatar alt="Jhonne Smith" src="/static/images/avatar/1.jpg" sx={{ mr: 2 }} />
              <Typography sx={{ flexGrow: 1,fontFamily:'outfit' }}>Jhonne Smith</Typography>
              <Typography sx={{ fontWeight: "bold",fontFamily:'outfit'  }}>18</Typography>
            </Box>
          ))}
        </List>
        <Box sx={styles.SubmitButton}>
          <Button variant="transparent"  sx={{ fontFamily: "outfit",ml:'120px' }}>
            Transfer Amount
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
