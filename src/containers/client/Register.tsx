//React
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//React-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//Material-ui
import { TextField } from "@mui/material";

// Yup
import { DatePicker } from "@mui/x-date-pickers";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as yup from "yup";
import { registerClient } from "../../features/client/registerClient";
import { useAppDispatch } from "../../features/hooks/hooks";

import { formatISO } from 'date-fns';

interface IFormInputs {
  name: string;
  tel: string;
  date: Date;
  password: string;
  phone: string;
  cpf: string;
  email: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .min(10, "Deve ter mais de 10 caracteres")
      .max(100, "Deve ser menor que 100 caracteres")
      .required("Campo obrigatório."),
    date: yup
      .date()
      .typeError("Esse campo não pode ser vazio")
      .required("Campo obrigatório."),
    email: yup
      .string()
      .email("Formato de email inválido.")
      .required("Campo obrigatório."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "A senha deve ter entre 8 a 12 caracteres."),
    phone: yup
      .string()
      // .matches(new RegExp("^\(\d{2}\) \d{4}-\d{4}$"))
      .required("Campo obrigatório."),
    cpf: yup
      .string()
      .required("Campo obrigatório.")
      .min(11, "A quantidade mínima é de 11 caracteres.")
      .typeError("Esse campo não pode ser vazio"),
  })
  .required();

export function Register() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(0);

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: any) => {
    setIsLoading(1)
    const modifiedData = { ...data, date: formatISO(data.date) };
    const result = await dispatch(registerClient(modifiedData))
    if (result.payload) {
      navigate("/portaldopaciente/", { replace: true });
    }
  };

  return (
    <div className="flex flex-col justify-between w-full">
      <form onSubmit={onSubmit(handleSubmit)} className="mt-8">
        <div className="flex flex-col overflow-y-scroll gap-4 max-h-[180px]">
          <TextField
            id="outlined-basic"
            {...register("name")}
            label="Nome Completo"
            variant="outlined"
            helperText={errors?.name?.message}
            error={errors?.name ? true : false}
            className="w-full"
          />

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <DatePicker
              label="Data de Nascimento"
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  {...register("date")}
                  type="date"
                  helperText={errors?.date?.message}
                  error={errors?.date ? true : false}
                />
              )}
              value={selectedDate}
              onChange={(newValue: any) => {
                const formattedDate = formatISO(newValue, { representation: 'complete' });
                setSelectedDate(formattedDate);
              }}
            />

            <TextField
              {...register("phone")}
              label="Celular"
              variant="outlined"
              helperText={errors?.phone?.message}
              error={errors?.phone ? true : false}
            />
          </div>

          <TextField
            {...register("cpf")}
            label="Digite seu CPF"
            variant="outlined"
            helperText={errors?.cpf?.message}
            error={errors?.cpf ? true : false}
          />

          <TextField
            {...register("email")}
            label="Email"
            variant="outlined"
            helperText={errors?.email?.message}
            error={errors?.email ? true : false}
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
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <div>
            {" "}
            <input
              type="checkbox"
              id="subscribeNews"
              name="subscribe"
              value="newsletter"
            />
            <label htmlFor="subscribeNews" className="text-gray-600"> Lembrar meu acesso </label>
          </div>
          <a
            href="#"
            className="text-gray-600 cursor-pointer font-medium hover:underline transition-all"
          >
            Esqueci minha senha
          </a>
        </div>
        <div className="flex lg:flex-row flex-col w-full justify-end">
          {isLoading === 1 ?
            <button
              className="flex text-base text-white w-fit px-4 gap-2 font-medium py-2 mt-4 min-w-[121px] min-h-[40px] bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >
              <AiOutlineLoading3Quarters className="animate-spin" />
            </button> :
            <button
              type="submit"
              className="flex text-base text-white w-full px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >
              Criar conta
            </button>
          }
        </div>
      </form>
    </div>
  );
}
