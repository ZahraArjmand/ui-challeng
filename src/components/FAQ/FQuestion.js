import React from "react";
import FQestionItem from "./FQuestionItem";
import data from "../../modules/data.json";
const FQestion = () => {
  return (
    <div className="w-screen mt-6 flex flex-col items-center justify-center my-6 p-[17px] md:p-0 ">
      <div className="container mb-4">
        <h3 className="">پرسش‌های متداول</h3>
        <div className="bg-white my-8">
          {data.popularQuestions.map((item) => (
            <FQestionItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FQestion;
