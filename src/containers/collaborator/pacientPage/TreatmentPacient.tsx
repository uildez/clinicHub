import { useState } from "react";

// React-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Import's
import {
  FormInputsNewBudget,
  schemaNewBudget,
} from "../../../validations/NewBudget";

// Material UI
import { Divider, MenuItem, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  columnsTreatment,
  rowsTreatment,
} from "../../../_fakeData/DataTreatment";

const insuranceOptions = [
  "Convênio 1",
  "Convênio 2",
  "Convênio 3",
  "Convênio 4",
  "Convênio 5",
  "Convênio 6",
  "Convênio 7",
  "Convênio 8",
  "Convênio 9",
  "Convênio 10",
  "Convênio 11",
  "Convênio 12",
  "Convênio 13",
  "Convênio 14",
  "Convênio 15",
];

const procedureOptions = [
  "Cirurgia",
  "Consulta",
  "Exame",
  "Procedimento",
  "Retorno",
  "Vacina",
];

const selectRegionOptions = [
  "Região 1",
  "Região 2",
  "Região 3",
  "Região 4",
  "Região 5",
  "Região 6",
  "Região 7",
  "Região 8",
  "Região 9",
];

export const TreatmentPacient = () => {
  const [insurance, setInsurance] = useState("");
  const [procedure, setProcedure] = useState("");
  const [select, setSelect] = useState("");

  //Handle Insurance
  const handleInsurance = (event: any) => {
    event.stopPropagation();
    setInsurance(event.target.value as string);
  };

  //Handle Procedure
  const handleProcedure = (event: any) => {
    event.stopPropagation();
    setProcedure(event.target.value as string);
  };

  //Handle Select
  const handleSelect = (event: any) => {
    event.stopPropagation();
    setSelect(event.target.value as string);
  };

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormInputsNewBudget>({
    resolver: yupResolver(schemaNewBudget),
  });

  //HandleSubmit
  const handleSubmit = (data: any) => {
    console.log(data);
    // navigate("/portaldocolaborador");
  };

  return (
    <div className="flex md:flex-row flex-col gap-4">
      <div className="md:w-4/6 w-full">
        <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 mb-4 overflow-hidden">
          <h1 className="text-lg py-4 px-8 text-white font-semibold bg-blue-600">Adicionar serviço</h1>
          <form onSubmit={onSubmit(handleSubmit)} className="py-4 px-8">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
              <TextField
                {...register("insurance")}
                label="Plano*"
                variant="outlined"
                value={insurance}
                onChange={handleInsurance}
                helperText={errors?.insurance?.message}
                error={errors?.insurance ? true : false}
                className="w-full"
                select
              >
                {insuranceOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("procedure")}
                label="Tipo de Serviço*"
                variant="outlined"
                value={procedure}
                onChange={handleProcedure}
                helperText={errors?.procedure?.message}
                error={errors?.procedure ? true : false}
                className="w-full"
                select
              >
                {procedureOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("select")}
                label="Dente/Região"
                variant="outlined"
                value={select}
                onChange={handleSelect}
                helperText={errors?.select?.message}
                error={errors?.select ? true : false}
                className="w-full"
                select
              >
                {selectRegionOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("price")}
                label="Valor*"
                variant="outlined"
                helperText={errors?.price?.message}
                error={errors?.price ? true : false}
                className="w-full"
              />

              <TextField
                {...register("professional")}
                label="Especialista*"
                variant="outlined"
                helperText={errors?.professional?.message}
                error={errors?.professional ? true : false}
                className="w-full"
              />
            </div>
            <div className="flex w-full items-end justify-end">
              <button
                type="submit"
                className="flex text-base text-white w-fit px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
              >
                Adicionar serviço
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 mb-4 overflow-hidden">
          <div className="flex w-full items-center justify-between py-4 px-8 text-white font-semibold bg-blue-600">
            <h3 className="text-lg">Serviços</h3>
          </div>
          <div className="flex flex-col gap-4 py-4 px-8 text-sm h-[500px]">
            <DataGrid rows={rowsTreatment} columns={columnsTreatment} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-2/6 w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <div className="flex items-center justify-between py-4 px-8 text-white font-semibold bg-blue-600">
          <h1 className="text-lg">Evoluções</h1>
          <div className="flex items-center text-lg gap-2">
            <i className="fa-solid fa-print cursor-pointer hover:text-blue-700 transition-all ease-in-out"></i>
            <i className="fa-solid fa-circle-plus cursor-pointer hover:text-blue-700 transition-all ease-in-out"></i>
          </div>
        </div>
        <div className="flex flex-col py-6 px-8">
          <div className="flex gap-8 w-full items-center bg-blue-100 text-blue-800 rounded-lg py-6 px-8">
            <i className="fa-solid fa-gift text-2xl"></i>
            <p>
              Você ganhou 5 <strong> assinaturas grátis</strong> para{" "}
              <strong className="underline">testar</strong> o novo recurso.
            </p>
          </div>
        </div>

        <Divider variant="middle" />

        <div className="flex flex-col py-6 px-8">
          <div className="flex justify-between items-center w-full">
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              Sem assinatura
            </div>
            <i className="fa-solid fa-ellipsis-vertical text-xl text-right cursor-pointer" />
          </div>
          <h2 className="text-lg mt-4 font-semibold">
            Descrição resumida do procedimento realizado ao qual a evolução está
            atrelada
          </h2>
          <div className="flex justify-between text-xs mt-4">
            <h4>Dr(a) Nome do profissional</h4>
            <p>dd/mm/aaa</p>
          </div>
        </div>

        <Divider variant="middle" />

        <div className="flex flex-col py-6 px-8">
          <div className="flex justify-between items-center w-full">
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              Sem assinatura
            </div>
            <i className="fa-solid fa-ellipsis-vertical text-xl text-right cursor-pointer" />
          </div>
          <h2 className="text-lg mt-4 font-semibold">
            Descrição resumida do procedimento realizado ao qual a evolução está
            atrelada
          </h2>
          <div className="flex justify-between text-xs mt-4">
            <h4>Dr(a) Nome do profissional</h4>
            <p>dd/mm/aaa</p>
          </div>
        </div>

        <Divider variant="middle" />

        <div className="flex flex-col py-6 px-8">
          <div className="flex justify-between items-center w-full">
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              Sem assinatura
            </div>
            <i className="fa-solid fa-ellipsis-vertical text-xl text-right cursor-pointer" />
          </div>
          <h2 className="text-lg mt-4 font-semibold">
            Descrição resumida do procedimento realizado ao qual a evolução está
            atrelada
          </h2>
          <div className="flex justify-between text-xs mt-4">
            <h4>Dr(a) Nome do profissional</h4>
            <p>dd/mm/aaa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
