import React from "react";

const SaleBadge = () => {
  return (
    <div
      className="text-white bg-red-500 text-xxs w-16  text-center py-1 rounded  top-[42px] block"
      style={{ transform: "rotate(90deg)" }}
    >
      <p>فروش ویژه</p>
    </div>
  );
};

export default SaleBadge;
