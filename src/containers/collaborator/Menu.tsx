import { useState } from "react";
import Logo from "../../assets/images/logo/logo-blue.png";
import { LinkMenu } from "../../components/collaborator/LinkMenu";

import { useLocation } from "react-router-dom";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`lg:flex flex-col lg:p-4 items-center ${
        toggleMenu ? "lg:w-[350px]" : "lg:w-[100px]"
      } bg-slate-100 relative transition-all ease-in-out duration-500 hidden shadow-2xl`}
    >
      <div className="lg:flex min-h-[60px] hidden">
        {toggleMenu ? (
          <i
            className="fa-solid fa-xmark flex items-center justify-center absolute -right-16 bg-blue-600 hover:bg-blue-800 py-2 px-3 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white"
            color="#fff"
            onClick={() => setToggleMenu(false)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars flex items-center justify-center absolute -right-16 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white"
            color="#fff"
            onClick={() => setToggleMenu(true)}
          ></i>
        )}
        <img
          src={Logo}
          alt=""
          className={`block lg:ml-0 ml-16 ${
            toggleMenu
              ? "max-w-full max-h-[55px]"
              : "max-w-[55px] object-cover object-left"
          }`}
        />
      </div>
      <div className="lg:flex flex-col items-center w-full mt-20 gap-4 hidden">
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
      </div>
    </div>
  );
};
