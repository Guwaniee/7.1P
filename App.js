import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
