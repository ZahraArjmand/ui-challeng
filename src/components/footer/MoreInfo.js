import React from "react";
import close from "../../assets/images/small-down.png";
import open from "../../assets/images/small-down_4.png";
import { useState } from "react";
const MoreInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = (e) => {
    console.log(!isOpen);
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="m-4">
      <p className="text-sm text-bold" onClick={openHandler}>
        اطلاعات تکمیلی{" "}
        <span className="md:hidden inline-block">
          {isOpen ? <img src={open} alt="" /> : <img src={close} alt="" />}
        </span>
      </p>
      <ul className="text-sm leading-10 text-[#464646] mt-5">
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          قوانین و مقررات
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          حقوق مسافر و سامانه شکایات
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          پرسش و پاسخ
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          راهنمای استرداد بلیط
        </li>
      </ul>
    </div>
  );
};

export default MoreInfo;
