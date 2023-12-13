import React from "react";
import Navbar from "./navbar/Navbar";
import BtnCard from "./btn_card";
import first from "../../assets/images/Product-Icons.png";
import second from "../../assets/images/Product-Icons_2.png";
const Header = () => {
  return (
    <div className="bg-white flex justify-around md:border-spacing-0 border-b">
      <div className="flex items-center ">
        <div className="md:order-first order-last  md:mr-0 mr-8">
          <h1 className="">تست برنامه نویسی</h1>
        </div>
        <Navbar />
      </div>
      <div className="flex py-4 items-center ">
        <BtnCard src={second} content="پیگیری خرید" />
        <BtnCard src={first} content="ورود / ثبت‌نام" />
      </div>
    </div>
  );
};

export default Header;
