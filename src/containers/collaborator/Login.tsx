//React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";

//React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Material-ui
import { TextField } from "@mui/material";
import { AdminPanelSettings, AttachMoney, LocalHospital, SupervisedUserCircle } from '@mui/icons-material';

// Yup
import * as yup from "yup";

import { useQuery } from "react-query"

//Assets
import Logo from "../../_assets/images/logo/logo-blue.png";
import axios from "axios";

interface IFormInputs {
  email: string;
  password: string;
  unit: string;
}

const schema = yup
  .object({
    email: yup.string().required("Campo obrigatório."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "A senha deve ter entre 8 a 12 caracteres."),
  })
  .required();

type Users = {
  name: string,
  email: string,
  type: string,
}

export const Login = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data: any) => {
    console.log("Texto usuário", data);

    axios.post('http://localhost:3333/auth/authenticate', data).then(response => {
      if (response.status === 200) {
        navigate("/portaldocolaborador/", { replace: true });
      }
    })
  };

  // const { data, isFetching } = useQuery<Users[]>('user', async () => {
  //   const response = await axios.post('http://localhost:3333/auth/authenticate')

  //   return response.data
  // }, {
  //   refetchOnWindowFocus: false
  // })

  return (
    <>
      <div className="flex flex-col bg-[#ddd6fe] w-screen lg:justify-between">
        <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-blue-300 to-blue-500">
          <div className="flex flex-col h-auto lg:w-2/5 w-5/6 bg-slate-200 text-blue-600 rounded-xl lg:px-8 lg:py-8 py-8 px-6">
            <div className="flex flex-col text-center mx-auto">
              <img
                className="lg:w-2/4 w-3/4 mx-auto mb-8"
                src={Logo}
                alt="Logotipo Clinfec"
              />
              <h2 className="lg:text-2xl text-2xl font-bold">
                Acesso do Colaborador
              </h2>
            </div>
            <div className="flex flex-col justify-between w-full">
              <form
                onSubmit={onSubmit(handleSubmit)}
                className="flex flex-col gap-4 mt-4 w-full"
              >
                <TextField
                  id="outlined-basic"
                  {...register("email")}
                  label="Usuário"
                  variant="outlined"
                  helperText={errors?.email?.message}
                  error={errors?.email ? true : false}
                  className="text-gray-900 text-sm rounded-lg z-0 outline-none focus:outline-blue-500 focus:ring-0 focus:outline focus:outline-2 focus:outline-offset-2 block w-full p-2.5"
                />

                <TextField
                  id="outlined-basic"
                  type="password"
                  {...register("password")}
                  label="Informe sua senha"
                  variant="outlined"
                  helperText={errors?.password?.message}
                  error={errors?.password ? true : false}
                  className="text-gray-900 text-sm rounded-lg z-0 outline-none focus:outline-blue-500 focus:ring-0 focus:outline focus:outline-2 focus:outline-offset-2 block w-full p-2.5"
                />
                <div>
                  {" "}
                  <input
                    type="checkbox"
                    id="subscribeNews"
                    name="subscribe"
                    value="newsletter"
                  />
                  <label htmlFor="subscribeNews"> Lembrar meu acesso </label>
                </div>

                <button
                  type="submit"
                  className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                >
                  Acessar
                </button>

              </form>
              <button
                onClick={openModal}
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Acessar usuário de demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        className="relative top-[50%] translate-y-[-50%] translate-x-[12%] z-50 w-5/6 h-auto bg-slate-200 px-8 py-4 rounded-xl text-blue-600 shadow-2xl"
      >
        <div className="flex w-full justify-between items-center border-b-2 border-slate-400 mt-4">
          <h2 className="text-2xl font-bold mb-4">Login como Demo User</h2>
          <i
            className="fa-solid fa-xmark flex absolute lg:right-8 lg:top-8 right-[-1rem] top-[-1rem] items-center justify-center text-2xl cursor-pointer bg-slate-400 px-2 py-1 rounded-lg hover:bg-blue-800 hover:text-white transition-all"
            onClick={closeModal}
          ></i>
        </div>
        <div className="flex lg:flex-row flex-col max-h-[500px] scroll-pr-4 lg:overflow-hidden overflow-y-scroll items-center justify-between gap-4 mt-8">
          <div className="flex flex-col items-center w-full h-full gap-4 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <AdminPanelSettings fontSize="large" />
              <h2 className="text-lg font-bold">Demo admin</h2>
            </div>
            <p>Descrição</p>
            <button
              className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >Login como Título</button>
          </div>

          <div className="flex flex-col items-center w-full h-full gap-4 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <SupervisedUserCircle fontSize="large" />
              <h2 className="text-lg font-bold">Demo Recepção</h2>
            </div>
            <p>Descrição</p>
            <button
              className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >Login como Título</button>
          </div>

          <div className="flex flex-col items-center w-full h-full gap-4 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <LocalHospital fontSize="large" />
              <h2 className="text-lg font-bold">Demo Médico</h2>
            </div>
            <p>Descrição</p>
            <button
              className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >Login como Título</button>
          </div>

          <div className="flex flex-col items-center w-full h-full gap-4 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <AttachMoney fontSize="large" />
              <h2 className="text-lg font-bold">Demo Financeiro</h2>
            </div>
            <p>Descrição</p>
            <button
              className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >Login como Título</button>
          </div>
        </div>

      </Modal>
    </>
  );
};
