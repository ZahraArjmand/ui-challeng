import React from "react";
import Services from "./Services";
import OurCompany from "./OurCompany";
import MoreInfo from "./MoreInfo";
import aparat from "../../assets/images/Aparat.png";
import telegram from "../../assets/images/paper-plane.png";
import instagram from "../../assets/images/Symbol 99.png";
import facebook from "../../assets/images/Symbol 100.png";
import linkedin from "../../assets/images/logo-linkedin (1).png";
import first from "../../assets/images/Group 8886_4.png";
import second from "../../assets/images/Group 8886_3.png";
import third from "../../assets/images/Group 8886_2.png";
import four from "../../assets/images/Group 8886.png";
const Footer = () => {
  return (
    <div className="w-screen my-6 pt-16 pb-0 mb-0 flex flex-col items-center justify-center p-[17px]  bg-white">
      <div className="  flex flex-col container">
        <div className=" flex  border-b pb-16 justify-between md:flex-row flex-col">
          <div className="flex md:flex-row flex-col">
            <Services />
            <MoreInfo />
            <OurCompany />
          </div>
          <div className=" mt-4">
            <p className="text-sm text-bold ">همراه ما باشید</p>
            <div
              placeholder="ایمیل خود را برای خبرنامه وارد کنید"
              className="border md:w-96 rounded p-3 mt-5 flex justify-between w-full"
            >
              <input
                placeholder="ایمیل خود را برای خبرنامه وارد کنید"
                className="text-sm w-full"
              ></input>
              <button className="float-left text-[#1773dc] text-sm">ثبت</button>
            </div>
            <div className="flex">
              <img src={first} alt="" className=" my-4" />
              <img src={second} alt="" className=" my-4" />
              <img src={third} alt="" className=" my-4" />
              <img src={four} alt="" className=" my-4" />
            </div>
          </div>
        </div>
        <div className="flex md:justify-between pt-4 md:flex-row flex-col pb-4">
          <p className="text-[#464646] text-xxs font-light">
            <span>© ۱۴۰۰</span>&nbsp;&nbsp;تمامی حقوق مادی و معنوی این وب سایت
            محفوظ است
          </p>
          <div className="flex">
            <img src={facebook} alt="" className="mx-2 md:my-0 my-4" />
            <img src={telegram} alt="" className="mx-2 md:my-0 my-4" />
            <img src={instagram} alt="" className="mx-2 md:my-0 my-4" />
            <img src={linkedin} alt="" className="mx-2 md:my-0 my-4" />
            <img src={aparat} alt="" className="mx-2 md:my-0 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
