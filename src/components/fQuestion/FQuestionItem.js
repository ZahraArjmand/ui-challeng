import React from "react";
import close from "../../assets/images/small-down.png";
import open from "../../assets/images/small-down_4.png";
import { useState } from "react";
import { useEffect } from "react";
const FQestionItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const toggleIcon = (e) => {
    e.stopPropagation(); // Prevent click event from reaching parent elements
  };
  return (
    <div className="p-2 border-b">
      <details className="" onClick={toggleOpen} open={isOpen}>
        <summary className="m-4 flex justify-between">
          <span className="text-[#464646] text-base">
            {props.item.question}
          </span>
          <span className="float-left inline-block self-center flex-shrink-0">
            {!isOpen ? (
              <img src={close} alt="Open icon" />
            ) : (
              <img src={open} alt="Close icon" />
            )}
          </span>
        </summary>
        <div className="px-4 py-2 text-[#464646] text-base">
          {props.item.ansewr}
        </div>
      </details>
    </div>
  );
};

export default FQestionItem;
