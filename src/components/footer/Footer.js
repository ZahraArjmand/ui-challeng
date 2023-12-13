import React from "react";
import Services from "./Services";
import OurCompany from "./OurCompany";
import MoreInfo from "./MoreInfo";

const Footer = () => {
  return (
    <div className="w-screen my-6 pt-16 pb-0 mb-0 flex flex-col items-center justify-center p-[17px]  bg-white">
      <div className=" mb-4 flex flex-col container">
        <div className=" flex  border-b pb-16 justify-between">
          <div className="flex">
            <Services />
            <MoreInfo />
            <OurCompany />
          </div>
          <div className="">
            <p className="text-sm text-bold ">همراه ما باشید</p>
            <input
              placeholder="ایمیل خود را برای خبرنامه وارد کنید"
              className="border text-sm rounded p-3 w-1/2"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
