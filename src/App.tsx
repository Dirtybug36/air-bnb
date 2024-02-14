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
import { useToggle } from "./components/customHook/useToggle";

const App: React.FC = () => {
  //shrink header on scroll
  const [scroll, setScroll] = useState<boolean>(false); //state for scroll

  const handleScroll = () => {
    const offset = window.scrollY;
    setScroll(offset > 150);
  };
  //open or close modal
  const { showModal, open, close } = useToggle();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  font-sans relative">
      <div className="fixed top-0 w-full bg-white z-20 mb-10 border border-r-0 border-l-0  lg:pr-6 lg:pl-10">
        <Toaster />
        <Header isScroll={scroll} onOpen={open} />
        {!scroll && <ExtraOnHeader />}

        <div className="lg:flex flex-row  md:flex md:flex-row sm:flex sm:flex-row  ">
          <div className="lg:w-[90%] xl:w-[90%] xl:mx-0 lg:mx-0 sm:w-[87%] md:w-[80%] md:ml-12 sm:ml-12  ml-12 cursor-pointer w-[87%]  relative my-3">
            <SlideIcon />
          </div>
          <div className="hidden xl:flex  lg:flex md:flex sm:hidden h-14 items-center">
            <Filter />
          </div>
        </div>
      </div>
      <div className="absolute m-auto  z-50">
        {showModal && <SignUp showModal={showModal} closeModal={close} />}
      </div>

      <AirbnbContainer />

      <Footer />
    </div>
  );
};
export default App;
