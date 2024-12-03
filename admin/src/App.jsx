import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Users from "./pages/Users";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  useEffect(() => {
localStorage.setItem("token", token);
  }, [token]);
  return (
    
    <main className="w-full bg-gray-50 min-h-screen">
      {token === null ? <Login/> : 
      <>
      <Navbar token={token} setToken={setToken} />
      <div className="flex w-full">
        <div className="w-[17%] fixed h-screen border border-r-slate-300">
          <Sidebar />
        </div>
        <div className="w-[82%] ml-[18%] h-screen">
          {/* Page Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
      </>
      }
    </main>
   
  );
};

export default App;
