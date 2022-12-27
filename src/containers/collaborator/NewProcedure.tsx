//React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";

// React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Quill JS
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

//Material-ui
import { MenuItem, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

// Import's
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import {
  FormInputsNewProcedure,
  schemaNewProcedure,
} from "../../validations/NewProcedure";
import { MaterialKit } from "./MaterialKit";

//Types Selected's
const typeProcedureOptions = [
  "Cirurgia",
  "Consulta",
  "Exame",
  "Procedimento",
  "Retorno",
  "Vacina",
];

const serieOptions = ["Sim", "Não"];

const equipOptions = [
  "Atendimento Domiciliar",
  "Poltrona 1",
  "Poltrona 2",
  "Poltrona 3",
  "Sala de Curativos 1",
  "Sala de Vacina 1",
];

const groupOptions = ["Consultas", "Infusões", "Vacinas"];

const limitInsurancesOptions = [
  "Convênio 1",
  "Convênio 2",
  "Convênio 3",
  "Convênio 4",
  "Convênio 5",
  "Convênio 6",
  "Convênio 7",
  "Convênio 8",
];

const limitLocalsOptions = [
  "Local 1",
  "Local 2",
  "Local 3",
  "Local 4",
  "Local 5",
  "Local 6",
  "Local 7",
  "Local 8",
];

const limitEquipamentsOptions = [
  "Equipamentos 1",
  "Equipamentos 2",
  "Equipamentos 3",
  "Equipamentos 4",
  "Equipamentos 5",
  "Equipamentos 6",
  "Equipamentos 7",
  "Equipamentos 8",
];

export const NewProcedure = () => {
  const navigate = useNavigate();
  const { quill, quillRef } = useQuill();

  const [checked, setChecked] = React.useState(true);

  const [type, setType] = useState("");
  const [equipament, setEquipament] = useState("");
  const [group, setGroup] = useState("");

  const [limitInsurances, setLimitInsurances] = useState([]);
  const [limitLocals, setLimitLocals] = useState([]);
  const [limitEquipaments, setLimitEquipaments] = useState([]);

  const [bondEquipaments, setBondEquipaments] = useState([]);
  const [procedureComplement, setProcedureComplement] = useState([]);

  const [serie, setSerie] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  //Handle Type
  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setType(event.target.value as string);
  };

  //Handle Equipaments
  const handleEquipaments = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setEquipament(event.target.value as string);
  };

  //Handle Group
  const handleGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setGroup(event.target.value as string);
  };

  //Handle Limit Insurances
  function handleLimitInsurances(
    event: { preventDefault: () => void },
    value: any
  ) {
    event.preventDefault();
    setLimitInsurances(value);
  }

  //Handle Limit Locals
  function handleLimitLocals(
    event: { preventDefault: () => void },
    value: any
  ) {
    event.preventDefault();
    setLimitLocals(value);
  }

  //Handle Limit Equipaments
  function handleLimitEquipaments(
    event: { preventDefault: () => void },
    value: any
  ) {
    event.preventDefault();
    setLimitEquipaments(value);
  }

  //Handle Bond Equipament
  function handleBondEquipament(
    event: { preventDefault: () => void },
    value: any
  ) {
    event.preventDefault();
    setBondEquipaments(value);
  }

  //Handle procedure complement
  function handleProcedureComplement(
    event: { preventDefault: () => void },
    value: any
  ) {
    event.preventDefault();
    setProcedureComplement(value);
  }

  //Handle Serie
  const handleSerie = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setSerie(event.target.value as string);
  };

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputsNewProcedure>({
    resolver: yupResolver(schemaNewProcedure),
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
          <div className="flex w-full items-center justify-between mb-4">
            <h3 className="text-lg text-blue-600 font-bold">
              Cadastro de Serviço
            </h3>
            <FormControlLabel
              label={`${checked === true ? "Ativo" : "Desativado"}`}
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  defaultChecked
                  color="secondary"
                />
              }
            />
          </div>
          <div className="flex gap-4">
            <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-3 mb-8">
              <TextField
                id="outlined-basic"
                {...register("name")}
                label="Nome do Serviço*"
                variant="outlined"
                helperText={errors?.name?.message}
                error={errors?.name ? true : false}
              />

              <TextField
                {...register("type")}
                label="Tipo"
                variant="outlined"
                value={type}
                onChange={handleType}
                helperText={errors?.type?.message}
                error={errors?.type ? true : false}
                select
              >
                {typeProcedureOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-basic"
                {...register("price")}
                label="Valor"
                variant="outlined"
                helperText={errors?.price?.message}
                error={errors?.price ? true : false}
              />

              <TextField
                id="outlined-basic"
                {...register("duration")}
                label="Tempo"
                variant="outlined"
                helperText={errors?.duration?.message}
                error={errors?.duration ? true : false}
              />
            </div>
          </div>

          <Divider variant="middle" />

          <div className="flex gap-4">
            <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-3 my-8">
              <TextField
                id="outlined-basic"
                {...register("maxPacient")}
                label="Máx. pac. no horário"
                variant="outlined"
                helperText={errors?.maxPacient?.message}
                error={errors?.maxPacient ? true : false}
              />

              <TextField
                id="outlined-basic"
                {...register("return")}
                label="Dias para retorno"
                variant="outlined"
                helperText={errors?.return?.message}
                error={errors?.return ? true : false}
                type="number"
              />

              <TextField
                {...register("equipament")}
                label="Equipamento Padrão"
                variant="outlined"
                value={equipament}
                onChange={handleEquipaments}
                helperText={errors?.equipament?.message}
                error={errors?.equipament ? true : false}
                select
              >
                {equipOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("group")}
                label="Grupo"
                variant="outlined"
                value={group}
                onChange={handleGroup}
                helperText={errors?.group?.message}
                error={errors?.group ? true : false}
                select
              >
                {groupOptions.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-basic"
                {...register("sigla")}
                label="Sigla"
                variant="outlined"
                helperText={errors?.sigla?.message}
                error={errors?.sigla ? true : false}
              />

              <TextField
                id="outlined-basic"
                {...register("tussCode")}
                label="Código TUSS"
                variant="outlined"
                helperText={errors?.tussCode?.message}
                error={errors?.tussCode ? true : false}
              />

              <TextField
                id="outlined-basic"
                {...register("tecnicalName")}
                label="Nome Técnico do Procedimento"
                variant="outlined"
                helperText={errors?.tecnicalName?.message}
                error={errors?.tecnicalName ? true : false}
              />
            </div>
          </div>

          <Divider variant="middle" />
          <div className="flex gap-4">
            <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-3 my-8">
              <Autocomplete
                multiple
                limitTags={2}
                onChange={handleLimitInsurances}
                autoSelect
                value={limitInsurances}
                options={limitInsurancesOptions.map((option) => option)}
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
                    {...register("limitInsurances")}
                    label="Limitar Convênios"
                    variant="outlined"
                  />
                )}
              />

              <Autocomplete
                multiple
                limitTags={2}
                onChange={handleLimitLocals}
                autoSelect
                value={limitLocals}
                options={limitLocalsOptions.map((option) => option)}
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
                    {...register("limitLocals")}
                    label="Limitar Locais"
                    variant="outlined"
                  />
                )}
              />

              <Autocomplete
                multiple
                limitTags={2}
                onChange={handleLimitEquipaments}
                autoSelect
                value={limitEquipaments}
                options={limitEquipamentsOptions.map((option) => option)}
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
                    {...register("limitEquipaments")}
                    label="Limitar Equipamentos"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>

          <Divider variant="middle" />

          <div className="flex gap-4">
            <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-3 my-8">
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Permitir encaixes"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Obrigar a respeitar tempo"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Solicitar indicação clínica"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Obrigar Profissional Solicitante"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Permitir reembolso de convênio"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Obrigar autenticação por usuário com permissão para liberação de procedimentos complexos"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Não permitir duplicidade na proposta"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Não Necessita de Agendamento"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Procedimento Pacs"
              />
            </div>
          </div>

          <Divider variant="middle" />

          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Observações
          </h3>
          <div className="flex md:flex-row flex-col w-full gap-4">
            <TextField
              {...register("obs")}
              label="Observações"
              multiline
              rows={5}
              variant="outlined"
              className="w-full"
            />
            <TextField
              {...register("reminder")}
              label="Avisos e lembretes ao agendar este procedimento"
              multiline
              rows={5}
              variant="outlined"
              className="w-full"
            />
            <TextField
              {...register("textProcedure")}
              label="Texto para pedido deste procedimento"
              multiline
              rows={5}
              variant="outlined"
              className="w-full"
            />
          </div>

          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Preparo
          </h3>
          <div className="w-full mb-20 rounded-lg" style={{ height: 150 }}>
            <div ref={quillRef} />
          </div>

          <Divider variant="middle" />
          <div className="flex md:flex-row flex-col w-full gap-4 my-8">
            <TextField
              {...register("serie")}
              label="Procedimento seriado"
              variant="outlined"
              value={serie}
              onChange={handleSerie}
              className="w-full"
              select
            >
              {serieOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-basic"
              {...register("breakSerie")}
              label="Intervalo de Série"
              variant="outlined"
              helperText={errors?.breakSerie?.message}
              error={errors?.breakSerie ? true : false}
              type="number"
              className="w-full"
            />

            <TextField
              id="outlined-basic"
              {...register("refund")}
              label="CH (Reembolso)"
              variant="outlined"
              helperText={errors?.refund?.message}
              error={errors?.refund ? true : false}
              type="number"
              className="w-full"
            />
          </div>

          <Divider variant="middle" />

          <div className="flex flex-col my-8">
            <h3 className="text-lg text-blue-600 font-bold">Emitir guias em</h3>
            <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-3 mt-4">
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Consultas"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="SP/SADT"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Honorários"
              />
              <FormControlLabel
                className="bg-gray-200 px-4 py-2 rounded-lg"
                control={<Checkbox />}
                label="Internação"
              />
            </div>
          </div>

          <Divider variant="middle" />

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-8">
            <div className="flex flex-col">
              <h3 className="text-lg text-blue-600 font-bold mb-4">
                Equipamentos Vinculados
              </h3>
              <Autocomplete
                multiple
                limitTags={2}
                onChange={handleBondEquipament}
                autoSelect
                value={bondEquipaments}
                options={equipOptions.map((option) => option)}
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
                    {...register("bondEquip")}
                    label="Equipamentos Vinculado"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg text-blue-600 font-bold mb-4">
                Complemento do Procedimento
              </h3>
              <Autocomplete
                multiple
                limitTags={2}
                onChange={handleProcedureComplement}
                autoSelect
                disabled
                value={procedureComplement}
                options={serieOptions.map((option) => option)}
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
                    {...register("procedureComplement")}
                    label="Complemento do Procedimento"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>

          <Divider variant="middle" />

          <MaterialKit />

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
