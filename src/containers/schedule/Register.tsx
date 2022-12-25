//React
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ButtonBack } from "../../components/ButtonBack";
import img from "../../assets/images/img-login.png";

//React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Material-ui
import { styled, TextField } from "@mui/material";

// Yup
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers";

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
    tel: yup
      .string()
      .matches(new RegExp("[0-9]{7}"))
      .required("Campo obrigatório."),
    date: yup.string().required("Campo obrigatório."),
    email: yup
      .string()
      .email("Formato de email inválido.")
      .required("Campo obrigatório."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "A senha deve ter entre 8 a 12 caracteres."),
    phone: yup.string().required("Campo obrigatório."),

    cpf: yup
      .number()
      .required("Campo obrigatório.")
      .min(11, "A quantidade mínima é de 11 caracteres.")
      .typeError("Esse campo não pode ser vazio"),
  })
  .required();

export function Register() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const {
    register,
    handleSubmit: onSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data: any) => {
    console.log(data);
    navigate("/portaldopaciente/", { replace: true });
  };

  return (
    <>
      <ButtonBack />
      <div className="flex lg:flex-row flex-col h-4/5 rounded-xl overflow-hidden">
        <div className="flex flex-col h-full lg:w-3/5 w-full bg-slate-200 text-blue-600 rounded-xl lg:px-8 lg:py-8 py-8 px-6">
          <i className="fa-solid fa-bolt text-3xl font-bold mb-4"></i>
          <h2 className="text-3xl font-bold">Cadastro</h2>
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
                        helperText={errors?.date?.message}
                        error={errors?.date ? true : false}
                      />
                    )}
                    value={selectedDate}
                    onChange={(newValue: any) => {
                      setSelectedDate(newValue);
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
                  <label htmlFor="subscribeNews"> Lembrar meu acesso </label>
                </div>
                <a
                  href="#"
                  className="cursor-pointer font-medium hover:font-semibold transition-all"
                >
                  Esqueci minha senha
                </a>
              </div>
              <div className="flex lg:flex-row flex-col w-full justify-end">
                <button
                  type="submit"
                  className="flex text-base text-white w-fit px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                >
                  Salvar conta
                </button>
              </div>
            </form>
            <span className="pt-4 mx-auto">
              Já tem conta?
              <Link to="../entrar">
                <button
                  // onClick={handleSign}
                  className="cursor-pointer font-medium hover:font-semibold transition-all ml-2"
                >
                  Acesse aqui
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div className="lg:block hidden lg:w-3/5 w-full overflow-hidden">
          <img
            className="absolute h-[550px] overflow-hidden bottom-0 right-40"
            src={img}
            alt="Doutor com Paciente"
          />
        </div>
      </div>
    </>
  );
}
