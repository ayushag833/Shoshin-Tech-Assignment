import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="container-2">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
