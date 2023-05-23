//React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//React-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//Material-ui
import { TextField } from "@mui/material";

// Yup
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as yup from "yup";
import { loginClient } from "../../features/client/authSliceClient";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";

interface ErrorObject {
  error: { error: string };
}

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Formato de email inválido.")
      .required("Campo obrigatório."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "A senha deve ter entre 8 a 12 caracteres."),
  })
  .required();

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(0)

  const dispatch = useAppDispatch()
  const error = useAppSelector((state) => state.rootReducer.authClient.error)

  console.log(error)

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: any) => {
    setIsLoading(4)
    const result = await dispatch(loginClient(data))
    if (result.payload) {
      navigate("/portaldopaciente/", { replace: true });
    }
  };

  const handleGuest = async () => {
    setIsLoading(2)
    const guestData = {
      "email": "clienteconvidado@gmail.com",
      "password": "ClientHubClinic"
    };
    const result = await dispatch(loginClient(guestData))
    if (result.payload) {
      navigate("/portaldopaciente/", { replace: true });
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit(handleSubmit)}
        className="flex flex-col gap-4 mt-4 w-full"
      >
        <TextField
          id="outlined-basic"
          {...register("email")}
          label="Seu email"
          variant="outlined"
          helperText={errors?.email?.message}
          error={errors?.email ? true : false}
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
        {typeof error === 'object' && error !== null && (
          <p className="mx-auto text-red-500 text-sm font-medium">Email ou senha inválidos</p>
        )}
        <div className="flex justify-between text-sm">
          <div>
            {" "}
            <input
              type="checkbox"
              name="rememberPassword"
              value="rememberPassword"
            />
            <label htmlFor="subscribeNews" className="text-gray-600"> Lembrar meu acesso </label>
          </div>
          <a
            href="#"
            className="cursor-pointer text-gray-600 font-medium hover:underline transition-all"
          >
            Esqueci minha senha
          </a>
        </div>


        {isLoading === 4 ?
          <button
            type="button"
            className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
          >
            <AiOutlineLoading3Quarters className="animate-spin" />
          </button>
          :
          <button
            type="submit"
            className="flex text-base text-white w-full gap-2 font-bold p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
          >
            Fazer Login
          </button>
        }
      </form>
      {isLoading === 2 ?
        <button
          className="flex text-base text-white w-full gap-2 font-medium p-2 mt-4 min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
        >
          <AiOutlineLoading3Quarters className="animate-spin" />
        </button>
        :
        <button
          onClick={handleGuest}
          type="button"
          className="flex text-base text-white w-full gap-2 font-bold p-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
        >
          Login como Convidado
        </button>
      }
    </div>
  );
}
