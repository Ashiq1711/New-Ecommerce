import React from "react";
import saleImgOne from "../assets/images/sale/saleImgOne.jpg";
import saleImgTwo from "../assets/images/sale/saleImgTwo.jpg";
import saleImgThree from "../assets/images/sale/saleImgThree.jpg";
const Sale = () => {
  return (
    <div className="w-full h-auto md:h-[550px] flex flex-col md:flex-row items-center justify-between gap-10">
      <div className=" w-full md:w-1/2 md:h-full h-[250px] rounded-md overflow-hidden relative group">
        <img
          src={saleImgOne}
          alt=""
          className="group-hover:scale-110 duration-300 object-cover w-full h-full"
        />
        <div className="absolute w-full h-full bg-black/50 text-white  top-0 left-0 flex items-center p-10 flex-col justify-center">
          {" "}
          <p className="text-lg font-semibold">10% sales ongoing on phone</p>
          <h1 className="text-2xl font-bold">Offers on limited time</h1>
          <button className="bg-secondary/80  rounded-md hover:bg-primary hoverEffect mt-2 text-black font-bold hover:text-white py-2 px-4">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col gap-10 md:gap-0 justify-between">
      
          <div className="w-full h-[250px] md:h-[46%] border border-gray-300 rounded-md overflow-hidden relative group">
            <img
              src={saleImgTwo}
              alt=""
              className="group-hover:scale-110 duration-300 object-cover w-full h-full"
            />
            <div className="absolute w-full h-full bg-black/50 text-white  top-0 left-0 flex items-start p-10 flex-col justify-center">
              <p className="text-lg font-semibold">
                10% sales ongoing on phone
              </p>
              <h1 className="text-2xl font-bold">Offers on limited time</h1>
              <button className="bg-white  rounded-md hover:bg-primary hoverEffect mt-2 text-black font-bold hover:text-white py-2 px-4">
                Shop Now
              </button>
            </div>
          </div>
          <div className="w-full h-[250px] md:h-[46%] border border-gray-300 rounded-md overflow-hidden relative group ">
            <img
              src={saleImgThree}
              alt=""
              className="group-hover:scale-110 duration-300 object-cover w-full h-full"
            />
            <div className="absolute w-full h-full bg-black/50 text-white  top-0 left-0 flex items-start p-10 flex-col justify-center">
              {" "}
              <p className="text-lg font-semibold">
                10% sales ongoing on phone
              </p>
              <h1 className="text-2xl font-bold">Offers on limited time</h1>
              <button className="bg-white rounded-md hover:bg-primary hoverEffect mt-2 text-black font-bold hover:text-white py-2 px-4">
                Shop Now
              </button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Sale;
