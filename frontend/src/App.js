import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import Builder from "./Components/Builder";

import { AuthProvider } from "./Context/authContext";
function App() {
  return (
      <AuthProvider>
      <Router>
        <Routes>
            <Route path="/builder/:templateId" element={<Builder />} />
            <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />



        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
