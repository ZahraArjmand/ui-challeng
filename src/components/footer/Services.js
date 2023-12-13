import React from "react";
import close from "../../assets/images/small-down.png";
import open from "../../assets/images/small-down_4.png";
import { useState } from "react";
const Services = () => {
  // const [show]
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = (e) => {
    console.log(!isOpen);
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="m-4">
      <p className="text-sm text-bold" onClick={openHandler}>
        خدمات{" "}
        <span className="md:hidden inline-block">
          {isOpen ? <img src={open} alt="" /> : <img src={close} alt="" />}
        </span>
      </p>
      <ul className="text-sm leading-10 text-[#464646] mt-5">
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          بلیط هواپیما داخلی
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          بلیط هواپیما خارجی
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          رزرو هتل داخلی
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          رزرو هتل خارجی
        </li>
      </ul>
    </div>
  );
};

export default Services;
