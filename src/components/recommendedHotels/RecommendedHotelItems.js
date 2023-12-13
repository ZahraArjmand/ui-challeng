import React, { useEffect } from "react";
import { useState } from "react";
import rateOne from "../../assets/images/Path 17364.png";
import rateFour from "../../assets/images/Group 12703_2.png";
import rateThree from "../../assets/images/Group 12703_3.png";
import rateFive from "../../assets/images/Group 12703.png";
const RecommendedHotelItems = (props) => {
  const [rateSrc, setrateSrc] = useState("");
  useEffect(() => {
    console.log(props.item.rate);
    switch (props.item.rate) {
      case "1":
        setrateSrc(rateOne);
      case "3":
        setrateSrc(rateThree);
      case "4":
        setrateSrc(rateFour);
      case "5":
        setrateSrc(rateFive);
      default:
        setrateSrc(rateThree);
    }
    console.log(rateSrc);
  }, []);

  return (
    <div
      className="bg-white inline-block flex-none mx-2 md:mx-0"
      style={{ width: "280px" }}
    >
      <img src={`${props.item.src}`} className="mb-4" />
      <p className="text-base mr-[17px] mb-4">{props.item.hotelName} </p>
      <img src={rateSrc} className="mr-[17px] mb-4"></img>
    </div>
  );
};

export default RecommendedHotelItems;
