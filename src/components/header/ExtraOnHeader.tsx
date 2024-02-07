import React from "react";
import { IoIosSearch } from "react-icons/io";

export const ExtraOnHeader: React.FC = () => {
  return (
    <>
      <div className="flex  border p-3    rounded-full shadow-md hover:shadow-lg  items-center  justify-around   sm:w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] m-auto w-[85%]  font-thin mb-4">
        <p className="2xl:flex xl:flex md:flex lg:flex sm:flex 2xl:flex-col xl:flex-col md:flex-col sm:flex-col hidden">
          <p className="font-bold">Where</p>
          <p className="text-slate-400">Search destination</p>
        </p>
        {/* vertical line */}
        <p className="border border-r-1 h-12 2xl:flex xl:flex md:flex lg:flex sm:flex hidden" />
        <p>
          <p className="  font-bold">Check in</p>
          <p className="text-slate-400">Add dates</p>
        </p>
        {/* vertical line */}
        <p className="border border-r-1 h-12" />
        <p>
          {" "}
          <p className="  font-bold">Check out</p>
          <p className="text-slate-400">Add dates</p>
        </p>
        {/* vertical line */}
        <p className="border border-r-1 h-12" />
        <p>
          {" "}
          <p className="  font-bold">Who</p>
          <p className="text-slate-400">Add guests</p>
        </p>

        <div className="border rounded-full p-4 bg-red-500 ">
          <IoIosSearch
            size={20}
            className="text-white max-[920px]:flex max-[920px]:text-black  "
          />
        </div>
      </div>
    </>
  );
};
