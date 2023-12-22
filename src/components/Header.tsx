import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";

export const Header: React.FC = () => {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };
  return (
    <nav className="flex justify-between items-center border border-r-0 border-l-0 pb-4 pt-4">
      {/* left */}
      <div className="w-[6.5rem] justify-start max-[920px]:hidden">
        <img
          className="object-fill"
          alt="Airbnb logo"
          src="./assets/airbnb-logo.png"
        />
      </div>
      {/* //middle */}
      <div className="lg:flex md:flex border p-2 px-6 rounded-3xl shadow-md hover:shadow-lg space-x-3 max-[920px]:flex max-[920px]:w-full max-[920px]:justify-start max-[920px]:mr-16 ">
        <p>Anywhere</p>

        <p>Anyweek</p>

        <p className="text-slate-400">add guest</p>

        <div className="border rounded-full p-2 bg-red-500 ">
          <IoIosSearch className="text-white max-[920px]:flex max-[920px]:text-black  " />
        </div>
      </div>
      {/* right */}
      <div className="flex  items-center mr-7  ">
        <div className="flex row items-center  max-[920px]:hidden ">
          <p className="px-2 font-medium">Airbnb your home</p>
          <p>
            <CiGlobe size={24} />
          </p>
        </div>

        <div
          onClick={toggleDropDown}
          className="flex row border hover:shadow-md rounded-full px-4 py-3 items-center justify-between "
        >
          <div>
            <GiHamburgerMenu size={20} />
          </div>
          <div>
            <IoPersonCircleSharp size={42} />
          </div>
        </div>
        <div className="mt-7">{dropDown && <DropDown />}</div>
      </div>
    </nav>
  );
};
//hove garda shadow, icon alli thulo ani voli mobile resposive just header
const DropDown: React.FC = () => {
  return (
    <div className="relative inline-block text-left ">
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a
            href="/edit"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-0"
          >
            Sign Up
          </a>
          <a
            href="/Duplicate"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-1"
          >
            Login
          </a>
        </div>
        <div className="py-1" role="none">
          <a
            href="/Archive"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-2"
          >
            Gift Cards
          </a>
          <a
            href="/Move"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-3"
          >
            Airbnb your home
          </a>
        </div>
        <div className="py-1" role="none">
          <a
            href="/Share"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-4"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};
