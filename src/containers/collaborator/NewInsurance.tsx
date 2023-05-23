//React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";

// React-hook-form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//Material-ui
import { MenuItem, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

// Import's
import { FormControlLabel, InputAdornment, Switch } from "@mui/material";
import { AgreementContracts } from "../../components/employee/AgreementContracts";
import {
  FormInputsNewInsurance,
  schemaNewInsurance,
} from "../../validations/NewInsurance";

//Types Selected's
const typeReceiptOptions = [
  "Dias Corridos",
  "Dia do Mês Fixos",
  "Dia Fixo do Mês Subsequente",
  "Dia Fixo do 3º mês",
  "5º Dia Útil do Mês Subsequente ou do Segundo Mês",
  "Último dia util do mês vigente",
];

const tissVersionOptions = [
  "2.02.01",
  "3.02.01",
  "3.02.02",
  "3.02.03",
  "3.03.00",
  "3.03.01",
  "3.03.02",
  "3.03.03",
  "3.04.01",
  "3.05.00",
];

const escalationOptions = ["Consultas", "Infusões", "Vacinas"];
const calculationOptions = ["R$", "CH", "UCO", "PORTE", "FILME"];

const materialsOptions = [
  "Outras tabelas",
  "AMB-90 - Associação Médica Brasileira",
  "AMB 92 - Associação Médica Brasileira",
  "AMB 96 - Associação Médica Brasileira",
  "AMB 99 - Associação Médica Brasileira",
  "Brasindice",
  "CBHPM - Classificação Brasileira Hierarquizada de Procedimentos Médicos",
  "CIEFAS 93 - Comitê de Integração de Entidades Fechadas de Assistência a Saúde",
  "CIEFAS 2000 - Comitê de Integração de Entidades Fechadas de Assistência a Saúde",
  "ANS - Rol de procedimentos ANS",
  "SUS Ambulatorial - Tabela de procedimentos ambulatoriais SUS",
  "SUS Hospitalar - Tabela de procedimentos hospitalares SUS",
  "SIMPRO - Instituto Brasileiro para Simplificação de Procedimentos Mercantis",
  "TUNEP - Tabela Única Nacional de Equivalência de Procedimentos",
  "VRPO - Valores Referenciais para Procedimentos Odontológicos",
  "Uniodonto - Tabela de Intercâmbio Sistema Uniodonto",
  "TUSS - Procedimentos Médicos",
  "TUSS - Procedimentos Odontológicos",
  "TUSS – Taxas hospitalares",
  "TUSS – Materiais",
  "TUSS - Medicamentos",
  "TUSS – Outras áreas da saúde",
  "TUSS - Procedimentos e eventos em saúde (medicina, odonto e demais áreas de saúde)",
  "Tabela de Materiais Especiais",
  "Tabela Própria Procedimentos não médicos",
  "Tabela Própria Pacote Odontológico",
  "Tabela provisória TUSS",
  "Tabela provisória TUSS - Procedimentos Odontológicos",
  "Tabela Provisória TUSS – Procedimentos Médicos",
  "Tabela Própria Materiais",
  "Tabela Própria Medicamentos",
  "Tabela Própria de Pacotes",
  "Tabela Própria das Operadoras",
];

const procedureOptions = [
  "Tabela AMB 92",
  "97 - Tabela Própria Taxas TRT",
  "Outras Tabelas",
  "Consulta de Infectologia",
  "0 - Outras Tabelas (Central)",
  "1 - CBHPM 2012 (Central)",
  "2 - CBHPM 2010 (Central)",
  "20 - TUSS - Medicamentos (Central)",
  "22 - TUSS - Procedimentos e eventos em saúde (medicina, odonto e demais áreas de saúde) (Central)",
  "40 - CBHPM 2005 (Central)",
  "50 - CBHPM 2008 (Central)",
  "51 - CBHPM 2009 (Central)",
  "90 - Tabela Própria Pacote Odontológico (Central)",
  "94 - Tabela Própria Procedimentos (Central)",
  "98 - Tabela Própria de Pacotes (Central)",
  "99 - Tabela Própria das Operadoras (Central)",
];

const calculationTableOptions = [
  "Tabela AMB 92",
  "97 - Tabela Própria Taxas TRT",
  "Outras Tabelas",
  "Consulta de Infectologia",
  "CBHPM 2012 (Central)",
  "CBHPM 2010 (Central)",
  "TUSS - Medicamentos (Central)",
  "CBHPM 2005 (Central)",
  "CBHPM 2008 (Central)",
  "CBHPM 2009 (Central)",
];

const sizeTableOptions = [
  "CBHPM Portes 10/2012",
  "CBHPM Portes 10/2010",
  "CBHPM Portes 10/2008 (5. edição)",
  "CBHPM Portes 10/2009 (5. edição)",
  "CBHPM Portes 10/2005 (4. edição)",
];

export const NewInsurance = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(true);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string | undefined>("");

  const [typeReceipt, setTypeReceipt] = useState("");
  const [tissVersion, setTissVersion] = useState("");

  const [escalation, setEscalation] = useState([]);
  const [calculation, setCalculation] = useState([]);

  // Insurance Tables
  const [materials, setMaterials] = useState("");
  const [medicines, setMedicines] = useState("");
  const [taxes, setTaxes] = useState("");
  const [movies, setMovies] = useState("");
  const [procedures, setProcedures] = useState("");
  const [calculationTable, setCalculationTable] = useState("");
  const [sizeTable, setSizeTable] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  //Handle Type Receipt
  const handleTypeReceipt = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setTypeReceipt(event.target.value as string);
  };

  //Handle Tiss Version
  const handleTissVersion = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setTissVersion(event.target.value as string);
  };

  //Handle Escalation
  function handleEscalation(event: { preventDefault: () => void }, value: any) {
    event.preventDefault();
    setEscalation(value);
  }

  //Handle Calculation
  function handleCalculation(
    event: { preventDefault: () => void },
    value: any
  ) {
    event.preventDefault();
    setCalculation(value);
  }

  //Handle Materials
  const handleMaterials = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setMaterials(event.target.value as string);
  };

  //Handle Medicines
  const handleMedicines = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setMedicines(event.target.value as string);
  };

  //Handle Taxes
  const handleTaxe = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setTaxes(event.target.value as string);
  };

  //Handle Movies
  const handleMovies = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setMovies(event.target.value as string);
  };

  //Handle Procedures
  const handleProcedures = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setProcedures(event.target.value as string);
  };

  //Handle Calculation table
  const handleCalculationTable = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();
    setCalculationTable(event.target.value as string);
  };

  //Handle Size Table
  const handleSizeTable = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setSizeTable(event.target.value as string);
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
  } = useForm<FormInputsNewInsurance>({
    resolver: yupResolver(schemaNewInsurance),
  });

  //HandleSubmit
  const handleSubmit = (data: any) => {
    console.log(data);
    // navigate("/portaldocolaborador");
  };

  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">
      <ButtonBack />
      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-white shadow-xl rounded-lg text-blue-600 mb-4">
        <form onSubmit={onSubmit(handleSubmit)}>
          <div className="flex w-full items-center justify-between mb-4">
            <h3 className="text-lg text-blue-600 font-bold mb-4">
              Cadastro de Convênio
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
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex flex-col">
              <img
                src={preview}
                className="bg-[url('https://cdn-icons-png.flaticon.com/512/149/149071.png')] md:w-[150px] w-full md:h-[150px] h-[300px] rounded-lg overflow-hidden bg-cover bg-center"
              />
              <label className="flex flex-col text-base text-white w-full gap-2 font-medium py-1 bg-blue-600 cursor-pointer items-center justify-center rounded-br-lg rounded-bl-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out">
                Carregar Marca
                <TextField
                  id="inputTag"
                  type="file"
                  {...register("file")}
                  onChange={onSelectFile}
                  style={{ display: "none" }}
                  className="w-full"
                />
                <span className="text-black"></span>
              </label>
            </div>
            <div className="flex flex-col gap-4 md:w-4/5 w-full justify-between">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <TextField
                  id="outlined-basic"
                  {...register("name")}
                  label="Nome*"
                  variant="outlined"
                  helperText={errors?.name?.message}
                  error={errors?.name ? true : false}
                  className="w-full"
                />

                <TextField
                  id="outlined-basic"
                  {...register("corporateName")}
                  label="Razão Social"
                  variant="outlined"
                  helperText={errors?.corporateName?.message}
                  error={errors?.corporateName ? true : false}
                  className="w-full"
                />

                <TextField
                  id="outlined-basic"
                  {...register("cnpj")}
                  label="CNPJ"
                  variant="outlined"
                  helperText={errors?.cnpj?.message}
                  error={errors?.cnpj ? true : false}
                  className="w-full"
                />

                <TextField
                  id="outlined-basic"
                  {...register("ans")}
                  label="Reg. na ANS"
                  variant="outlined"
                  helperText={errors?.ans?.message}
                  error={errors?.ans ? true : false}
                  className="w-full"
                />

                <TextField
                  id="outlined-basic"
                  {...register("queryReturn")}
                  label="Retorno Consulta"
                  variant="outlined"
                  helperText={errors?.queryReturn?.message}
                  error={errors?.queryReturn ? true : false}
                  type="number"
                  className="w-full"
                />

                <TextField
                  {...register("typeReceipt")}
                  label="Tipo Recebimento"
                  variant="outlined"
                  value={typeReceipt}
                  onChange={handleTypeReceipt}
                  helperText={errors?.typeReceipt?.message}
                  error={errors?.typeReceipt ? true : false}
                  select
                  className="w-full"
                >
                  {typeReceiptOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-basic"
                  {...register("receipt")}
                  label="Dia do Recebimento"
                  variant="outlined"
                  helperText={errors?.receipt?.message}
                  error={errors?.receipt ? true : false}
                  type="number"
                  className="w-full"
                />

                <TextField
                  id="outlined-basic"
                  {...register("guideNumber")}
                  label="Nº da Guia Atual"
                  variant="outlined"
                  helperText={errors?.guideNumber?.message}
                  error={errors?.guideNumber ? true : false}
                  className="w-full"
                />

                <TextField
                  {...register("tissVersion")}
                  label="Versão da TISS"
                  variant="outlined"
                  value={tissVersion}
                  onChange={handleTissVersion}
                  helperText={errors?.tissVersion?.message}
                  error={errors?.tissVersion ? true : false}
                  select
                  className="w-full"
                >
                  {tissVersionOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>

          {/* ---------------------------- Location Info ---------------------------- */}
          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Endereço
          </h3>
          <div className="grid md:grid-cols-4 gap-3">
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

            <TextField
              {...register("city")}
              label="Cidade"
              variant="outlined"
            />

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

          {/* ---------------------------- Location Info ---------------------------- */}
          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Contatos
          </h3>
          <div className="grid md:grid-cols-4 gap-3">
            <TextField
              label="Nome do Responsável"
              {...register("personContact")}
              variant="outlined"
            />

            <TextField
              {...register("setor")}
              label="Setor"
              variant="outlined"
            />

            <TextField
              {...register("phone")}
              label="Telefone"
              variant="outlined"
              helperText={errors?.phone?.message}
              error={errors?.phone ? true : false}
            />

            <TextField
              {...register("email")}
              label="Email"
              variant="outlined"
              helperText={errors?.email?.message}
              error={errors?.email ? true : false}
            />

            <TextField
              label="Nome do Responsável"
              {...register("personContact2")}
              variant="outlined"
            />

            <TextField
              {...register("setor2")}
              label="Setor"
              variant="outlined"
            />

            <TextField
              {...register("phone2")}
              label="Telefone"
              variant="outlined"
              helperText={errors?.phone?.message}
              error={errors?.phone ? true : false}
            />

            <TextField
              {...register("email2")}
              label="Email"
              variant="outlined"
              helperText={errors?.email?.message}
              error={errors?.email ? true : false}
            />

            <TextField
              label="Nome do Responsável"
              {...register("personContact3")}
              variant="outlined"
            />

            <TextField
              {...register("setor3")}
              label="Setor"
              variant="outlined"
            />

            <TextField
              {...register("phone3")}
              label="Telefone"
              variant="outlined"
              helperText={errors?.phone?.message}
              error={errors?.phone ? true : false}
            />

            <TextField
              {...register("email3")}
              label="Email"
              variant="outlined"
              helperText={errors?.email?.message}
              error={errors?.email ? true : false}
            />
          </div>

          {/* Insurance Taxes */}
          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Taxas do Convênio
          </h3>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <TextField
              {...register("secondProcedure")}
              label="% do 2° Procedimento"
              variant="outlined"
              type="number"
            />

            <TextField
              {...register("thirdProcedure")}
              label="% do 3° Procedimento"
              variant="outlined"
              type="number"
            />

            <TextField
              {...register("fourthProcedure")}
              label="% do 4° Procedimento"
              variant="outlined"
              type="number"
            />

            <Autocomplete
              multiple
              limitTags={1}
              onChange={handleEscalation}
              autoSelect
              value={escalation}
              options={escalationOptions.map((option) => option)}
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
                  {...register("escalation")}
                  label="Limitar Grupo de Escalonamento"
                  variant="outlined"
                />
              )}
            />

            <Autocomplete
              multiple
              limitTags={1}
              onChange={handleCalculation}
              autoSelect
              value={calculation}
              options={calculationOptions.map((option) => option)}
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
                  {...register("calculationUnit")}
                  label="Unidade de Cálculo"
                  variant="outlined"
                />
              )}
            />

            <TextField
              {...register("valueCH")}
              label="Valor do CH"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />

            <TextField
              {...register("valueUCO")}
              label="Valor da UCO"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />

            <TextField
              {...register("valueMovie")}
              label="Valor m² do Filme"
              variant="outlined"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
          </div>

          {/* Insurance Tables */}
          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Tabelas Padrão
          </h3>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
            <TextField
              {...register("materials")}
              label="Materiais"
              variant="outlined"
              value={materials}
              onChange={handleMaterials}
              helperText={errors?.materials?.message}
              error={errors?.materials ? true : false}
              select
            >
              {materialsOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("medicines")}
              label="Medicamentos"
              variant="outlined"
              value={medicines}
              onChange={handleMedicines}
              helperText={errors?.medicines?.message}
              error={errors?.medicines ? true : false}
              select
            >
              {materialsOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("taxes")}
              label="Taxas"
              variant="outlined"
              value={taxes}
              onChange={handleTaxe}
              helperText={errors?.taxes?.message}
              error={errors?.taxes ? true : false}
              select
            >
              {materialsOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("movies")}
              label="Filmes"
              variant="outlined"
              value={movies}
              onChange={handleMovies}
              helperText={errors?.movies?.message}
              error={errors?.movies ? true : false}
              select
            >
              {materialsOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("procedures")}
              label="Procedimentos"
              variant="outlined"
              value={procedures}
              onChange={handleProcedures}
              helperText={errors?.procedures?.message}
              error={errors?.procedures ? true : false}
              select
            >
              {procedureOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("calculationTable")}
              label="Tabela de Cálculos"
              variant="outlined"
              value={calculationTable}
              onChange={handleCalculationTable}
              helperText={errors?.calculationTable?.message}
              error={errors?.calculationTable ? true : false}
              select
            >
              {calculationTableOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("sizeTable")}
              label="Tabela de Porte"
              variant="outlined"
              value={sizeTable}
              onChange={handleSizeTable}
              helperText={errors?.sizeTable?.message}
              error={errors?.sizeTable ? true : false}
              select
            >
              {sizeTableOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <AgreementContracts />
          {/* <PlansInsurance /> */}

          <h3 className="text-lg text-blue-600 font-bold mt-12 mb-4">
            Observações
          </h3>
          <div
            className="w-full md:mb-12 mb-28 rounded-lg"
            style={{ height: 150 }}
          >
            <h1>Rich Text</h1>
          </div>

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
