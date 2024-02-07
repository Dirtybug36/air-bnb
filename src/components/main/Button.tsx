import React from "react";
interface ButtonProps {
  children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="border w-[80%] m-auto ">{children}</button>;
};
