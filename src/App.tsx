import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import NavigationData from "./navigationData";
const App: React.FC = () => {
  return (
    <div className=" px-12">
      <Header />
      <Navigation />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <nav className="box-border p-4 flex justify-between w-full items-center border ">
      <div className="w-[6.5rem] ">
        <img
          className="object-fill"
          alt="Airbnb logo"
          src="./assets/airbnb-logo.png"
        />
      </div>
      <div className="flex border p-2 px-6 rounded-3xl shadow-md justify-center space-x-3">
        <p>Anywhere</p>
        <p>Anyweek</p>

        <p className="text-slate-400">add guest</p>

        <div className="border rounded-full p-2 bg-red-400">
          <IoIosSearch />
        </div>
      </div>
      <div className="flex space-x-3 items-center justify-self-end">
        <p>Airbnb your home</p>
        <p>
          <CiGlobe />
        </p>
        <div className="flex row border shadow-md rounded-full w-16 h-10 items-center justify-around ">
          <div>
            <GiHamburgerMenu />
          </div>
          <div>
            <IoPersonCircleSharp />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navigation: React.FC = () => {
  return (
    <div className="flex  w-full ">
      <div className="w-[90%]">
        <SwipeIcons icons={NavigationData} />
      </div>

      <div className="w-[10%]">Filter icon</div>
    </div>
  );
};

//////////
interface IconData {
  id: Number;
  label: string;
  icon: React.ReactNode;
}
interface SwipeIconsProps {
  icons: IconData[];
}
const SwipeIcons: React.FC<SwipeIconsProps> = ({ icons }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const visibleIcons = icons.slice(currentIndex, currentIndex + 8);
  const handleSwipe = (direction: "left" | "right"): void => {
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + icons.length) % icons.length
        : (currentIndex + 1) % icons.length;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="flex  cursor-pointer">
      <div onClick={() => handleSwipe("left")}>&lt;</div>
      <div className="flex row">
        {visibleIcons.map((iconData) => (
          <div className="">
            <span className="">{iconData.icon}</span>
            <span className="text-sm ">{iconData.label}</span>
          </div>
        ))}
      </div>
      <div onClick={() => handleSwipe("right")}>&gt;</div>
    </div>
  );
};

export default App;
