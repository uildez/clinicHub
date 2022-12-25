import React from "react";
import { Link } from "react-router-dom";

export const ButtonAppoiment = () => {
  return (
    <Link
      to="/portaldopaciente"
      className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 cursor-pointer rounded-md shadow-lg hover:scale-105 hover:shadow-blue-800/50 transition duration-[500ms] ease-in-out"
    >
      Marque sua Consulta
    </Link>
  );
};
