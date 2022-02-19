import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Signup from "../views/Signup";

export default function Navigation() {
  return (
    <Router>
      <div>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Signup />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}