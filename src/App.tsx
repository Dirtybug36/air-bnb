import React from "react";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/header/Header";
import { AirbnbContainer } from "./components/main/AirbnbContainer";
import { SlideIcon } from "./components/header/SlideIcon";
import Filter from "./components/header/Filter";
import { ExtraOnHeader } from "./components/header/ExtraOnHeader";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { SignUp } from "./components/modal/SignUp";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

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
    <div className="  font-sans relative">
      <div className="fixed top-0 w-full bg-white z-20 mb-10 border border-r-0 border-l-0 lg:px-12">
        <Toaster />
        <Header isScroll={scroll} onHandleModal={modalHandler} />
        {!scroll && <ExtraOnHeader />}

        <div className="lg:flex flex-row  md:flex md:flex-row sm:flex sm:flex-row  ">
          <div className="lg:w-[92%] xl:w-[93%] xl:mx-0 lg:mx-0 sm:w-[87%] md:w-[76%] md:ml-12 sm:ml-12  ml-12 cursor-pointer w-[87%]  relative my-3">
            <SlideIcon />
          </div>
          <div className="hidden xl:flex  lg:flex md:flex sm:hidden h-14 items-center">
            <Filter />
          </div>
        </div>
      </div>
      <div className="absolute m-auto  z-50">{showModal && <SignUp />}</div>
      <AirbnbContainer />
      <Footer />
    </div>
  );
};

export default App;

//we will make login

//footer
//when search button is clicked it gets bigger
//start another project also and switch between those
//fetch from api and adjust the photos
