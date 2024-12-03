import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { headerNavigation } from "../constants/index.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Title from "./Title";
import SocialIcons from "./SocialIcons";
const Header = () => {
  let [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="border-b-[1px] border-slate-300 sticky top-0 bg-white z-50">
      <Container className="py-7 flex justify-between items-center gap-x-3 md:gap-x-7">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt=""
          className="w-32 cursor-pointer"
        />
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-secondary">
          {headerNavigation?.map((item, index) => (
            <NavLink
              to={item?.link}
              key={index}
              className="relative group overflow-hidden hover:text-primary hoverEffect cursor-pointer"
            >
              {item?.title}
              <span className="absolute bottom-0 left-0 w-full -translate-x-[110%] group-hover:translate-x-0 inline-block  h-0.5 bg-primary transition-all duration-300 ease-in-out"></span>
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="relative group text-xl  text-secondary hoverEffect hover:text-primary "
          >
            <FaCartShopping />
            <span className="group-hover:bg-primary w-3.5 h-3.5 bg-secondary rounded-full text-[9px] hoverEffect flex justify-center items-center absolute -top-1 -right-2 text-white ">
              0
            </span>
          </NavLink>
          <NavLink
            to="/signin"
            className="text-xl text-secondary hoverEffect hover:text-primary"
          >
            <FaUser />
          </NavLink>
        </div>
        <button onClick={() => setIsOpen(true)} className="md:hidden text-3xl text-secondary hoverEffect hover:text-primary">
          <LuMenu />
        </button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 md:hidden bg-black/70 flex items-center justify-center p-4">
            <DialogPanel className="w-[94%] space-y-4 border-secondary border  bg-black/80 text-white p-8">
             <div className="flex items-center justify-between">
              <Title>Navigation Menu</Title>
              <IoMdClose onClick={() => setIsOpen(false)} className="text-3xl hover:text-red-600 hoverEffect cursor-pointer"/>
             </div>
           <div>
            {headerNavigation?.map((item, index) => (
             <NavLink onClick={() => setIsOpen(false)} to={item?.link} key={index} className="flex  duration-300 relative group  items-center gap-3 py-3">
     
              <p>{item?.icons}</p>
        

               <p className="text-lg">{item?.title}</p>
               <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300"/>
      

             </NavLink>
            ))}
            <div className="mt-4">
              <NavLink to="/signin" onClick={() => setIsOpen(false)} className="text-lg flex  duration-300 relative group items-center gap-3">
              <FaSignInAlt />Signin
              <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300"/>
              </NavLink>
              </div>
           </div>
           <div>
            <SocialIcons/>
           </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Container>
    </div>
  );
};

export default Header;
