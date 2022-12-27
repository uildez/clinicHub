//Raect
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack";

// React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//Material-ui
import { MenuItem, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

// Import's
import {
  FormInputsNewStorage,
  schemaNewStorage,
} from "../../validations/NewStorage";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

//Types Selected's
const genres = ["Masculino", "Feminino", "Outro", "Não quero declarar"];
const typeOptions = ["Geral", "Produto", "Material", "Medicamento"];
const categoryOptions = [
  "Material de Escritório",
  "Material de Limpeza",
  "Material Hospitalar",
  "Medicamento",
  "Serviço",
  "Taxas e Aluguéis",
  "Vacinas",
];

const manufacturerOptions = [
  "Fabricante 1",
  "Fabricante 2",
  "Fabricante 3",
  "Fabricante 4",
  "Fabricante 5",
  "Fabricante 6",
  "Fabricante 7",
  "Fabricante 8",
  "Fabricante 9",
  "Fabricante 10",
  "Fabricante 11",
  "Fabricante 12",
];

const loteOptions = [
  "Lote 1",
  "Lote 2",
  "Lote 3",
  "Lote 4",
  "Lote 5",
  "Lote 6",
  "Lote 7",
  "Lote 8",
];

const validityOptions = [
  "dd/mm/aaaa",
  "dd/mm/aaaa",
  "dd/mm/aaaa",
  "dd/mm/aaaa",
  "dd/mm/aaaa",
  "dd/mm/aaaa",
];

const unitOptions = [
  "001 - Ampola",
  "002 - Bilhões de Unidades Internacionais",
  "003 - Bisnaga",
  "004 - Bolsa",
  "005 - Caixa",
  "006 - Cápsula",
  "007 - Carpule",
  "008 - Comprimido",
  "009 - Dose",
  "010 - Drágea",
  "011 - Envelope",
  "012 - Flaconete",
  "013 - Frasco",
  "014 - Frasco Ampola",
  "Outros - Até 0050",
];
const locationOptions = [
  "Estoque 1",
  "Estoque 2",
  "Estoque 3",
  "Estoque 4",
  "Estoque 5",
  "Estoque 6",
];
const cdOptions = [
  "01 - Gases Medicinais",
  "02 - Medicamentos",
  "03 - Materiais",
  "07 - Taxas e Aluguéis",
  "08 - OPME",
  "09 - Suplemento",
];

const unitPrescriptionOptions = [
  "AUC",
  "Cápsula",
  "Comprimido",
  "Frasco-Ampola",
  "Grama",
  "MG Carboplatina",
  "Microgramas",
  "Miligramas",
  "Miligrama/Metro quadrado",
  "Miligrama/Quilograma",
  "Mililitros",
  "Mui",
  "UI",
  "UI/m²",
];
const activePrincipleOptions = [
  "Componente 1",
  "Componente 2",
  "Componente 3",
  "Componente 4",
  "Componente 5",
  "Componente 6",
  "Componente 7",
  "Componente 8",
];

const units = ["Unidade (U)", "Unidade (A)"];

const columns: GridColDef[] = [
  {
    field: "lote",
    headerClassName: "super-app-theme--header",
    headerName: "Lote",
    width: 180,
  },
  {
    field: "validade",
    headerName: "Validade",
    width: 200,
    align: "left",
    type: "date",
  },
  {
    field: "individualCode",
    headerName: "Código Individual",
    width: 220,
    align: "left",
  },
  {
    field: "location",
    headerName: "Localização",
    width: 150,
    align: "left",
  },
  {
    field: "responsible",
    headerName: "Responsável",
    width: 150,
    align: "left",
  },
  {
    field: "amount",
    headerName: "Quantidade",
    width: 150,
    align: "left",
  },
  {
    field: "averageValue",
    headerName: "Preço Médio",
    width: 200,
    align: "left",
  },
];

export const NewStorage = () => {
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState<any[]>([]);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string | undefined>("");

  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [lote, setLote] = useState("");
  const [validity, setValidity] = useState("");
  const [unit, setUnit] = useState("");
  const [location, setLocation] = useState("");
  const [cd, setCd] = useState("");
  const [unitDispensation, setUnitDispensation] = useState("");
  const [unitPrescription, setUnitPrescription] = useState("");
  const [activePrinciple, setActivePrinciple] = useState("");

  //Handle Type
  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setType(event.target.value as string);
  };

  //Handle Category
  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setCategory(event.target.value as string);
  };

  //Handle Manufacturer
  const handleManufacturer = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setManufacturer(event.target.value as string);
  };

  //Handle Lote
  function handleLote(event: { preventDefault: () => void }, value: any) {
    event.preventDefault();
    setLote(value);
  }

  //Handle Validity
  function handleValidity(event: { preventDefault: () => void }, value: any) {
    event.preventDefault();
    setValidity(value);
  }

  //Handle Unit
  const handleUnit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setUnit(event.target.value as string);
  };

  //Handle Location
  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setLocation(event.target.value as string);
  };

  //Handle Cd
  const handleCd = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setCd(event.target.value as string);
  };

  //Handle Unit Dispensation
  const handleUnitDispensation = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();
    setUnitDispensation(event.target.value as string);
  };

  //Handle Unit Prescription
  const handleUnitPrescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();
    setUnitPrescription(event.target.value as string);
  };

  //Handle Active Principle
  const handleActivePrinciple = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation();
    setActivePrinciple(event.target.value as string);
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
  } = useForm<FormInputsNewStorage>({
    resolver: yupResolver(schemaNewStorage),
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
          <h3 className="text-lg text-blue-600 font-bold mb-4">
            Cadastro de Novo Produto
          </h3>
          <div className="flex md:flex-row flex-col gap-4 mb-8">
            <div className="flex flex-col md:w-1/5 w-full">
              <img
                src={preview}
                className="bg-[url('https://cdn-icons-png.flaticon.com/512/149/149071.png')] bg-cover w-full md:h-full min-h-[100px] rounded-lg overflow-hidden bg-cover bg-center"
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
            <div className="flex flex-col gap-4 md:w-4/5 w-full">
              <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
                <TextField
                  id="outlined-basic"
                  {...register("name")}
                  label="Nome*"
                  variant="outlined"
                  helperText={errors?.name?.message}
                  error={errors?.name ? true : false}
                />

                <TextField
                  {...register("type")}
                  label="Tipo*"
                  variant="outlined"
                  value={type}
                  onChange={handleType}
                  helperText={errors?.type?.message}
                  error={errors?.type ? true : false}
                  className="w-full"
                  select
                >
                  {typeOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-basic"
                  {...register("code")}
                  label="Código"
                  variant="outlined"
                  helperText={errors?.code?.message}
                  error={errors?.code ? true : false}
                />

                <TextField
                  {...register("category")}
                  label="Categoria"
                  variant="outlined"
                  value={category}
                  onChange={handleCategory}
                  helperText={errors?.category?.message}
                  error={errors?.category ? true : false}
                  className="w-full"
                  select
                >
                  {categoryOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  {...register("manufacturer")}
                  label="Fabricante"
                  variant="outlined"
                  value={manufacturer}
                  onChange={handleManufacturer}
                  helperText={errors?.manufacturer?.message}
                  error={errors?.manufacturer ? true : false}
                  className="w-full"
                  select
                >
                  {manufacturerOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <Autocomplete
                  limitTags={1}
                  onChange={handleLote}
                  autoSelect
                  value={lote}
                  options={loteOptions.map((option) => option)}
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
                      {...register("lote")}
                      label="Lote"
                      variant="outlined"
                    />
                  )}
                />

                <Autocomplete
                  limitTags={1}
                  onChange={handleValidity}
                  autoSelect
                  value={validity}
                  options={validityOptions.map((option) => option)}
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
                      {...register("validity")}
                      label="Validade"
                      variant="outlined"
                    />
                  )}
                />

                <TextField
                  id="outlined-basic"
                  {...register("apresentation")}
                  label="Apresentação*"
                  variant="outlined"
                  helperText={errors?.apresentation?.message}
                  error={errors?.apresentation ? true : false}
                />

                <TextField
                  id="outlined-basic"
                  {...register("containing")}
                  label="Contendo*"
                  variant="outlined"
                  helperText={errors?.containing?.message}
                  error={errors?.containing ? true : false}
                />

                <TextField
                  {...register("unit")}
                  label="Unidade"
                  variant="outlined"
                  value={unit}
                  onChange={handleUnit}
                  helperText={errors?.unit?.message}
                  error={errors?.unit ? true : false}
                  className="w-full"
                  select
                >
                  {unitOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  {...register("location")}
                  label="Localização Padrão"
                  variant="outlined"
                  value={location}
                  onChange={handleLocation}
                  helperText={errors?.location?.message}
                  error={errors?.location ? true : false}
                  className="w-full"
                  select
                >
                  {locationOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  {...register("cd")}
                  label="CD"
                  variant="outlined"
                  value={cd}
                  onChange={handleCd}
                  helperText={errors?.cd?.message}
                  error={errors?.cd ? true : false}
                  className="w-full"
                  select
                >
                  {cdOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>

          {/* ---------------------------- Location Info ---------------------------- */}
          <h3 className="text-lg text-blue-600 font-bold mt-4 mb-0">
            Dispensação
          </h3>

          <div className="grid md:grid-cols-4 gap-3 mb-8">
            <TextField
              {...register("apresentationDispensation")}
              label="Apresentação*"
              variant="outlined"
              helperText={errors?.apresentationDispensation?.message}
              error={errors?.apresentationDispensation ? true : false}
            />

            <TextField
              {...register("containingDispensation")}
              label="Contendo*"
              variant="outlined"
              helperText={errors?.containingDispensation?.message}
              error={errors?.containingDispensation ? true : false}
            />

            <TextField
              {...register("unitDispensation")}
              label="Unidade"
              variant="outlined"
              value={unitDispensation}
              onChange={handleUnitDispensation}
              className="w-full"
              select
            >
              {unitOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("minDose")}
              label="Dose Mín."
              variant="outlined"
            />

            <TextField
              {...register("maxDose")}
              label="Dose Máx."
              variant="outlined"
            />

            <TextField
              {...register("unitPrescription")}
              label="Unidade para Prescrição"
              variant="outlined"
              value={unitPrescription}
              onChange={handleUnitPrescription}
              className="w-full"
              select
            >
              {unitPrescriptionOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              {...register("activePrinciple")}
              label="Princípio Ativo"
              variant="outlined"
              value={activePrinciple}
              onChange={handleActivePrinciple}
              className="w-full"
              select
            >
              {activePrincipleOptions.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <Divider />

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full my-8">
            <TextField
              {...register("minStorage")}
              label="Estoque Mínimo"
              variant="outlined"
              type="number"
            />

            <TextField
              {...register("maxStorage")}
              label="Estoque Máximo"
              variant="outlined"
              type="number"
            />
          </div>

          <Divider />

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full my-8">
            <div className="flex md:flex-row flex-col gap-4 items-center">
              <TextField
                {...register("priceTicket")}
                label="Preço Médio - Compra"
                variant="outlined"
                type="number"
                className="md:w-2/4 w-full"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
              />
              <div className="flex md:flex-col flex-row">
                <FormControlLabel
                  control={<Checkbox />}
                  label="por Unidade (A)"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="por Unidade (U)"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4 items-center">
              <TextField
                {...register("saleTicket")}
                label="Preço Médio - Venda"
                variant="outlined"
                type="number"
                className="md:w-2/4 w-full"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
              />
              <div className="flex md:flex-col flex-row">
                <FormControlLabel
                  control={<Checkbox />}
                  label="por Unidade (A)"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="por Unidade (U)"
                />
              </div>
            </div>
          </div>

          <Divider />

          <div className="w-full h-[300px] mt-8 py-4">
            <DataGrid
              rows={inputFields}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[7]}
            />
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
