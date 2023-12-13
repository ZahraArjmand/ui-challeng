import React from "react";
import data from "../../modules/data.json";
import RecommendFlightItem from "./RecommendFlightItem";
const RecommendFlights = () => {
  return (
    <div className="w-screen my-6 flex flex-col items-center justify-center p-[17px] md:p-0 ">
      <div className="container mb-4">
        <h3 className="">پروازهای پیشنهادی</h3>
        <div class="md:grid md:grid-cols-3 md:gap-4 mt-8 ">
          {data.recommendedFlights.map((item) => (
            <RecommendFlightItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecommendFlights;
