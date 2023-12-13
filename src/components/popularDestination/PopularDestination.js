import React from "react";
// import RecommendedHotelItems from "./RecommendedHotelItems";
import data from "../../modules/data.json";
import PopularDestinationItem from "./PopularDestinationItem";

const PopularDestination = () => {
  return (
    <div className="w-screen mt-6 flex flex-col items-center justify-center p-[17px] md:p-0 my-6 bg-white md:py-12">
      <div className="container mb-4">
        <h1>مقاصد پرتردد</h1>
        <div className="md:grid md:grid-cols-4 md:gap-4 mt-8">
          {data.popularDestinations.map((item) => (
            <PopularDestinationItem item={item} />
          ))}
          <button className="md:hidden block border border-blue-500 rounded w-full  bg-transparent my-4 text-center py-[9px]">
            <p className="font-sm text-[#1773dc]">مقاصد بیشتر</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopularDestination;
