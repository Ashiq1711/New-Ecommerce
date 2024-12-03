import React from "react";
import Container from "./Container";
import Title from "./Title";
import SocialIcons from "./SocialIcons";
import {Link} from "react-router-dom"
import payment from "../assets/images/banner/payment.png"
const ShopData = [
  {
    name: "Accesories",
    link: "/shop",
  },
  {
    name: "Clothes",
    link: "/shop",
  },
  {
    name: "Electronics",
    link: "/shop",
  },
  {
    name: "Home & Garden",
    link: "/shop",
  },
  {
    name: "New Arrivals",
    link: "/shop",
  },
]
const Youraccount = [
  {
    name: "Profile",
    link: "/shop",
  },
  {
    name: "Orders",
    link: "/shop",
  },
  {
    name: "Addresses",
    link: "/shop",
  },
  {
    name: "Account Details",
    link: "/shop",
  },
  {
    name: "Payment Options",
    link: "/shop",
  },
]
const Footer = () => {
  return (
    <div className="w-full bg-primary py-10 text-white/80">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 ">
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <Title className="text-white">More about SHOP.CO Shop</Title>
            <p className="text-base w h-full lg:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <SocialIcons />
          </div>
        </div>
        <div className="flex flex-col">
          <Title>Shop</Title>
          <div>
            {ShopData?.map((item, index) => (
              <div key={index} className="my-4">
                <Link className=" hover:underline" to={item?.link}>{item?.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <Title>Your account</Title>
          <div>
            {Youraccount?.map((item, index) => (
              <div key={index} className="my-4">
                <Link className=" hover:underline" to={item?.link}>{item?.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <Title className="text-white">Subscribe to our newsletter.</Title>
            <p className="text-base w h-full lg:w-[80%]">
            A at pellentesque et mattis porta enim elementum.
            </p>
           <div className="flex gap-2 w-full">
            <input className="boreder-b outline-none rounded-md bg-black pl-3 border-white" type="email" placeholder="Enter your email" />
            <button className="hover:bg-white text-white border border-1  hover:text-black py-2 px-4 rounded-md">Subscribe</button>
           </div>
           <img src={payment} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
