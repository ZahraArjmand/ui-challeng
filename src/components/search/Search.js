import React from "react";
import background from "../../assets/images/Group15664.png";
import reverse from "../../assets/images/bold-direction.png";
const Search = () => {
  //   const divStyle = {
  //     backgroundImage: `url(${background})`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",

  //     // height: "200px", // Set the height or adjust as needed
  //   };
  return (
    <div className=" md:flex w-screen header-container  md:items-center md:justify-center mb-6">
      <div className="md:m-auto bg-white z-50  md:w-3/4 md:h-2/5 w-full md:p-0 container">
        <div className="border-b">
          <ul className="">
            <li className="text-sm mx-4  border-b-2 z-30 border-blue-600 py-4 font-bold	inline-block">
              پرواز داخلی
            </li>
            <li className="text-sm mx-4 py-4 inline-block">پرواز خارجی</li>
            <li className="text-sm mx-4 -3  py-4 inline-block">هتل</li>
            <li className="text-sm mx-4  py-4 inline-block">بیمه</li>
          </ul>
        </div>
        <div className="flex">
          <div class="flex items-center m-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-700 focuse:border-3 "
            />
            <label for="default-radio-1" class="text-sm  text-[#161616] mr-3">
              یک طرفه
            </label>
          </div>
          <div class="flex items-center m-4">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="default-radio-2" class="text-sm  text-[#161616] mr-3">
              رفت و برگشت
            </label>
          </div>
        </div>
        <div className="flex m-4 md:flex-row flex-col md:justify-between">
          <div className="md:flex relative">
            <div class="relative">
              <label
                for="inputField"
                class="absolute md:top-[-8px] top-[0] right-4 bg-white px-1 text-xsm text-[#6f6f6f]"
              >
                مبدا
              </label>
              <input
                type="text"
                id="inputField"
                class="border border-gray-300 rounded px-3 py-2 w-full md:my-0 my-[11.5px] text-sm"
                value="تهران (THR)"
              />
            </div>
            <div
              className="md:flex md:static md:items-center md:justify-center bg-[#eeeeee] rounded absolute left-0 top-11 z-30 md:mx-2"
              style={{ width: "40px", height: "40px" }}
            >
              <img src={reverse} alt="" className="m-2" />
            </div>
            <div class="relative">
              <label
                for="inputField"
                class="absolute md:top-[-8px] top-[0] right-4 bg-white px-1 text-xsm text-[#6f6f6f]"
              >
                مقصد
              </label>
              <input
                type="text"
                id="inputField"
                class="border border-gray-300 rounded px-3 py-2  w-full md:my-0 my-[11.5px] text-sm"
                value="مشهد (MHD)"
              />
            </div>
          </div>
          <div class="relative">
            <label
              for="inputField"
              class="absolute md:top-[-8px] top-[0] right-4 bg-white px-1 text-xsm text-[#6f6f6f]"
            >
              تاریخ رفت
            </label>
            <input
              type="text"
              id="inputField"
              class="border border-gray-300 rounded px-3 py-2 md:mx-3 md:my-0 my-[11.5px] md:w-full  w-1/2 text-sm "
              value="۱۴۰۰/۰۲/۱۲"
            />
          </div>
          <div class="relative">
            <label
              for="inputField"
              class="absolute md:top-[-8px] top-[0] right-4 bg-white px-1 text-xsm text-[#6f6f6f] "
            >
              مسافران و کلاس
            </label>
            <input
              type="text"
              id="inputField"
              class="border border-gray-300 rounded px-3 py-2 md:ml-3 md:my-0 my-[11.5px] w-full text-sm"
              value="بزرگسال، ۱ کودک، ۱ نوزاد، اکونومی"
            />
          </div>
          <div>
            <button className="btn text-white bg-[#ff7913] rounded px-8 py-2 w-full md:my-0 my-4">
              جستجو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
