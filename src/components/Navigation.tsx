import React from "react";
import NavigationData from "./navigationData";
import { SwipeIcons } from "./SwipeIcons";

export const Navigation: React.FC = () => {
  return (
    <div className="flex justify-evenly ">
      <SwipeIcons icons={NavigationData} />
    </div>
  );
};
