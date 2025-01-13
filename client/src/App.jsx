import React from "react";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  );
};

export default App;
