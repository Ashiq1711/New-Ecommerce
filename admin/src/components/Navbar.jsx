import React from "react";
import Container from "./container";
import logo from "../assets/logo.png";
const Navbar = ({ token, setToken }) => {
  const handleToken = () => {
    setToken(null);
    
  }
  return (
    <header className="border border-b-slate-300 w-full sticky top-0 left-0 z-50 bg-white ">
      <Container className={"flex justify-between items-center"}>
        <div>
          <img className="w-32" src={logo} alt="" />
          <p className="text-sm text-gray-500">Admin pannel</p>
        </div>
    {token ?
          <button onClick={handleToken} className="bg-secondary duration-300 font-bold text-white py-2 px-4 rounded-full hover:bg-primary">
            Logout
          </button>
          :
          <button  className="bg-secondary duration-300 font-bold text-white py-2 px-4 rounded-full hover:bg-primary">
            Login
          </button>
    
  }
        
      </Container>
    </header>
  );
};

export default Navbar;
