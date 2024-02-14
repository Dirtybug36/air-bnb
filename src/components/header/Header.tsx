import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { DropDown } from "../modal/DropDown";
import { useToggle } from "../customHook/useToggle";

interface Props {
  isScroll: boolean;

  onOpen: () => void;
}

export const Header: React.FC<Props> = ({ isScroll, onOpen }) => {
  const { showModal, toggle } = useToggle();

  //open modal and close dropdown at a same time
  const openModal = () => {
    onOpen();
    toggle();
  };
  return (
    <nav
      className={
        "flex justify-between  py-4 items-center   md:m-auto sm:m-auto  "
      }
    >
      {/* left */}
      <div className="lg:w-[6.5rem] lg:justify-start md:hidden sm:hidden lg:block hidden">
        <img
          className="object-fill"
          alt="Airbnb logo"
          src="./assets/airbnb-logo.png"
        />
      </div>
      {/* //middle */}
      {isScroll ? (
        <div className="lg:flex md:flex ml-10 sm:flex flex border p-2 lg:ml-6  px-6 rounded-3xl shadow-md hover:shadow-lg space-x-3  cursor-pointer ">
          <p>Anywhere</p>
          {/* vertical line */}
          <p className="border border-r-1 h-7" />
          <p>Anyweek</p>
          <p className="text-slate-400 hidden">add guest</p>

          <div className="border rounded-full p-2 bg-red-500 ">
            <IoIosSearch className="text-white md:flex md:text-black  " />
          </div>
        </div>
      ) : (
        <div className=" cursor-pointer flex flex-col ml-12 ">
          <div className="flex flex-row justify-center gap-5 ">
            <p className="font-bold">Stays</p>

            <p className="text-slate-400">Experience</p>
            <p className="text-slate-400 lg:flex 2xl:flex md:flex sm:flex hidden">
              Online Experience
            </p>
          </div>
        </div>
      )}

      {/* right */}
      <div className="flex  items-center gap-5 justify-between  ">
        <div className="flex row items-center  max-[920px]:hidden ">
          <p className="px-3  font-bold">Airbnb your home</p>
          <p>
            <CiGlobe size={24} />
          </p>
        </div>

        <div
          className="flex row border hover:shadow-md rounded-full   w-24 h-16  items-center justify-around cursor-pointer "
          onClick={toggle}
        >
          <div>
            <GiHamburgerMenu size={20} />
          </div>
          <div>
            <IoPersonCircleSharp size={42} />
          </div>
        </div>
        <div className="mt-7">
          {showModal && <DropDown onOpen={openModal} />}
        </div>
      </div>
    </nav>
  );
};
