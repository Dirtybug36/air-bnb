import React from "react";

import { Header } from "./components/header/Header";
import { AirbnbContainer } from "./components/main/AirbnbContainer";
import { SlideIcon } from "./components/header/SlideIcon";
import Filter from "./components/header/Filter";
import { ExtraOnHeader } from "./components/header/ExtraOnHeader";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  // const toggleDropDown = () => {
  //   setDropDown((prevState) => !prevState);
  // };
  //shrink header on scroll
  const [scroll, setScroll] = useState<boolean>(false); //state for scroll

  const handleScroll = () => {
    const offset = window.scrollY;
    setScroll(offset > 150);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  font-sans ">
      <div className="fixed top-0 w-full bg-white z-20 mb-10 border border-r-0 border-l-0 lg:px-12">
        <Header isScroll={scroll} />
        {!scroll && <ExtraOnHeader />}

        <div className="lg:flex flex-row  md:flex md:flex-row sm:flex sm:flex-row  ">
          <div className="lg:w-[93%] xl:w-[93%] xl:mx-0 lg:mx-0 sm:w-[85%] md:w-[80%] md:ml-12 sm:ml-12  ml-12 cursor-pointer w-[50]  relative my-3">
            <SlideIcon />
          </div>
          <div className="hidden xl:flex  lg:flex md:flex sm:hidden ">
            <Filter />
          </div>
        </div>
      </div>

      <AirbnbContainer />
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
