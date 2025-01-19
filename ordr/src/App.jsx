// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Box } from "@mui/material"; // MUI layout component
// import Grid from "@mui/material/Grid2";
// import Sidebar from "./components/Sidebar"; // Sidebar using MUI Drawer
// import Navbar from "./components/Navbar"; // Navbar component'
// import NewNavbar from "./components/NewNavbar";

// // Import Pages
// import Customers from "./pages/Customers";
// import Dashboard from "./pages/Dashboard";
// import Dining from "./pages/Dining";
// import Hygiene from "./pages/Hygiene";
// import Offers from "./pages/Offers";
// import Requests from "./pages/Requests";
// import Users from "./pages/Users";
// import Payments from "./pages/Payments";

// import PageContainer from "./pages/PageContainer";

// // function App() {
// //   return (
// //     <Router>
// //       <Box sx={{ display: "flex", height: "100vh" }}>
// //         {/* Sidebar (Material UI Drawer) */}
// //         <Sidebar />

// //         {/* Main Content Area */}
// //         <Box sx={{ flexGrow: 1 }}>
// //           {/* Navbar (Positioned after Sidebar) */}
// //           <Navbar />

// //           {/* Content Below the Navbar */}
// //           <Box sx={{ marginTop: "64px", padding: "16px", marginLeft: "240px" }}>
// //             <Routes>
// //               <Route path="/" element={<Dashboard />} />
// //               <Route path="/hygiene" element={<Hygiene />} />
// //               <Route path="/payments" element={<Payments />} />
// //               <Route path="/users" element={<Users />} />
// //               <Route path="/offers" element={<Offers />} />
// //               <Route path="/requests" element={<Requests />} />
// //               <Route path="/dining" element={<Dining />} />
// //               <Route path="/customers" element={<Customers />} />
// //             </Routes>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Router>
// //   );
// // }

// const App = () => {
//   return(
//     <Router>
//       <Grid container xs={12} xl={12} width={'100%'} flexDirection={'column'}>
//           <Grid item xs={4}>
//             <Sidebar />
//           </Grid>
//           <Grid item width={'100%'} xs={8}>
//             <PageContainer/>
//           </Grid>
//         </Grid>
//     </Router>
//   )
// }
// export default App;

// 


import React from 'react';
import NewSidebar from './components/NewSidebar';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <NewSidebar />
      
      {/* Right side content */}
      <div className="ml-64 w-full">
        {/* Top bar with search */}
        <TopBar />
        
        {/* Main content */}
        <div className="p-6 mt-16">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p className="text-gray-600">
            Your main content goes here. This area will scroll independently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;