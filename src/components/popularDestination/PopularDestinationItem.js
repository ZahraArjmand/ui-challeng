import React from "react";

const PopularDestinationItem = (props) => {
  console.log(props.item);
  return (
    <div className="border p-3 flex items-center my-2 md:my:0  child">
      <img src={props.item.src} />
      <p className="mx-4 font-base text-[#464646]">
        {props.item.locationsName}
      </p>
    </div>
  );
};

export default PopularDestinationItem;
