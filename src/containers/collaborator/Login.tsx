//React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Material-ui
import { styled, TextField } from "@mui/material";

// Yup
import * as yup from "yup";

//Assets
import Logo from "../../assets/images/logo/logo-blue.png";

interface IFormInputs {
  user: string;
  password: string;
  unit: string;
}

const schema = yup
  .object({
    user: yup.string().required("Campo obrigatório."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "A senha deve ter entre 8 a 12 caracteres."),
  })
  .required();

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data: any) => {
    console.log(data);
    navigate("/portaldocolaborador/", { replace: true });
  };

  return (
    <div className="flex flex-col bg-[#ddd6fe] w-screen lg:justify-between">
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-blue-300 to-blue-500">
        <div className="flex flex-col h-auto lg:w-2/5 w-5/6 bg-slate-200 text-blue-600 rounded-xl lg:px-8 lg:py-8 py-8 px-6">
          <div className="flex flex-col text-center mx-auto">
            <img
              className="lg:w-2/4 w-3/4 mx-auto mb-4"
              src={Logo}
              alt="Logotipo Clinfec"
            />
            <h2 className="lg:text-3xl text-2xl font-bold">
              Acesso do Colaborador
            </h2>
          </div>
          <div className="flex flex-col justify-between w-full">
            <form
              onSubmit={onSubmit(handleSubmit)}
              className="flex flex-col gap-4 mt-10 w-full"
            >
              <TextField
                id="outlined-basic"
                {...register("user")}
                label="Usuário"
                variant="outlined"
                helperText={errors?.user?.message}
                error={errors?.user ? true : false}
                className="text-gray-900 text-sm rounded-lg  outline-none focus:outline-blue-500 focus:ring-0 focus:outline focus:outline-2 focus:outline-offset-2 block w-full p-2.5"
              />

              <TextField
                id="outlined-basic"
                type="password"
                {...register("password")}
                label="Informe sua senha"
                variant="outlined"
                helperText={errors?.password?.message}
                error={errors?.password ? true : false}
                className="text-gray-900 text-sm rounded-lg  outline-none focus:outline-blue-500 focus:ring-0 focus:outline focus:outline-2 focus:outline-offset-2 block w-full p-2.5"
              />
              <button
                type="submit"
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Acessar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
