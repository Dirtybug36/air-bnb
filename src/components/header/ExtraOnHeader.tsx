import React from "react";
import { IoIosSearch } from "react-icons/io";

export const ExtraOnHeader: React.FC = () => {
  return (
    <>
      <div className="flex  border py-2   rounded-full shadow-md hover:shadow-lg  items-center  justify-around   w-[65%] m-auto ">
        <p>
          <p className="  font-bold">where</p>
          <p className="text-slate-400">Search destination</p>
        </p>

        <p>
          <p className="  font-bold">Check in</p>
          <p className="text-slate-400">Add dates</p>
        </p>

        <p>
          {" "}
          <p className="  font-bold">Check out</p>
          <p className="text-slate-400">Add dates</p>
        </p>
        <p>
          {" "}
          <p className="  font-bold">who</p>
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
