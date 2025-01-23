import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"; // Updated to include the child components
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
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {/* Navbar */}
          <Navbar />

          {/* Content Area */}
          <Box sx={{ display: "flex", flexGrow: 1, padding: "16px" }}>
            {/* Routes Area */}
            <Box sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} /> {/* Default Dashboard Route */}
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