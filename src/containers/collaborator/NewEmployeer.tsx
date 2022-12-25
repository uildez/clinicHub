//Raect
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";

// React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Material-ui
import { Box, MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Snackbar from "@mui/material/Snackbar";

// Import's
import { GradeHours } from "../../components/GradeHours";
import { SpecsAdd } from "./SpecsAdd";

import {
  FormInputsNewEmployeer,
  schemaNewEmployeer,
} from "../../validations/NewEmployeer";

//Types Selected's
const genres = ["Masculino", "Feminino", "Outro", "Não quero declarar"];
const companies = [
  "Elfa/Medicamentos",
  "3M",
  "ABA Hospitalar",
  "Becton Dickinson",
  "Bling",
  "CM Coma",
];

const tissNumber = [
  "00 - Cirurgião",
  "01 - Primeiro Auxiliar",
  "02 - Segundo Auxiliar",
  "03 - Terceiro Auxiliar",
  "04 - Quarto Auxiliar",
  "05 - Instrumentador",
  "06 - Anestesista",
  "07 - Auxiliar de Anestesista",
  "08 - Consultor",
  "09 - Perfusionista",
  "10 - Pediatra na sala de parto",
  "11 - Auxiliar SADT",
  "12 - Clínico",
  "13 - Intensivista",
];
const roles = ["Colaborador", "Médico", "Enfermeiro", "Dentista"];
const getStatus = ["Ativo", "Demitido"];

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

export const NewEmployeer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string | undefined>("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [genre, setGenre] = useState("");

  const [role, setRole] = useState("");
  const [tiss, setTiss] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [selectedDateAdmission, setSelectedDateAdmission] =
    useState<Date | null>(null);

  const [insurance, setInsurance] = useState([]);

  //Handle Status Value
  const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setGenre(event.target.value as string);
  };

  //Handle Role
  const handleRole = (event: any) => {
    event.stopPropagation();
    setRole(event.target.value as string);
  };

  //Handle Tiss
  const handleTiss = (event: any) => {
    event.stopPropagation();
    setTiss(event.target.value as string);
  };

  //Handle Company
  const handleCompany = (event: any) => {
    event.stopPropagation();
    setCompany(event.target.value as string);
  };

  //Handle Status Value
  const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as string);
  };

  //Handle Specs
  function handleInsurances(event: { preventDefault: () => void }, value: any) {
    event.preventDefault();
    setInsurance(value);
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputsNewEmployeer>({
    resolver: yupResolver(schemaNewEmployeer),
  });

  //HandleSubmit
  const handleSubmit = (data: any) => {
    console.log(data);
    return <div className="flex flex-row items-center">Deu certo</div>;
    // navigate("/portaldocolaborador");
  };

  return (
    <div className="w-full">
      <ButtonBack />
      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-slate-100 shadow-xl rounded-lg text-blue-600 mb-4">
        <form onSubmit={onSubmit(handleSubmit)}>
          <h3 className="text-lg text-blue-600 font-bold mb-4">
            Dados Pessoais
          </h3>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col md:w-1/5 w-full">
              <img
                src={preview}
                className="bg-[url('https://cdn-icons-png.flaticon.com/512/149/149071.png')] bg-cover w-full md:h-full h-[300px] rounded-lg overflow-hidden bg-cover bg-center"
              />
              <label className="flex flex-col text-base text-white w-full gap-2 font-medium py-1 bg-blue-600 cursor-pointer items-center justify-center rounded-br-lg rounded-bl-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out">
                Selecione a foto
                <TextField
                  id="inputTag"
                  type="file"
                  {...register("file")}
                  onChange={onSelectFile}
                  style={{ display: "none" }}
                />
                <span className="text-black"></span>
              </label>
            </div>
            <div className="flex flex-col gap-4 md:w-4/5">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <TextField
                  id="outlined-basic"
                  {...register("name")}
                  label="Nome Completo"
                  variant="outlined"
                  helperText={errors?.name?.message}
                  error={errors?.name ? true : false}
                />

                <Box>
                  <TextField
                    {...register("genre")}
                    label="Gênero"
                    variant="outlined"
                    value={genre}
                    onChange={handleGenre}
                    helperText={errors?.genre?.message}
                    error={errors?.genre ? true : false}
                    className="w-full"
                    select
                  >
                    {genres.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Stack spacing={4} sx={{ width: "100%" }}>
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
                </Stack>
              </div>

              {/* ---------------------------- Location Info ---------------------------- */}
              <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
                <TextField
                  {...register("CEP")}
                  label="CEP"
                  variant="outlined"
                  helperText={errors?.name?.message}
                  error={errors?.name ? true : false}
                />

                <TextField
                  {...register("adress")}
                  label="Endereço"
                  variant="outlined"
                />

                <TextField
                  {...register("numberHouse")}
                  label="Número"
                  variant="outlined"
                />

                <TextField
                  {...register("complement")}
                  label="Complemento"
                  variant="outlined"
                />
              </div>

              <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
                <TextField
                  {...register("district")}
                  label="Bairro"
                  variant="outlined"
                />

                <Box>
                  <TextField
                    {...register("city")}
                    label="Cidade"
                    variant="outlined"
                    className="w-full"
                  />
                </Box>

                <TextField
                  label="Estado"
                  {...register("state")}
                  variant="outlined"
                />

                <TextField
                  {...register("country")}
                  label="País"
                  variant="outlined"
                />
              </div>

              {/* ---------------- Contact Info ---------------- */}
              <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
                <TextField
                  {...register("phone")}
                  label="Celular"
                  variant="outlined"
                  helperText={errors?.phone?.message}
                  error={errors?.phone ? true : false}
                />

                <Box>
                  <TextField
                    {...register("phone2")}
                    label="Celular 2"
                    variant="outlined"
                    className="w-full"
                  />
                </Box>

                <TextField
                  label="Telefone"
                  {...register("tel")}
                  variant="outlined"
                />

                <TextField
                  {...register("email")}
                  label="Email"
                  variant="outlined"
                  helperText={errors?.email?.message}
                  error={errors?.email ? true : false}
                />
              </div>
            </div>
          </div>

          {/* Personal Documents */}
          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Documentos Pessoais
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <TextField
              {...register("cpf")}
              label="CPF do Colaborador"
              variant="outlined"
              helperText={errors?.cpf?.message}
              error={errors?.cpf ? true : false}
            />

            <TextField
              {...register("rg")}
              label="Número da Identidade"
              variant="outlined"
            />

            <Stack spacing={4} sx={{ width: "100%" }}>
              <DatePicker
                label="Data de Admissão"
                renderInput={(params: any) => (
                  <TextField {...params} {...register("dateAdmission")} />
                )}
                value={selectedDateAdmission}
                onChange={(newValue: any) => {
                  setSelectedDateAdmission(newValue);
                }}
              />
            </Stack>

            <TextField
              {...register("status")}
              label="Status"
              variant="outlined"
              value={status}
              onChange={handleStatus}
              helperText={errors?.status?.message}
              error={errors?.status ? true : false}
              className="w-full"
              select
            >
              {getStatus.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("role")}
              label="Tipo de Colaborador"
              variant="outlined"
              value={role}
              onChange={handleRole}
              helperText={errors?.role?.message}
              error={errors?.role ? true : false}
              className="w-full"
              select
            >
              {roles.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("obs")}
              label="Observações"
              multiline
              rows={1}
              variant="outlined"
            />
          </div>

          {role?.includes("Médico") ||
          role?.includes("Enfermeiro") ||
          role?.includes("Dentista") ? (
            <>
              <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
                Grade Horário e outras informações
              </h3>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <TextField
                  {...register("tiss")}
                  label="Grau Participação Padrão (TISS)"
                  variant="outlined"
                  value={tiss}
                  onChange={handleTiss}
                  helperText={errors?.tiss?.message}
                  error={errors?.tiss ? true : false}
                  className="w-full"
                  select
                >
                  {tissNumber.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  {...register("company")}
                  label="Empresa"
                  variant="outlined"
                  value={company}
                  onChange={handleCompany}
                  helperText={errors?.company?.message}
                  error={errors?.company ? true : false}
                  className="w-full"
                  select
                >
                  {companies.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <Autocomplete
                  multiple
                  limitTags={3}
                  onChange={handleInsurances}
                  autoSelect
                  value={insurance}
                  options={insuranceOptions.map((option) => option)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      {...register("insurance")}
                      label="Convênios para Agendamento"
                      variant="outlined"
                      placeholder="Selecione os Convênios"
                    />
                  )}
                />
              </div>
              {/* ------------------------ Timetable and Especialities ------------------------ */}
              <SpecsAdd role={role} />
              <GradeHours />
            </>
          ) : (
            <></>
          )}

          <div className="flex lg:flex-row flex-col w-full justify-end">
            <button
              type="submit"
              className="flex text-base text-white w-fit px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
            >
              Salvar e Prosseguir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
