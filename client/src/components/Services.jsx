import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import Container from "./Container";
const services = [
  {
    id: 1,
    title: "Free Delivery",
    description: "Free Shipping.",
    icon: <TbTruckDelivery />,
  },
  {
    id: 2,
    title: "Terurns",
    description: "Creating intuitive and beautiful user interfaces.",
    icon: <TbTruckReturn />,
  },
  {
    id: 3,
    title: "Support 24/7",
    description: "Improving website visibility and search engine rankings.",
    icon: <MdSupportAgent />,
  },
  {
    id: 3,
    title: "Payment Security",
    description: "100% money back guarantee.",
    icon: <MdPayments />,
  },
];
const Services = () => {
  return (
    <div className=" bg-[#F0F0F0]">
      <Container className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center md:place-items-start">
        {services?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-3xl  md:text-5xl text-blue-600">
              {item.icon}
            </span>
            <div>
              <p className="font-bold text-xl ">{item.title}</p>
              <p className="text-sm font-medium tracking-wide max-w-[160px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Services;
