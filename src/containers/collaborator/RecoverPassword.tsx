import React from "react";
import { Link } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";

export const RecoverPassword = () => {
  return (
    <>
      <ButtonBack />
      <div className="flex flex-col text-center mx-auto">
        <i className="fa-solid fa-people-group text-3xl font-bold mb-4"></i>
        <h2 className="text-3xl font-bold">Recuperar senha</h2>
        <p className="my-4 w-3/4 mx-auto">
          Será enviado para o <strong>seu email</strong> informado no cadastro
          as instruções de Recuperação de senha
        </p>
      </div>
      <div className="flex flex-col justify-between w-full">
        <form
          // onSubmit={sendEmail}
          className="mt-10"
        >
          <div className="flex flex-col gap-4 px-2">
            <label className="block text-sm font-medium text-blue-500">
              Seu CPF
            </label>
            <div>
              <input
                type="cpf"
                id="cpf"
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                className="bg-gray-50 text-gray-900 text-sm rounded-lg  outline-none focus:outline-blue-500 focus:ring-0 focus:outline focus:outline-2 focus:outline-offset-2 block w-full p-2.5"
                placeholder="000.000.000-00"
                name="cpf"
                required
              />
            </div>
          </div>
          <Link
            to=""
            className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
          >
            Recuperar senha
          </Link>
        </form>
      </div>
    </>
  );
};
