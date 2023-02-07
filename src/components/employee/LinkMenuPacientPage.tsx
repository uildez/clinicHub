import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  routing: string;
  icon: string;
  title: string;
  location: any;
}

export const LinkMenuPacientPage = ({
  routing,
  icon,
  title,
  location,
}: LinkProps) => {
  return (
    <Link
      to={routing}
      className={`flex items-center gap-2 md:mx-0 mx-4
          ${
            location.includes(routing)
              ? "cursor-pointer text-blue-600"
              : "cursor-pointer hover:text-blue-600"
          }`}
    >
      <i className={`${icon}`}></i>
      <span>{title}</span>
    </Link>
  );
};
