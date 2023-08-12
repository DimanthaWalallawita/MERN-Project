import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import React from "react";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>

      <Routes>
        <Route path="/forgot" element={<Forgot/>}/>
      </Routes>

      <Routes>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
