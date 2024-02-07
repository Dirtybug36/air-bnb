import React from "react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Button } from "../main/Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export const SignUp: React.FC = () => {
  const [phone, setPhone] = useState("+351");
  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col border-black   m-auto items-center bg-white  rounded-2xl inset-0 w-[40%] h-[80%] justify-center shadow-lg fixed z-50  p-8 ">
      <h1>Log in or Sign Up</h1>
      <form onClick={() => handleSumit}>
        <h3>Welcome to Airbnb</h3>
        <PhoneInput
          defaultCountry="portugal"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
        <input type="number" placeholder="Phone number" />
        <p>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.<span>Privacy Policy</span>{" "}
        </p>
        <Button>Continue</Button>
      </form>
      <p>or</p>
      <div className="m-auto items-center flex flex-col w-full gap-4">
        <Button>
          <IoLogoFacebook />
          Continue with Facebook
        </Button>{" "}
        <Button>
          <FaApple />
          Continue with Apple
        </Button>
        <Button>
          <FcGoogle />
          Continue with Google
        </Button>{" "}
        <Button>
          <MdOutlineMail /> Continue with Email
        </Button>
      </div>
    </div>
  );
};
