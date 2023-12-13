import React from "react";
import hamburger from "../../../assets/images/Group 12835.png";
const Navbar = () => {
  return (
    <nav class="flex items-center justify-between ">
      {/* <!-- Logo or Branding (Assuming it's on the left) --> */}

      {/* <!-- Hamburger Icon --> */}
      <div class="block md:hidden">
        <button
          id="hamburger-toggle"
          class="flex items-center px-3 py-2  rounded hover:text-white hover:border-white"
        >
          <img src={hamburger} alt="menu" />
        </button>
      </div>

      {/* <!-- Submenu Items (Initially hidden on small screens) --> */}
      <div className="">
        <ul className="flex ">
          <li className="text-sm md:block hidden text-[#464646] mx-[56px]">
            بلیط هواپیما
          </li>
          <li className="text-sm md:block hidden text-[#464646]">رزرو هتل</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
