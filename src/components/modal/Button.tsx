import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};
