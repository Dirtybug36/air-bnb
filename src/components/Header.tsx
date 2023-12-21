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
    //left
    <nav className="box-border p-4  flex justify-between items-center border ">
      <div className="w-[6.5rem] justify-start">
        <img
          className="object-fill"
          alt="Airbnb logo"
          src="./assets/airbnb-logo.png"
        />
      </div>
      {/* //middle */}
      <div className="flex border p-2 px-6 rounded-3xl shadow-md  space-x-3">
        <p>Anywhere</p>
        <p>Anyweek</p>

        <p className="text-slate-400">add guest</p>

        <div className="border rounded-full p-2 bg-red-400">
          <IoIosSearch className="text-white" />
        </div>
      </div>
      {/* right */}
      <div className="flex space-x-3 items-center ">
        <p>Airbnb your home</p>
        <p>
          <CiGlobe />
        </p>

        {/* <div
          onClick={() => toggleDropDown}
          className="flex row border shadow-md rounded-full w-16 h-10 items-center justify-around "
        >
          <div>
            <GiHamburgerMenu />
          </div>
          <div>
            <IoPersonCircleSharp />
          </div>
        </div> */}

        <div
          onClick={toggleDropDown}
          className="flex row border shadow-md rounded-full w-16 h-10 items-center justify-around "
        >
          <div>
            <GiHamburgerMenu />
          </div>
          <div>
            <IoPersonCircleSharp />
          </div>
        </div>
        <div className=" mt-7">{dropDown && <DropDown />}</div>
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
