import React, { useState } from "react";
import close from "../../assets/images/small-down.png";
import open from "../../assets/images/small-down_4.png";
const OurCompany = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (e) => {
    console.log(!isOpen);
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className="m-4">
      <p className="text-sm text-bold" onClick={openHandler}>
        شرکت‌ما
        <span className="md:hidden inline-block">
          {isOpen ? <img src={open} alt="" /> : <img src={close} alt="" />}
        </span>
      </p>
      <ul className="text-sm leading-10 text-[#464646] mt-5">
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>درباره ما</li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          تماس با ما
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          مجله گردشگری
        </li>
        <li className={`md:block ${isOpen ? "block" : "hidden"}`}>
          فرصت‌های شغلی
        </li>
      </ul>
    </div>
  );
};

export default OurCompany;
