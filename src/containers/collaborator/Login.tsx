//React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal";

//React-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//Material-ui
import { AdminPanelSettings, AttachMoney, LocalHospital, SupervisedUserCircle } from '@mui/icons-material';
import { TextField } from "@mui/material";

// Yup
import * as yup from "yup";

//Assets

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

  useEffect(() => {
    if (user) {
      navigate("/portaldocolaborador/dashboard")
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
      navigate("/portaldocolaborador/dashboard", { replace: true });
    }
  };

  const handleSubmitAdmin = async () => {
    setIsLoading(1)
    const result = await dispatch(login({ email: "adminregister2@gmail.com", password: "adminregister2@" }));
    if (result.payload) {
      navigate("/portaldocolaborador/dashboard", { replace: true });
    }
  };

  const handleSubmitDoctor = async () => {
    setIsLoading(2)
    const result = await dispatch(login({ email: "doctorregister@gmail.com", password: "doctorregister2@" }))
    if (result.payload) {
      navigate("/portaldocolaborador/dashboard", { replace: true });
    }
  };

  const handleSubmitAttendance = async () => {
    setIsLoading(3)
    const result = await dispatch(login({ email: "attendanceregister@gmail.com", password: "attendanceregister2@" }))
    if (result.payload) {
      navigate("/portaldocolaborador/dashboard", { replace: true });
    }
  };

  const handleSubmitFinance = async () => {
    setIsLoading(4)
    const result = await dispatch(login({ email: "financeregister@gmail.com", password: "financeregister2@" }))
    if (result.payload) {
      navigate("/portaldocolaborador/dashboard", { replace: true });
    }
  };

  return (
    <>
      <div className="w-full">
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
            <input
              type="checkbox"
              name="rememberPassword"
              value="rememberPassword"
            />
            <label htmlFor="subscribeNews" className="text-gray-600 text-sm"> Lembrar meu acesso </label>
          </div>

          {isLoading === 5 ?
            <button
              className="flex text-base text-white w-full gap-2 font-medium p-2 mt-2 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >
              <AiOutlineLoading3Quarters className="animate-spin" />
            </button> :
            <button
              type="submit"
              className="flex text-base text-white w-full gap-2 font-bold p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >
              Acessar
            </button>
          }

        </form>
        <button
          onClick={openModal}
          className="flex text-base text-white w-full gap-2 font-bold p-2 mt-2 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
        >
          Acessar usuário de demonstração
        </button>
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        className="relative top-[50%] translate-y-[-50%] translate-x-[12%] z-50 w-5/6 h-auto bg-white px-8 py-4 rounded-xl text-blue-600 shadow-2xl"
      >
        <div className="flex w-full justify-between items-center border-b-2 border-slate-400 mt-4">
          <h2 className="text-2xl font-bold mb-4">Usuários de Demonstração</h2>
          <i
            className="fa-solid fa-xmark flex absolute lg:right-8 lg:top-8 right-4 top-4 items-center justify-center text-2xl cursor-pointer bg-slate-100 px-2 py-[6px] rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            onClick={closeModal}
          ></i>
        </div>
        <div className="flex lg:flex-row flex-col max-h-[500px] scroll-pr-4 lg:overflow-hidden overflow-y-scroll items-center justify-between gap-4 mt-8">
          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-100 rounded-xl">
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

          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-100 rounded-xl">
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

          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-100 rounded-xl">
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


          <div className="flex flex-col items-center w-full h-full gap-2 p-4 bg-slate-100 rounded-xl">
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
