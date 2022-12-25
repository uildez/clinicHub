import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/doctor-pointing-out.png";

//Assets
import Logo from "../assets/images/logo/logo-blue.png";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-b from-blue-400 to-blue-500">
      <div className="flex lg:flex-row flex-col justify-center lg:w-3/5 lg:h-3/5 h-2/5 w-5/6 bg-slate-200 text-white rounded-xl overflow-hidden">
        <div className="flex flex-col lg:w-2/4 justify-between h-full lg:px-8 lg:py-8 py-8 px-6">
          <img src={Logo} className="w-2/4 mx-auto" alt="Logotipo da Clinfec" />
          <div className="flex items-center flex-col gap-4">
            <Link
              to="/portaldocolaborador/login"
              className="cursor-pointer w-full text-center hover:scale-105 group hover:shadow-blue-800/50 bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg shadow-lg transition ease-in-out"
            >
              Portal do Colaborador
            </Link>
            <Link
              to="/portaldopaciente"
              className="cursor-pointer w-full text-center hover:scale-105 group hover:shadow-blue-800/50 bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg shadow-lg transition ease-in-out"
            >
              Portal do Paciente{" "}
            </Link>
          </div>
          <h2 className="text-sm mx-auto text-blue-600">
            Todos os direitos reservados
          </h2>
        </div>
        <div className="w-2/4 relative lg:block hidden">
          <img
            src={img}
            className="h-full absolute bottom-0 right-0"
            alt="Médica apontando para a esquerda"
          />
        </div>
      </div>
    </div>
  );
};
