import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../features/hooks/hooks";

export const Navbar = () => {
  const user = useAppSelector((state) => state.rootReducer.auth.user)
  const location = useLocation();

  const path = location.pathname.split("portaldocolaborador/")
  const title = path[1]
  const pathUser = title[0].toUpperCase() + title.substring(1);

  return (
    <div className="lg:flex justify-between items-center border-b-2 border-[#EFF1F1] bg-white py-4 px-8 hidden z-20">
      <h2 className="text-blue-600 font-semibold ml-16">
        {pathUser}
      </h2>
      <div className="flex items-center gap-8">
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
              className="text-white absolute right-0 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none outline-none focus:ring-blue-600 font-medium rounded-lg text-sm w-[40px] h-[40px] transition-all"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>

        <span className="relative">
          <i className="fa-solid fa-bell text-gray-400 text-2xl p-2 rounded-lg cursor-pointer transition-all top-4"></i>
          <span className="flex items-center justify-center text-xs font-semibold top-0 right-0 border-2 border-white absolute bg-blue-600 text-white w-[20px] h-[20px] rounded-full">0</span>
        </span>

        <div className="flex gap-4">
          <img
            className="max-h-[45px] border-blue-600 border-2 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClCC2sTN0JYMZx12xcEgb5lELVfcJbTWAgmypCgB_fhJ6_VSx_fmrojdUj48pa7G5aYY&usqp=CAU"
            alt="Foto do usuário"
          />

          <div className="flex flex-col">
            <span className="text-sm text-gray-400 font-semibold">
              {user?.name}
            </span>
            <span className="text-sm text-blue-600">
              {user?.type}
            </span>
          </div>
        </div>

        <Link to="meu-perfil">
          <i className="fa-solid fa-gear text-white text-2xl bg-blue-600 hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition-all top-4"></i>
        </Link>
      </div>
    </div>
  );
};
