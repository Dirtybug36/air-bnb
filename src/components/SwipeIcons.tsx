import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { RiSoundModuleFill } from "react-icons/ri";

interface IconData {
  id: Number;
  label: string;
  icon: React.ReactNode;
}
interface SwipeIconsProps {
  icons: IconData[];
}

export const SwipeIcons: React.FC<SwipeIconsProps> = ({ icons }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const visibleIcons = icons.slice(currentIndex, currentIndex + 8);
  const isBeginning = currentIndex === 0;
  const isEnd = currentIndex + 8 >= icons.length;
  const handleSwipe = (direction: "left" | "right"): void => {
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + icons.length) % icons.length
        : (currentIndex + 1) % icons.length;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="cursor-pointer relative flex row">
      <div className="flex items-center overflow-hidden transition-transform ease-in-out duration-300">
        {!isBeginning && (
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4"
            onClick={() => handleSwipe("left")}
          >
            <IoIosArrowDropleft size={26} />
          </div>
        )}
        {visibleIcons.map((iconData) => (
          <div key={iconData.label} className="flex items-center mx-8">
            <span className="">{iconData.icon}</span>
            <span className="text-sm ">{iconData.label}</span>
          </div>
        ))}
        {!isEnd && (
          <div onClick={() => handleSwipe("right")}>
            <IoIosArrowDropright size={26} />
          </div>
        )}
      </div>
      <div className="w-[10%] px-6 flex row border rounded-xl items-center justify-center ">
        <span>
          <RiSoundModuleFill size={26} />
        </span>
        <span>Filters</span>
      </div>
    </div>
  );
};
