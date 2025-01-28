// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Hygiene from "./pages/Hygiene";
import Payments from "./pages/Payments";
import Users from "./pages/Users";
import Offers from "./pages/Offers";
import Requests from "./pages/Requests";
import Dining from "./pages/Dining";
import Customers from "./pages/Customers";

function App() {
  return (
    <Router>
      <Box sx={{ 
        display: "flex", 
        height: "100vh",
        flexDirection: { xs: 'column', md: 'row' }
      }}>
        <Sidebar />
        <Box sx={{ 
          flexGrow: 1, 
          display: "flex",
          width: { xs: '100%', md: 'calc(100% - 335px)' },
          marginLeft: { xs: 0, md: '0px' },
          flexDirection: "column" 
        }}>
          <Navbar />
          <Box sx={{ 
            display: "flex", 
            flexGrow: 1, 
            padding: { xs: "8px", sm: "16px" }
          }}>
            <Box sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/hygiene" element={<Hygiene />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/users" element={<Users />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/customers" element={<Customers />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
