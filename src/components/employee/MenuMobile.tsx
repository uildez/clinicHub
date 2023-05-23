import { useState } from "react";
import Logored from "../../_assets/images/logo/logo-blue.png";
import { LinkMenu } from "./LinkMenu";

import { useLocation } from "react-router-dom";
import { logoutAction } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../features/hooks/hooks";

export const MenuMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <>
      <div className="lg:hidden flex py-4 px-4 w-full items-center justify-start border-b-2 border-[#EFF1F1]">
        <i
          className="fa-solid fa-bars flex items-center justify-center left-4 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white lg:!hidden"
          color="#fff"
          onClick={() => setToggleMenu(true)}
        ></i>

        <img
          src={Logored}
          alt=""
          className="w-[160px] mx-auto lg:hidden"
        />

        <div className="relative">
          <i className="fa-solid fa-bell text-blue-600 text-2xl p-2 rounded-lg cursor-pointer transition-all"></i>
          <span className="flex items-center justify-center text-xs font-semibold top-0 right-0 border-2 border-white absolute bg-blue-600 text-white w-[20px] h-[20px] rounded-full">0</span>
        </div>
      </div>
      
      <div
        className=
        {`flex flex-col items-center absolute h-screen pb-8 bg-slate-100
          transition-all ease-in-out lg:hidden z-50 shadow-2xl
        ${toggleMenu ? "w-3/5 px-4 left-0" : "-left-60"}`
        }
      >
        <div className="w-full">
          <i
            className={`${toggleMenu ? "relative left-0" : "hidden -left-20"
              } fa-solid fa-xmark flex items-center justify-center relative bg-blue-600 hover:bg-blue-800 py-[10px] px-3 rounded-lg cursor-pointer transition-all top-4 text-2xl text-white`}
            color="#fff"
            onClick={() => setToggleMenu(false)}
          ></i>
        </div>

        <div
          className={`${toggleMenu ? "flex" : "hidden"} relative flex-col items-center w-full mt-20 gap-4`}
        >
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

        <div className="flex flex-col bottom-10 absolute gap-2">
          <button className="flex items-center justify-center py-4 w-full gap-4 text-sm px-4 bg-blue-600 rounded-lg cursor-pointer text-white hover:bg-blue-800 transition-all">
            <i className="fa-solid fa-gears"></i>
            Configurações
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center py-4 w-full gap-4 text-sm px-4 bg-blue-600 rounded-lg cursor-pointer text-white hover:bg-blue-800 transition-all"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Sair
          </button>
        </div>
      </div>
    </>
  );
};
