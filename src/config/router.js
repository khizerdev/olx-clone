import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";

export default function Navigation() {
  return (
    <Router>
      <div>
      
      <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Signup />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}