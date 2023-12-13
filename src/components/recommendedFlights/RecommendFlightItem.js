import React from "react";
import SaleBadge from "./SaleBadge";
import plane from "../../assets/images/plane-fill.png";
import PN from "persian-number";

const RecommendFlightItem = (props) => {
  console.log(props.item.specialSale);
  return (
    <div className="ticket mt-3 flex items-center w-full h-40 md:h-36">
      <div
        className="flex items-center "
        style={{ width: "67%", borderLeft: "0.5px solid lightgray" }}
      >
        <div className="">{!!props.item.specialSale && <SaleBadge />}</div>
        <div className=" w-full border-left">
          <div className="block">
            <p className="inline-block text-base text-[#464646] m-4 ">
              {props.item.originLocation}
            </p>
            <img className="inline-block pt-2" src={plane} />
            <p className="inline-block text-base text-[#464646] m-4">
              {props.item.destinationLocation}
            </p>
          </div>
          <div className="text-[#8d8d8d] text-xsm mx-4">
            <p>
              <span>{props.item.startDate}</span>&nbsp;&nbsp;&nbsp;تا
              <span>{props.item.endDate}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto overflow-hidden flex">
        {props.item.specialSale ? (
          <div>
            <p className="text-center line-through	text-sm text-[#8d8d8d]">
              {PN.convertEnToPe(props.item.specialSalePrices.originalPrice)}
            </p>
            <p className="py-2 text-[#1773dc] text-[18px] font-bold	">
              {PN.convertEnToPe(props.item.specialSalePrices.finalPrice)}&nbsp;
              <span className="text-xsm text-[#8d8d8d] font-light">تومان</span>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-center text-xsm text-[#8d8d8d]">قیمت از</p>
            <p className="py-2 text-[#1773dc] text-[18px] font-bold">
              {PN.convertEnToPe(props.item.startPrice)}&nbsp;
              <span className="text-xsm text-[#8d8d8d] font-light">تومان</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default RecommendFlightItem;
