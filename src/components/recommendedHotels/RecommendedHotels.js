import React from "react";
import RecommendedHotelItems from "./RecommendedHotelItems";
import data from "../../modules/data.json";

const RecommendedHotels = () => {
  return (
    <div className="w-screen my-6 flex flex-col items-center justify-center p-[17px] md:p-0 ">
      <div className=" mb-4 flex flex-col container">
        <h3 className="">هتل‌های پیشنهادی</h3>
        <div className="border-b mt-[39px] mb-8">
          <ul className="md:  flex">
            <li className="text-sm mx-4  border-b-2 z-30 border-blue-600 py-4 font-bold	inline-block">
              مشهد
            </li>
            <li className="text-sm md:mx-6 mx-3 py-4 inline-block">کیش</li>
            <li className="text-sm md:mx-6 mx-3 py-4 inline-block">تهران</li>
            <li className="text-sm md:mx-6 mx-3 py-4 inline-block">اصفهان</li>
            <li className="text-sm md:mx-6 mx-3 py-4 inline-block">شیراز</li>
          </ul>
        </div>
        <div className="flex overflow-x-auto justify-between">
          {data.recommendedHotels.map((item) => (
            <RecommendedHotelItems item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecommendedHotels;
