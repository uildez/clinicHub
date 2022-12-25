import React from "react";
import { Outlet } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";

export const Home = () => {
  return (
    <div className="w-full mt-8">
      <ButtonBack />
      <Outlet />
    </div>
  );
};
