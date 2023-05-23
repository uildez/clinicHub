import { useState } from "react";
import { useLocation } from "react-router-dom";
import { logoutAction } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../features/hooks/hooks";
import { LinkMenu } from "../employee/LinkMenu";

import Logo from "../../_assets/images/logo/logo-blue.png";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <div
      className={`lg:flex flex-col h-screen py-4 items-center justify-between border-r-2 border-[#EFF1F1] relative transition-all ease-in-out duration-500 hidden
      ${toggleMenu ? "lg:w-[350px]" : "lg:w-[100px]"}`}
    >
      <div className="lg:flex min-h-[60px] hidden z-30">
        {toggleMenu ? (
          <i
            className="fa-solid fa-xmark flex items-center justify-center absolute -right-[70px] top-[18px] bg-blue-600 hover:bg-blue-800 py-2 px-[10px] rounded-lg cursor-pointer transition-all text-2xl text-white"
            color="#fff"
            onClick={() => setToggleMenu(false)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars flex items-center justify-center absolute -right-[70px] top-[18px] bg-blue-600 hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition-all text-2xl"
            color="#fff"
            onClick={() => setToggleMenu(true)}
          ></i>
        )}
        <img
          src={Logo}
          alt=""
          className={`block lg:ml-0 ml-16 ${toggleMenu
            ? "max-w-full max-h-[55px]"
            : "max-w-[55px] object-cover object-left"
            }`}
        />
      </div>
      <div className="lg:flex flex-col gap-2 text-sm justify-center w-full hidden overflow-hidden">
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance', 'finance']}
          routing="dashboard"
          icon="fa-solid fa-house"
          title="Dashboard"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance']}
          routing="agendamento"
          icon="fa-solid fa-calendar"
          title="Agendamento"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance', 'finance']}
          routing="pacientes"
          icon="fa-solid fa-users"
          title="Pacientes"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'finance']}
          routing="funcionarios"
          icon="fa-solid fa-people-group"
          title="Colaboradores"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'finance']}
          routing="convenio"
          icon="fa-solid fa-handshake"
          title="Convênios"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance']}
          routing="equipamentos"
          icon="fa-solid fa-stethoscope"
          title="Equipamentos"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance']}
          routing="servicos"
          icon="fa-solid fa-syringe"
          title="Serviços"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance']}
          routing="estoque"
          icon="fa-solid fa-box"
          title="Estoque"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance']}
          routing="guias-atendimento"
          icon="fa-solid fa-file-lines"
          title="Guias de Atendimento"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'doctor', 'attendance']}
          routing="receituario"
          icon="fa-regular fa-paste"
          title="Receituário"
        />
        <LinkMenu
          toggleMenu={toggleMenu}
          location={location.pathname}
          userTypeAllowed={['admin', 'finance']}
          routing="financeiro"
          icon="fa-solid fa-dollar-sign"
          title="Financeiro"
        />
      </div>
      <button
        onClick={handleLogout}
        className={`flex items-center justify-center group px-5 border-blue-600 w-[80%] border-2
          ${toggleMenu ? "justify-left" : "justify-center"} gap-2 w-full 
          ${toggleMenu ? "" : "max-w-[45px]"}  
          rounded-lg min-h-[45px] bg-blue-600 hover:bg-white transition-all cursor-pointer`}
      >
        <i className={`fa-solid fa-arrow-right-from-bracket group-hover:text-blue-600 text-white transition-all duration-500`}></i>
        <span
          className={`${toggleMenu
            ? "block opacity-100 transition-all duration-500"
            : "hidden opacity-0 transition-all duration-500"
            } group-hover:text-blue-600 text-sm`}
        >
          Sair
        </span>
      </button>
    </div>
  );
};
