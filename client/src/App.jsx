import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'; 
import theme from './utils/Theme'; 
import './styles.css';
import Home from "./pages/Home";
import Login_0 from "./pages/Login_0";
import Header from "./pages/Header";
import Login_otp from "./pages/Login_otp";
import LoginEmail from "./pages/LoginEmail";
import LoginOtpEmail from "./pages/LoginOtpEmail";
import PasswordReset from "./pages/PasswordReset";
import CreateAccount from "./pages/CreateAccount";

const App = () => {
  return (
    <ThemeProvider theme={theme}> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_0 />} />
        <Route path="/login_otp" element={<Login_otp />} />
        <Route path="/LoginEmail" element={<LoginEmail />} />
        <Route path="/LoginOtpEmail" element={<LoginOtpEmail />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
