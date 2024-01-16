import React from "react";

import { Header } from "./components/Header";
import { AirbnbContainer } from "./components/AirbnbContainer";
import { SlideIcon } from "./components/SlideIcon";
import Filter from "./components/SlideIcon";

const App: React.FC = () => {
  return (
    <div className="px-2 font-sans">
      <Header />
      <div className="flex flex-row">
        <div className="w-[85%] cursor-pointer ml-12 relative mt-3 mb-3">
          <SlideIcon />
        </div>
        <Filter />
      </div>

      <AirbnbContainer data={[]} />
    </div>
  );
};

export default App;
//make a customizeaable button just see the rating stars
//try to make the same to box modal may be  for practice
//we will make login
//favorite button on every photos
//footer
//when search button is clicked it gets bigger
//start another project also and switch between those
