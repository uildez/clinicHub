import React from "react";
import { Link } from "react-router-dom";
import img from "../../_assets/images/douctor-with-pacient.png";

export function OptionsPages() {
  return (
    <div className="flex lg:flex-row flex-col gap-8 lg:mt-28">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <Link to="consulta">
          <div className="bg-slate-200 px-6 py-4 rounded-2xl cursor-pointer text-blue-600 hover:scale-105 hover:text-slate-100 hover:bg-blue-800 text-left shadow-xl transition-all">
            <i className="fa-regular fa-calendar text-6xl"></i>
            <h2 className="font-bold text-xl mt-2">Agendar Consulta</h2>
          </div>
        </Link>

        <div className="bg-slate-200 px-6 py-4 rounded-2xl text-blue-600  opacity-50 text-left shadow-xl transition-all">
          <i className="fa-regular fa-note-sticky text-6xl"></i>
          <h2 className="font-bold text-xl mt-2">Minhas Consultas</h2>
        </div>

        <Link to="exames">
          <div className="bg-slate-200 px-6 py-4 rounded-2xl cursor-pointer text-blue-600 hover:scale-105 hover:text-slate-100 hover:bg-blue-800 text-left shadow-xl transition-all">
            <i className="fa-solid fa-square-poll-horizontal text-6xl"></i>
            <h2 className="font-bold text-xl mt-2">Resultado dos Exames</h2>
          </div>
        </Link>

        <div className="bg-slate-200 px-6 py-4 rounded-2xl text-blue-600  opacity-50 text-left shadow-xl transition-all">
          <i className="fa-solid fa-folder-open text-6xl"></i>
          <h2 className="font-bold text-xl mt-2">Prontuário</h2>
        </div>

        <div className="bg-slate-200 px-6 py-4 rounded-2xl text-blue-600  opacity-50 text-left shadow-xl transition-all">
          <i className="fa-solid fa-heart-pulse text-6xl"></i>
          <h2 className="font-bold text-xl mt-2">Laudo Médico</h2>
        </div>

        <div className="bg-slate-200 px-6 py-4 rounded-2xl text-blue-600  opacity-50 text-left shadow-xl transition-all">
          <i className="fa-solid fa-file text-6xl"></i>
          <h2 className="font-bold text-xl mt-2">Documentos</h2>
        </div>
      </div>
      <div className="lg:block hidden lg:w-3/5 w-full overflow-hidden">
        <img
          className="absolute h-[560px] overflow-hidden bottom-0 right-0"
          src={img}
          alt="Doutor com Paciente"
        />
      </div>
    </div>
  );
}
