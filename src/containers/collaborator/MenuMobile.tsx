import React, { useState } from "react";
import Logored from "../../assets/images/logo/logo-blue.png";
import { LinkMenu } from "../../components/collaborator/LinkMenu";

import { useLocation } from "react-router-dom";

export const MenuMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  return (
    <div className="lg:hidden flex">
      {/* Mobile Menu */}
      <i
        className="fa-solid fa-bars flex items-center justify-center absolute left-4 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white lg:!hidden"
        color="#fff"
        onClick={() => setToggleMenu(true)}
      ></i>

      <img
        src={Logored}
        alt=""
        className="absolute w-[160px] top-2 right-2/4 translate-x-1/2 mx-auto lg:hidden"
      />

      <i className="fa-solid fa-right-from-bracket flex items-center justify-center absolute right-4 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white lg:!hidden"></i>

      <div
        className={`flex flex-col items-center h-full ${
          toggleMenu ? "w-3/5 px-4" : "w-[0px]"
        } bg-slate-100 absolute transition-all ease-in-out lg:hidden z-50 shadow-2xl`}
      >
        <div className="w-full">
          <i
            className={`${
              toggleMenu ? "relative left-0" : "hidden -left-10"
            } fa-solid fa-xmark flex items-center justify-center relative bg-blue-600 hover:bg-blue-800 py-2 px-3 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white`}
            color="#fff"
            onClick={() => setToggleMenu(false)}
          ></i>
        </div>

        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } relative flex-col items-center w-full mt-20 gap-4`}
        >
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="agendamento"
            icon="fa-solid fa-calendar"
            title="Agendamento"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="pacientes"
            icon="fa-solid fa-users"
            title="Pacientes"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="funcionarios"
            icon="fa-solid fa-people-group"
            title="Colaboradores"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="servicos-convenio"
            icon="fa-solid fa-handshake"
            title="Convênios"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="equipamentos"
            icon="fa-solid fa-stethoscope"
            title="Equipamentos"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="servicos"
            icon="fa-solid fa-syringe"
            title="Serviços"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="estoque"
            icon="fa-solid fa-box"
            title="Estoque"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="guias-atendimento"
            icon="fa-solid fa-file-lines"
            title="Guias de Atendimento"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="receituario"
            icon="fa-regular fa-paste"
            title="Receituário"
          />
          <LinkMenu
            toggleMenu={toggleMenu}
            location={location.pathname}
            routing="financeiro"
            icon="fa-solid fa-dollar-sign"
            title="Financeiro"
          />
          <button className="flex absolute -bottom-40 items-center justify-center py-4 w-full mt-20 gap-4 text-sm px-4 bg-blue-600 rounded-lg cursor-pointer text-white hover:bg-blue-800 transition-all">
            <i className="fa-solid fa-gears"></i>
            Configurações
          </button>
        </div>
      </div>
    </div>
  );
};
