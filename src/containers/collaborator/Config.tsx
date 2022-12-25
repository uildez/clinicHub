import React from "react";

import { TextField } from "@material-ui/core";
import { ButtonBack } from "../../components/ButtonBack";
import { AcessTable } from "./AcessTable";

export const Config = () => {
  return (
    <div>
      <ButtonBack />
      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-slate-100 shadow-xl rounded-lg text-blue-600 mb-4">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <img
              className="rounded-full w-[80px] h-[80px] object-cover"
              src="https://cdn1.newsplex.pt/fotos/2022/8/10/830037.jpg?type=Artigo"
              alt="Foto do Cliente"
            />
            <div className="md:text-left text-center">
              <h2 className="text-lg font-semibold mb-2">
                Nome Completo do Colaborador
              </h2>
              <p className="text-sm mb-2">
                <strong>Tipo de Perfil: </strong>Administrador
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-gray-300 text-gray-600 p-4 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-105 transition-all ease-in-out">
              <i className="fa-solid fa-pen-to-square mr-2"></i> Editar
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full my-8">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
            <TextField
              disabled
              id="outlined-basic"
              label="Nome Completo"
              variant="outlined"
              defaultValue="Nome Completo do Colaborador"
            />

            <TextField
              disabled
              label="Gênero"
              variant="outlined"
              className="w-full"
              defaultValue="Gênero"
            />

            <TextField
              disabled
              label="Data de Nascimento"
              variant="outlined"
              defaultValue="dd/mm/aaaa"
            />
          </div>

          {/* ---------------------------- Location Info ---------------------------- */}
          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <TextField
              disabled
              label="CEP"
              defaultValue="00000-000"
              variant="outlined"
            />

            <TextField
              disabled
              label="Endereço"
              defaultValue="Endereço Fictício"
              variant="outlined"
            />

            <TextField
              disabled
              label="Número"
              defaultValue="000"
              variant="outlined"
            />

            <TextField
              disabled
              label="Complemento"
              defaultValue=""
              variant="outlined"
            />
          </div>

          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <TextField
              disabled
              label="Bairro"
              defaultValue="Bairro Fictício"
              variant="outlined"
            />

            <TextField
              disabled
              label="Cidade"
              variant="outlined"
              className="w-full"
              defaultValue="Cidade Fictícia"
            />

            <TextField
              disabled
              label="Estado"
              defaultValue="Estado"
              variant="outlined"
            />

            <TextField
              disabled
              label="País"
              defaultValue="Brasil"
              variant="outlined"
            />
          </div>

          {/* ---------------- Contact Info ---------------- */}
          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <TextField
              disabled
              label="Celular"
              defaultValue="(00) 00000-0000"
              variant="outlined"
            />

            <TextField
              disabled
              label="Celular 2"
              variant="outlined"
              className="w-full"
              defaultValue="(00) 00000-0000"
            />

            <TextField
              disabled
              label="Telefone"
              defaultValue="(00) 00000-0000"
              variant="outlined"
            />

            <TextField
              disabled
              label="Email"
              defaultValue="contato@gmail.com"
              variant="outlined"
            />
          </div>
        </div>
        <AcessTable />
      </div>
    </div>
  );
};
