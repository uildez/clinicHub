import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  toggleMenu: any;
  routing: string;
  icon: string;
  title: string;
  location: any;
}

export const LinkMenu = ({
  toggleMenu,
  routing,
  icon,
  title,
  location,
}: LinkProps) => {
  return (
    <Link
      to={routing}
      className={`flex items-center 
          ${toggleMenu ? "justify-left" : "justify-center"} px-4 gap-2 w-full 
          ${toggleMenu ? "w-full h-[45px]" : "max-w-[45px] h-[45px]"} 
          ${
            location.includes(routing)
              ? "bg-blue-600 scale-105"
              : "bg-gray-600 hover:bg-blue-600 hover:scale-105 hover:ring-1 ring-blue-600 ring-offset-2"
          } 
          min-h-[45px] rounded-2xl transition-all cursor-pointer overflow-hidden`}
    >
      <i className={`${icon} ${toggleMenu ? "min-w-[20px]" : ""}`}></i>
      <span
        className={`${
          toggleMenu
            ? "block opacity-100 transition-all duration-500"
            : "hidden opacity-0 transition-all duration-500"
        }`}
      >
        {title}
      </span>
    </Link>
  );
};
