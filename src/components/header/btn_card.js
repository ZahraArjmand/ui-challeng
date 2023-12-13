import React from "react";
const BtnCard = (props) => {
  return (
    <div className="flex md:border  md:mx-3 md:pb-2 md:pl-3 md:pt-2 md:pr-[12px] mx-3 md:rounded">
      <img src={props.src} alt="" className="object-none" />
      <p className="hidden md:block md:mr-3 text-sm">{props.content}</p>
    </div>
  );
};
export default BtnCard;
