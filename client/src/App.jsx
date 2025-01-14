import React from "react";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './styles.css';
import Home from "./pages/Home";
import Login_0 from "./pages/Login_0";
import Header from "./pages/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_0 />} />
      </Routes>
    </>
  );
};

export default App;
