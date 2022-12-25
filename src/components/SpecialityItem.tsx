import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

interface ModalProps {
  title: string;
  description: string;
  img?: string;
}

export function SpecialityItem({ title, description, img }: ModalProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center gap-4 cursor-pointer bg-slate-200 p-4 rounded-xl text-blue-600 text-center hover:scale-105 hover:bg-blue-800 hover:text-white transition-all"
      >
        <i className="fa-solid fa-notes-medical"></i>
        <h1 className="text-base font-bold">{title}</h1>
      </button>
      <Modal
        isOpen={modalIsOpen}
        className="relative top-[50%] translate-y-[-50%] translate-x-[12%] z-50 w-4/5 h-auto bg-slate-200 lg:p-12 p-4 rounded-xl text-blue-600 shadow-2xl"
      >
        <div className="flex w-full justify-between lg:mb-8 mb-4 mt-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <i
            className="fa-solid fa-xmark flex absolute lg:right-8 lg:top-8 right-[-1rem] top-[-1rem] items-center justify-center text-2xl cursor-pointer bg-slate-400 px-4 py-3 rounded-lg hover:bg-blue-800 hover:text-white transition-all"
            onClick={closeModal}
          ></i>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <div className="flex flex-col lg:w-3/5 w-full justify-between">
            <p className="text-base text-justify">{description}</p>
            <Link
              to="/portaldopaciente"
              className="flex items-center justify-center gap-2 py-2 px-4 text-blue-600 outline-blue-800 outline outline-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded-md shadow-lg hover:scale-105 hover:shadow-blue-800/50 transition duration-[500ms] ease-in-out mt-8"
            >
              Agende a sua Consulta
            </Link>
          </div>
          <img
            className="lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] mx-auto rounded-full object-cover"
            src={img}
            alt="Médico atendendo paciente"
          />
        </div>
      </Modal>
    </>
  );
}
