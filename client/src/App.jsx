import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './utils/Theme'; 
import { Box } from "@mui/material";
import './styles.css';

// Pages
import Home from "./pages/Home";
import Login_0 from "./pages/Login_0";
import Header from "./pages/Header";
import Login_otp from "./pages/Login_otp";
import LoginEmail from "./pages/LoginEmail";
import LoginOtpEmail from "./pages/LoginOtpEmail";
import PasswordReset from "./pages/PasswordReset";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Profile from "./components/ProfilePages/profile";



const DashboardLayout = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <Background>
      <Box sx={{ 
        display: "flex", 
        height: "100vh",
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        <Sidebar />
        <Box sx={{ 
          flexGrow: 1, 
          display: "flex",
          width: { xs: '100%', md: 'calc(100% - 335px)' },
          marginLeft: { xs: 0, md: 0 },
          flexDirection: "column"   
        }}>
          <Navbar onProfileClick={() => setProfileOpen(true)} />
          <Box sx={{ 
            display: "flex", 
            flexGrow: 1, 
            padding: { xs: "8px", sm: "16px" }
          }}>
            <Box sx={{ flex: 1 }}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
      <Profile open={profileOpen} onClose={() => setProfileOpen(false)} />
    </Background>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login_0 />} />
          <Route path="/login_otp" element={<Login_otp />} />
          <Route path="/LoginEmail" element={<LoginEmail />} />
          <Route path="/LoginOtpEmail" element={<LoginOtpEmail />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />

          <Route path="/dashboard" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
          } />
          <Route path="/customers" element={
              <DashboardLayout>
                <Customers />
              </DashboardLayout>
          } />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;