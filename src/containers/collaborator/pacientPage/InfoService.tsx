import React, { useState } from "react";

// React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import format from "date-fns/format";

// Import's
import { TextField } from "@mui/material";
import { ImagensPacients } from "./ImagensPacient";
import { DocumentsPacient } from "./DocumentsPacient";
import { DatePicker } from "@mui/x-date-pickers";

export const InfoService = () => {
  const today = format(new Date(), "dd.MM.yyyy hh:mm a");
  // Evolution Const's
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [title, setTitle] = useState("");
  const [obs, setObs] = useState("");
  const [text, setText] = useState("");
  const [user, setUser] = useState("Nome do Usuário");

  const handleTitle = (event: any) => {
    setTitle(event.target.value as string);
  };

  const handleObs = (event: any) => {
    setObs(event.target.value as string);
  };

  const handleText = (event: any) => {
    setText(event.target.value as string);
  };

  //Handle Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        title,
        obs,
        text,
        today,
        user,
      },
    ]);
  };

  // Prescription Const's
  const [inputFieldsPrescription, setInputFieldsPrescription] = useState<any[]>(
    []
  );
  const [professional, setProfessional] = useState("");
  const [obsPrescription, setObsPrescription] = useState("");
  const [medicine, setMedicine] = useState("");

  const handleProfessional = (event: any) => {
    setProfessional(event.target.value as string);
  };

  const handleObsPrescription = (event: any) => {
    setObsPrescription(event.target.value as string);
  };

  const handleMedicine = (event: any) => {
    setMedicine(event.target.value as string);
  };

  //Handle Submit
  const handleSubmitPrescription = () => {
    setInputFieldsPrescription([
      ...inputFieldsPrescription,
      {
        id: inputFieldsPrescription.length + 1,
        professional,
        obsPrescription,
        medicine,
        today,
      },
    ]);
  };

  const handleDeletePrescription = () => {
    alert("Tem certeza que deseja deletar esse Receituário?");
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <h1 className="text-lg py-4 px-8 bg-slate-200">Evolução</h1>
        <form className="flex flex-col gap-4 w-full py-4 px-8">
          <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-between gap-2">
            <TextField
              label="Título"
              variant="outlined"
              value={title}
              onChange={(event) => handleTitle(event)}
              className="w-full"
            />

            <TextField
              label="Observações"
              variant="outlined"
              value={obs}
              onChange={(event) => handleObs(event)}
              className="w-full"
            />
          </div>
          <TextField
            label="Escreva a Evolução"
            multiline
            rows={5}
            variant="outlined"
            value={text}
            onChange={(event) => handleText(event)}
            className="w-full"
          />
          <div className="flex justify-end w-full">
            <span
              onClick={handleSubmit}
              className="flex bg-blue-600 text-white text-base w-fit px-4 py-2 text-center justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
            >
              <i className="fa-solid fa-plus mr-2"></i>Salvar
            </span>
          </div>
        </form>
        <div className="w-full mt-2 px-8 pb-8">
          {inputFields.length > 0 ? (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {inputFields?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 bg-slate-200 p-4 rounded-lg py-4 relative"
                  >
                    <button
                      onClick={handleDeletePrescription}
                      className="flex items-center justify-center absolute -top-2 -right-2 text-white w-[40px] h-[40px] rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="w-full text-justify text-sm mb-4">
                      {item.text}
                    </p>
                    <div className="flex justify-between w-full text-xs">
                      <span>{item.user}</span>
                      <span>{item.today}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full mx-auto text-center font-bold">
              Esse procedimento não tem Evoluções cadastradas
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <h1 className="text-lg py-4 px-8 bg-slate-200">Imagens do Serviço</h1>
        <div className="flex flex-col gap-4 w-full py-4 px-8">
          <ImagensPacients />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <h1 className="text-lg py-4 px-8 bg-slate-200">
          Documentos do Serviço
        </h1>
        <div className="flex flex-col gap-4 w-full py-4 px-8">
          <DocumentsPacient />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <h1 className="text-lg py-4 px-8 bg-slate-200">Receituário</h1>
        <form className="flex flex-col gap-4 w-full py-4 px-8">
          <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-between gap-2">
            <TextField
              label="Profissional"
              variant="outlined"
              value={professional}
              onChange={(event) => handleProfessional(event)}
              className="w-full"
            />
            <TextField
              label="Observações"
              multiline
              rows={1}
              variant="outlined"
              value={obsPrescription}
              onChange={(event) => handleObsPrescription(event)}
              className="w-full"
            />
          </div>
          <TextField
            label="Remédio e Administração"
            multiline
            rows={5}
            variant="outlined"
            value={medicine}
            onChange={(event) => handleMedicine(event)}
            className="w-full"
          />
          <div className="flex justify-end w-full">
            <span
              onClick={handleSubmitPrescription}
              className="flex bg-blue-600 text-white text-base w-fit px-4 py-2 text-center justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
            >
              <i className="fa-solid fa-plus mr-2"></i>Salvar
            </span>
          </div>
        </form>
        <div className="w-full mt-2 px-8 pb-8">
          {inputFieldsPrescription.length > 0 ? (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {inputFieldsPrescription.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 bg-slate-200 p-4 rounded-lg py-4 relative"
                  >
                    <button
                      onClick={handleDeletePrescription}
                      className="flex items-center justify-center absolute -top-2 -right-2 text-white w-[40px] h-[40px] rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <h2 className="text-xl font-bold mb-4">{item.today}</h2>
                    <p className="w-full text-justify text-sm">
                      <span className="font-semibold text-base">
                        Medicamento:
                      </span>
                      <br />
                      {item.medicine}
                    </p>
                    <p className="w-full text-justify text-sm mb-4">
                      <span className="font-semibold text-base">
                        Observações:
                      </span>
                      <br />
                      {item.obsPrescription}
                    </p>
                    <div className="flex justify-between w-full text-xs">
                      <span>{item.professional}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full mx-auto text-center font-bold">
              Esse procedimento não tem Receituários Cadastrados
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
