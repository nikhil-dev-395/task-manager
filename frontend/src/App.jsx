import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import HomePage from "./pages/home/HomePage";
import Footer from "./pages/footer/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<HomePage />} path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
