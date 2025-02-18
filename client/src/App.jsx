import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/Theme";
import { Box } from "@mui/material";
import "./styles.css";
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
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Profile from "./components/ProfilePages/profile";
import Dining from "./pages/Dining";
import FoodMenu from "./components/FoodMenu";
import Faq from "./pages/Faq";
import ManageFaq from "./pages/ManageFaq";
import Requests from "./pages/Requests";
import Offers from "./pages/Offers";
import TotalSales from "./pages/TotalSales";
const DashboardLayout = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <Background>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Sidebar />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            width: { xs: "100%", md: "calc(100% - 335px)" },
            marginLeft: { xs: 0, md: 0 },
            flexDirection: "column",
          }}
        >
          <Navbar onProfileClick={() => setProfileOpen(true)} />
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              padding: { xs: "8px", sm: "16px" },
            }}
          >
            <Box sx={{ flex: 1 }}>{children}</Box>
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
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login_0 />} />
          <Route path="/login_otp" element={<Login_otp />} />
          <Route path="/LoginEmail" element={<LoginEmail />} />
          <Route path="/LoginOtpEmail" element={<LoginOtpEmail />} />
          <Route path="/PasswordReset" element={<PasswordReset />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />

          <Route
            path="/faq"
            element={
              <DashboardLayout>
                <Faq />
              </DashboardLayout>
            }
          />
          <Route
          path="/ManageFaq"
          element={
            <DashboardLayout>
              <ManageFaq/>
            </DashboardLayout>
          }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
           <Route
            path="/totalsales"
            element={
              <DashboardLayout>
                <TotalSales />
              </DashboardLayout>
            }
          />
          <Route
            path="/offers"
            element={
              <DashboardLayout>
                <Offers />
              </DashboardLayout>
            }
          ></Route>
          <Route
            path="/requests"
            element={
              <DashboardLayout>
                <Requests />
              </DashboardLayout>
            }
          ></Route>
          <Route
            path="/dining"
            element={
              <DashboardLayout>
                <Dining />
              </DashboardLayout>
            }
          ></Route>
          <Route
            path="/customers"
            element={
              <DashboardLayout>
                <Customers />
              </DashboardLayout>
            }
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
