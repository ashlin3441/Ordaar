import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Sidebar using MUI Drawer
import { Box } from "@mui/material"; // MUI layout component

import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Dining from "./pages/Dining";
import Hygiene from "./pages/Hygiene";
import Offers from "./pages/Offers";
import Requests from "./pages/Requests";
import Users from "./pages/Users";
import Payments from "./pages/Payments";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar (Material UI Drawer) */}
        <Sidebar />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3, marginLeft: "240px" }}>
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
    </Router>
  );
}

export default App;