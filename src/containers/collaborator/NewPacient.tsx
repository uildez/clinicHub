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

import { InsurancePacient } from "./InsurancePacient";
import {
  FormInputsNewPacient,
  schemaNewPacient,
} from "../../validations/NewPacientValidation";

//Types Selected's
const genres = ["Masculino", "Feminino", "Outro", "Não quero declarar"];
const maritalOptions = ["Casado", "Víuvo", "Solteiro", "Divorciado"];
const priorityOptions = [
  "Criança de Colo",
  "Cardíaco",
  "Lactante",
  "Portador de Deficiência",
  "Obeso",
  "Idoso idade igual/maior 60 anos",
  "Gestante",
];
const skinOptions = [
  "Branca",
  "Preta",
  "Parda",
  "Amarela",
  "Vermelha",
  "Sem informação",
];
const schollingOptions = [
  "Doutorado",
  "Educação infantil",
  "Ensino Fundamental Completo",
  "Ensino Fundamental Incompleto",
  "Ensino Médio Completo",
  "Ensino Médio Incompleto",
  "Ensino Profissionalizante",
  "Especialização/Residência",
  "Graduação Completa",
  "Graduação Incompleta",
  "Mestrado",
  "Não sabe ler/escrever",
  "Pós-doutorado",
];
const originOptions = [
  "Email",
  "Google",
  "Indicação",
  "Internet: Google/Facebook/Instagram",
  "Site",
  "Jornal",
  "Livro Convênio",
  "Outdoor",
  "Panfleto/Promotores",
  "Telemarketing",
  "TV",
];

export const NewPacient = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string | undefined>("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [genre, setGenre] = useState("");
  const [priority, setPriority] = useState("");

  const [role, setRole] = useState("");
  const [scholl, setScholl] = useState("");
  const [marital, setMarital] = useState("");
  const [originPacient, setOriginPacient] = useState("");
  const [skin, setSkin] = useState("");

  //Handle Status Value
  const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setGenre(event.target.value as string);
  };

  //Handle Priority
  const handlePriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setPriority(event.target.value as string);
  };

  //Handle Role
  const handleRole = (event: any) => {
    event.stopPropagation();
    setRole(event.target.value as string);
  };

  //Handle Scholl
  const handleScholl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScholl(event.target.value as string);
  };

  //Handle Marital
  const handleMarital = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarital(event.target.value as string);
  };

  //Handle Origin
  const handleOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOriginPacient(event.target.value as string);
  };

  //Handle Skin
  const handleSkin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkin(event.target.value as string);
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
  } = useForm<FormInputsNewPacient>({
    resolver: yupResolver(schemaNewPacient),
  });

  //HandleSubmit
  const handleSubmit = (data: any) => {
    console.log(data);
    // navigate("/portaldocolaborador");
  };

  return (
    <div className="w-full">
      <ButtonBack />
      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-slate-100 shadow-xl rounded-lg text-blue-600 mb-4">
        <form onSubmit={onSubmit(handleSubmit)}>
          <h3 className="text-lg text-blue-600 font-bold mb-8">
            Dados Pessoais e Dados Médicos
          </h3>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col">
              <img
                src={preview}
                className="bg-[url('https://cdn-icons-png.flaticon.com/512/149/149071.png')] bg-cover md:w-[150px] w-full md:h-[150px] h-[300px] rounded-lg overflow-hidden bg-cover bg-center"
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
            <div className="flex flex-col gap-4 w-full justify-between">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <TextField
                  id="outlined-basic"
                  {...register("name")}
                  label="Nome Completo*"
                  variant="outlined"
                  helperText={errors?.name?.message}
                  error={errors?.name ? true : false}
                />

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

                <TextField
                  id="outlined-basic"
                  {...register("socialname")}
                  label="Nome Social"
                  variant="outlined"
                  helperText={errors?.socialname?.message}
                  error={errors?.socialname ? true : false}
                />

                <TextField
                  id="outlined-basic"
                  {...register("height")}
                  label="Altura"
                  variant="outlined"
                  helperText={errors?.height?.message}
                  error={errors?.height ? true : false}
                />

                <TextField
                  id="outlined-basic"
                  {...register("weight")}
                  label="Peso"
                  variant="outlined"
                  helperText={errors?.weight?.message}
                  error={errors?.weight ? true : false}
                />

                <TextField
                  id="outlined-basic"
                  {...register("chart")}
                  label="Prontuário"
                  variant="outlined"
                  helperText={errors?.chart?.message}
                  error={errors?.chart ? true : false}
                />

                <Box>
                  <TextField
                    {...register("priority")}
                    label="Prioridade"
                    variant="outlined"
                    value={priority}
                    onChange={handlePriority}
                    helperText={errors?.priority?.message}
                    error={errors?.priority ? true : false}
                    className="w-full"
                    select
                  >
                    {priorityOptions.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </div>
            </div>
          </div>

          {/* Personal Documents */}
          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Endereço e contatos
          </h3>
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

          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Documentos
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <TextField
              {...register("role")}
              label="Profissão"
              variant="outlined"
              value={role}
              onChange={handleRole}
              className="w-full"
            />

            <TextField
              {...register("scholling")}
              label="Escolaridade"
              variant="outlined"
              value={scholl}
              onChange={handleScholl}
              className="w-full"
              select
            >
              {schollingOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("cpf")}
              label="CPF do Paciente"
              variant="outlined"
              helperText={errors?.cpf?.message}
              error={errors?.cpf ? true : false}
            />

            <TextField
              {...register("rg")}
              label="Número da Identidade"
              variant="outlined"
            />

            <TextField
              {...register("naturalness")}
              label="Naturalidade"
              variant="outlined"
            />

            <TextField
              {...register("marital")}
              label="Estado Civil"
              variant="outlined"
              value={marital}
              onChange={handleMarital}
              className="w-full"
              select
            >
              {maritalOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("origin")}
              label="Origem"
              variant="outlined"
              value={originPacient}
              onChange={handleOrigin}
              className="w-full"
              select
            >
              {originOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("skin")}
              label="Cor da Pele"
              variant="outlined"
              value={skin}
              onChange={handleSkin}
              className="w-full"
              select
            >
              {skinOptions.map((item) => (
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

          <InsurancePacient />

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
