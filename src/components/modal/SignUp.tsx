import React from "react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Button } from "../main/Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
export const SignUp: React.FC = () => {
  const [phone, setPhone] = useState("+351");
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {/* background */}
      <div
        className="
        justify-center 
        items-center 
        flex 
        fixed 
        inset-0 
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-800/70
      "
      >
        {/* modal container */}
        <div className=" relative   w-full  md:w-4/6  lg:w-3/  xl:w-2/5  my-6  mx-auto h-full overflow-scroll    lg:h-auto  md:h-auto ">
          {/*content*/}
          <div className="">
            <div className="  translate   lg:h-auto md:h-auto border-0  rounded-lg  shadow-lg  relative   flex  flex-col  overflow-y-auto  w-full  bg-white outline-none  focus:outline-none">
              {/*header*/}
              <div className=" flex   items-center  p-6  bg-red-50  rounded-t  justify-center  relative border-[1px]">
                <button
                  className=" p-1 border-0 hover:opacity-70 transition absolute left-5"
                  title="Close"
                  onClick={handleClose}
                >
                  <IoClose size={25} />
                </button>
                <div className="text-lg font-semibold">Log in or Sign Up</div>
              </div>

              {/*body*/}
              <div className="relative p-6 flex-auto">
                <h1 className=" font-bold text-2xl">Welcome to Airbnb</h1>
                <div>
                  <PhoneInput
                    defaultCountry="portugal"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="Phone number"
                    className=" outline-none"
                  />
                </div>
                <p className=" text-sm opacity-60">
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply.<span>Privacy Policy</span>{" "}
                </p>
              </div>

              {/*footer*/}
              <div className=" flex  flex-col items-center  gap-4  w-full ">
                <Button>Continue</Button>
                <p>or</p>
                <div>
                  <IoLogoFacebook />
                  <Button>Continue with Facebook</Button>{" "}
                </div>
                <div>
                  <FaApple />
                  <Button>Continue with Apple</Button>
                </div>
                <div>
                  <FcGoogle />
                  <Button>Continue with Google</Button>{" "}
                </div>
                <div>
                  <MdOutlineMail />
                  <Button>Continue with Email</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// `

//                                             duration-300
//                                             h-full

//                                             ${
//                                               showModal
//                                                 ? "translate-y-0"
//                                                 : "translate-y-full"
//                                             }
//                                             ${
//                                               showModal
//                                                 ? "opacity-100"
//                                                 : "opacity-0"
//                                             }
//                                           `
