//React
import React, { useEffect, useState } from "react";
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

//Assets
import Logo from "../../_assets/images/logo/logo-blue.png";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { login } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";

interface IFormInputs {
  email: string;
  password: string;
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


export const Login = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.rootReducer.auth.user)
  const error = useAppSelector((state) => state.rootReducer.auth.error)

  console.log(error)


  useEffect(() => {
    if (user) {
      navigate("/portaldocolaborador")
    }
  }, [user])


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

  const handleSubmit = async (data: any) => {
    setIsLoading(5)
    const result = await dispatch(login(data))
    if (result.payload) {
      navigate("/portaldocolaborador/", { replace: true });
    }
  };

  const handleSubmitAdmin = async () => {
    setIsLoading(1)
    const result = await dispatch(login({ email: "adminregister2@gmail.com", password: "adminregister2@" }));
    if (result.payload) {
      navigate("/portaldocolaborador/", { replace: true });
    }
  };

  const handleSubmitDoctor = async () => {
    setIsLoading(2)
    const result = await dispatch(login({ email: "doctorregister@gmail.com", password: "doctorregister2@" }))
    if (result.payload) {
      navigate("/portaldocolaborador/", { replace: true });
    }
  };

  const handleSubmitAttendance = async () => {
    setIsLoading(3)
    const result = await dispatch(login({ email: "attendanceregister@gmail.com", password: "attendanceregister2@" }))
    if (result.payload) {
      navigate("/portaldocolaborador/", { replace: true });
    }
  };

  const handleSubmitFinance = async () => {
    setIsLoading(4)
    const result = await dispatch(login({ email: "financeregister@gmail.com", password: "financeregister2@" }))
    if (result.payload) {
      navigate("/portaldocolaborador/", { replace: true });
    }
  };

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
                {typeof error === 'object' && error !== null && (
                  <p className="mx-auto text-red-500 text-sm font-medium">Email ou senha inválidos</p>
                )}
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

                {isLoading === 5 ?
                  <button
                    className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                  >
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  </button> :
                  <button
                    type="submit"
                    className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                  >
                    Acessar
                  </button>
                }

              </form>
              <button
                onClick={openModal}
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Acessar usuário de demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        ariaHideApp={false}
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
          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <AdminPanelSettings fontSize="large" />
              <h2 className="text-lg font-bold">Demo admin</h2>
            </div>
            <p className="line-clamp-3 overflow-hidden">Usuário com acesso total a todas as telas e transições financeiras entre outros.</p>
            {isLoading === 1 ?
              <button
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                <AiOutlineLoading3Quarters className="animate-spin" />
              </button> :
              <button
                onClick={handleSubmitAdmin}
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Login como Admin
              </button>
            }
          </div>

          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <LocalHospital fontSize="large" />
              <h2 className="text-lg font-bold">Demo Médico</h2>
            </div>
            <p className="line-clamp-3 overflow-hidden">Usuário com acesso restrito a pacientes e seus atendimentos.</p>
            {isLoading === 2 ?
              <button
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                <AiOutlineLoading3Quarters className="animate-spin" />
              </button> :
              <button
                onClick={handleSubmitDoctor}
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Login como Médico
              </button>
            }
          </div>

          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <SupervisedUserCircle fontSize="large" />
              <h2 className="text-lg font-bold">Demo Recepção</h2>
            </div>
            <p className="line-clamp-3 overflow-hidden">Usuário com acesso a restrito a pacientes e grade de atendimentos...</p>
            {isLoading === 3 ?
              <button
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                <AiOutlineLoading3Quarters className="animate-spin" />
              </button> :
              <button
                onClick={handleSubmitAttendance}
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Login como Recepção
              </button>
            }
          </div>


          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-300 rounded-xl">
            <div className="flex items-center gap-2">
              <AttachMoney fontSize="large" />
              <h2 className="text-lg font-bold">Demo Financeiro</h2>
            </div>
            <p className="line-clamp-3 overflow-hidden">Usuário com acesso restrito a financeiro e funcionários.</p>
            {isLoading === 4 ?
              <button
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                <AiOutlineLoading3Quarters className="animate-spin" />
              </button> :
              <button
                onClick={handleSubmitFinance}
                className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Login como Financeiro
              </button>
            }
          </div>
        </div>

      </Modal>
    </>
  );
};
