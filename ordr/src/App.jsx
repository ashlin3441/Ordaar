import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // MUI layout component
import Grid from "@mui/material/Grid2";
import Sidebar from "./components/Sidebar"; // Sidebar using MUI Drawer
import Navbar from "./components/Navbar"; // Navbar component'


// Import Pages
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Dining from "./pages/Dining";
import Hygiene from "./pages/Hygiene";
import Offers from "./pages/Offers";
import Requests from "./pages/Requests";
import Users from "./pages/Users";
import Payments from "./pages/Payments";

import PageContainer from "./pages/PageContainer";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar (Material UI Drawer) */}
        <Sidebar />

        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Navbar (Positioned after Sidebar) */}
          <Navbar />

          {/* Content Below the Navbar */}
          <Box sx={{ marginTop: "64px", padding: "16px", marginLeft: "240px" }}>
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
    </Router>
  );
}


export default App;




