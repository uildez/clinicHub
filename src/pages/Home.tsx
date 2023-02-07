import React from "react";
import { Link } from "react-router-dom";
import img from "../_assets/images/doctor-pointing-out.png";

//Assets
import Logo from "../_assets/images/logo/logo-blue.png";

export const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-b from-blue-400 to-blue-500">
      <div className="flex flex-col items-center justify-center px-20 py-16 lg:w-2/4 w-full bg-slate-200 h-full">
        <h1 className="text-3xl font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-blue-500">
          Onde cuidamos da sua saúde com<span className="text-blue-800"> excelência</span>
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Oferecemos tratamentos personalizados e cuidados de qualidade com especialistas e tecnologia avançada.
        </p>
        <div className="flex items-center lg:flex-row flex-col w-full my-8 gap-4">
          <Link
            to="/portaldocolaborador/login"
            className="flex w-full justify-center font-bold hover:scale-105 hover:shadow-blue-800/50 bg-blue-600 hover:bg-blue-800 py-4 rounded-lg shadow-lg cursor-pointer transition ease-in-out"
          >
            Portal do Colaborador
          </Link>
          <Link
            to="/portaldopaciente"
            className="flex w-full justify-center font-bold hover:scale-105 hover:shadow-blue-800/50 bg-blue-600 hover:bg-blue-800 py-4 rounded-lg shadow-lg cursor-pointer transition ease-in-out"
          >
            Portal do Paciente{" "}
          </Link>
        </div>

        <img src={Logo} className="lg:w-2/6 w-2/4 mt-12" alt="Logotipo da Clinfec" />
      </div>

      <div className="flex justify-center lg:w-2/4 h-full text-white rounded-xl overflow-hidden">
        <div className="w-full relative lg:block hidden">
          <img
            src={img}
            className="h-full absolute bottom-0 right-0 object-cover"
            alt="Médica apontando para a esquerda"
          />
        </div>
      </div>
    </div>
  );
};
