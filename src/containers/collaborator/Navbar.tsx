import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { logoutAction } from "../../features/auth/authSlice";

export const Navbar = () => {
  const user = useAppSelector((state) => state.rootReducer.auth.user)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
  }

  return (
    <div className="lg:flex justify-between items-center ml-12 hidden">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Buscar Paciente
        </label>
        <div className="relative flex justify-start top-0">
          <input
            type="search"
            id="default-search"
            className="block px-4 min-h-[40px] rounded-lg lg:w-[350px] w-full text-sm text-gray-900 bg-slate-200 border border-gray-300 outline-none focus:outline-blue-500 ring-0 outline focus:outline-2 outline-offset-2"
            placeholder="Buscar paciente"
            required
          />
          <button
            className="text-white relative right-10 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none outline-none focus:ring-blue-600 font-medium rounded-lg text-sm w-[40px] h-[40px] transition-all"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>

      <div className="flex gap-6 items-center">
        <span className="text-sm text-blue-600">
          Bem vindo ao ClinicHub, {user?.name}
        </span>
        <Link to="meu-perfil">
          <i className="fa-solid fa-gears text-2xl text-blue-600 hover:text-blue-800 transition-all"></i>
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center justify-center h-[40px] text-sm px-4 bg-blue-600 rounded-lg cursor-pointer text-white hover:bg-blue-800 transition-all"
        >
          Sair do Sistema
        </button>
      </div>
    </div>
  );
};
