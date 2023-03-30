import React, { useState } from "react";
import Modal from "react-modal";
import { useAppSelector } from "../../features/hooks/hooks";

export function ClientNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const client = useAppSelector((state) => state.rootReducer.authClient.client)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8 items-center w-full lg:mb-0 mb-8">
      <div className="flex flex-row gap-8 items-center">
        <div className="">
          <h2 className="text-blue-600 font-bold text-2xl">
            Olá. {client ? <>{client?.name}</> : <>Seja bem vindo</>}
          </h2>
          <span className=" text-blue-600 text-sm">{client ? <>CPF: {client?.cpf}</> : <>Faça login abaixo para acessar o sistema</>}</span>
        </div>
        <i
          onClick={openModal}
          className="text-3xl text-blue-600 hover:scale-105 hover:text-blue-600 cursor-pointer transition-all fa-solid fa-bell"
        ></i>
      </div>
      <form className="lg:w-2/4 w-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Buscar
        </label>
        <div className="relative flex justify-end">
          <input
            type="search"
            id="default-search"
            className="block p-4 rounded-lg lg:w-[450px] w-full text-sm text-gray-900 bg-slate-200 border border-gray-300 outline-none focus:outline-blue-500 ring-0 outline focus:outline-2 outline-offset-2"
            placeholder="Buscar"
            required
          />
          <button
            // type="submit"
            className="text-white absolute right-2 bottom-1.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none outline-none focus:ring-blue-600 font-medium rounded-lg text-sm w-[40px] h-[40px]"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
      <Modal
        isOpen={isOpen}
        className="relative top-[50%] translate-y-[-50%] translate-x-[12%] z-50 w-4/5 h-auto bg-slate-200 lg:p-12 p-4 rounded-xl text-blue-600 shadow-2xl"
      >
        <div className="flex w-full justify-between lg:mb-8 mb-4 mt-8">
          <p className="font-bold text-center mx-auto">Sem Notificações aqui</p>
          <i
            className="fa-solid fa-xmark flex absolute lg:right-8 lg:top-8 right-[-1rem] top-[-1rem] items-center justify-center text-2xl cursor-pointer bg-slate-400 px-4 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all"
            onClick={closeModal}
          ></i>
        </div>
      </Modal>
    </div>
  );
}
