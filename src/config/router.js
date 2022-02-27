import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Home from "../views/Home";
import Login from "../views/Login";
import Sell from "../views/Sell";
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
            <Route path="/sell" element={<Sell />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/detail/:adId" element={<Detail />}/>
        </Routes>
      </div>
    </Router>
  );
}