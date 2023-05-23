import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../_assets/images/logo/icon-blue.png";
import { logoutActionClient } from "../../features/client/authSliceClient";
import { useAppDispatch } from "../../features/hooks/hooks";
import { LinkMenu } from "./LinkMenu";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [user, setUser] = useState(true);
  const dispatch = useAppDispatch()

  const handleLogoutClient = () => {
    dispatch(logoutActionClient())
  }

  // function userToggle() {
  //   {
  //     if (user === true) {
  //       return (
  //         <LinkMenu
  //           routing="entrar"
  //           text="Fazer Login"
  //           icon="fa-solid fa-user"
  //           active={true}
  //         />
  //       );
  //     } else {
  //       return (
  //         <LinkMenu
  //           routing=""
  //           text="Sair"
  //           icon="fa-solid fa-right-from-bracket"
  //           active={true}
  //         />
  //       );
  //     }
  //   }
  // }

  function setMenu() {
    setToggleMenu((toggleMenu) => !toggleMenu);
  }

  const Menu = () => (
    <>
      <LinkMenu
        routing="consulta"
        text="Agendar Consulta"
        icon="fa-regular fa-calendar"
        active={true}
        setMenu={setMenu}
      />
      <LinkMenu
        routing=""
        text="Minhas Consultas"
        icon="fa-regular fa-note-sticky"
        active={false}
        setMenu={setMenu}
      />
      <LinkMenu
        routing="exames"
        text="Resultado dos Exames"
        icon="fa-solid fa-square-poll-horizontal"
        active={true}
        setMenu={setMenu}
      />
      <LinkMenu
        routing=""
        text="Prontuário"
        icon="fa-solid fa-folder-open"
        active={false}
        setMenu={setMenu}
      />
      <LinkMenu
        routing=""
        text="Laudo médico"
        icon="fa-solid fa-heart-pulse"
        active={false}
        setMenu={setMenu}
      />
      <LinkMenu
        routing=""
        text="Documentos"
        icon="fa-solid fa-file"
        active={false}
        setMenu={setMenu}
      />
    </>
  );

  return (
    <div className="flex lg:flex-col flex-row justify-between items-center fixed z-40 lg:max-w-[80px] w-full lg:h-full h-[30px] bg-white shadow-xl px-4 py-6 min-h-[20px] top-0">
      <Link to="/" className="lg:hidden block">
        <button
          className="flex cursor-pointer hover:scale-105 hover:shadow-blue-800/50 hover:text-blue-600 transition ease-in-out"
          type="button"
        >
          <i className="text-xl fa-solid fa-circle-chevron-left"></i>
        </button>
      </Link>{" "}
      <div className="flex flex-col lg:mx-auto justify-between items-center">
        <img src={Logo} alt="" className="w-[50px] lg:ml-0 ml-16" />
      </div>
      {/* Menu Mobile */}
      <div className="lg:hidden flex">
        {toggleMenu ? (
          <i
            className="fa-solid fa-xmark absolute mr-4 right-0 top-3 text-2xl text-white"
            color="#9333ea"
            onClick={() => setToggleMenu(false)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars absolute mr-4 right-0 top-3 text-2xl text-white"
            color="#9333ea"
            onClick={() => setToggleMenu(true)}
          ></i>
        )}
        {toggleMenu && (
          <div className="absolute top-16 right-[-4rem] w-full">
            <div className="bg-blue-500 p-8 w-4/5 rounded-xl gap-4 shadow-2xl">
              <div className="flex flex-col gap-4 mb-8">
                <Menu />
              </div>
              <Link to="entrar">
                <button
                  className="lg:hidden flex items-center justify-center gap-2 py-2 px-4 text-blue-600 bg-slate-200 w-full rounded-md shadow-lg hover:scale-105 shadow-blue-800/50 transition duration-[500ms] ease-in-out mb-4"
                  type="button"
                  onClick={() => setToggleMenu(false)}
                >
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>Fazer
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Menu Desktop */}
      <div className="lg:flex flex-col gap-8 hidden">
        <Menu />
      </div>
      <div className="lg:flex flex-col gap-4 hidden">
        <button
          className={
            "flex cursor-pointer hover:lg:scale-105 group hover:shadow-blue-800/50 hover:text-blue-800 transition ease-in-out"
          }
          onClick={handleLogoutClient}
          type="button"
        >
          <i className="fa-solid fa-right-from-bracket text-xl  text-blue-600"></i>
          <div className="flex justify-start lg:ml-0 ml-2 top-[0rem] lg:absolute overflow-hidden lg:max-w-[0px] group-hover:lg:max-w-[250px] group-hover:lg:min-w-[230px] rounded-lg lg:left-16">
            <span className="lg:bg-blue-600 lg:text-white lg:px-4 lg:scale-105 rounded-lg">
              Sair do sistema
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
