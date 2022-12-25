import { useState } from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const unitsOptions = [
  "Unidade 1",
  "Unidade 2",
  "Unidade 3",
  "Unidade 4",
  "Unidade 5",
  "Unidade 6",
  "Unidade 7",
];

const screensOptions = [
  "Agendamento",
  "Pacientes",
  "Colaboradores",
  "Convênios",
  "Equipamentos",
  "Serviços",
  "Estoque",
  "Guias",
  "Receituário",
  "Financeiro",
];

const columns: GridColDef[] = [
  {
    field: "name",
    headerClassName: "super-app-theme--header",
    headerName: "Nome do Perfil",
    align: "left",
    headerAlign: "left",
    width: 180,
  },
  {
    field: "units",
    headerClassName: "super-app-theme--header",
    headerName: "Unidades de Acesso",
    align: "left",
    headerAlign: "left",
    width: 280,
    renderCell: (params) => {
      const items = params.row.units;

      return (
        <div className="grid grid-cols-3 gap-2">
          {items.map((item: any) => {
            return (
              <span className="text-white bg-gray-400 px-2 py-1 rounded-full w-fit">
                {item}
              </span>
            );
          })}
        </div>
      );
    },
  },
  {
    field: "screens",
    headerClassName: "super-app-theme--header",
    headerName: "Telas de Acesso",
    align: "left",
    headerAlign: "left",
    width: 450,
    renderCell: (params) => {
      const items = params.row.screens;

      return (
        <div className="my-4 grid grid-cols-4 gap-2">
          {items.map((item: any) => {
            return (
              <span className="text-white bg-gray-400 px-2 py-1 rounded-full text-center">
                {item}
              </span>
            );
          })}
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Deletar",
    width: 90,
    align: "left",
    description: "Clique no botão para editar as informações do paciente.",
    renderCell: (params) => {
      return (
        <button className="flex gap-2 items-center justify-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
          <i className="fa-solid fa-trash"></i>
        </button>
      );
    },
  },
];

export const AcessTable = () => {
  const [inputFields, setInputFields] = useState<any[]>([
    {
      id: 1,
      name: "Administrador",
      units: ["Unidade 1", "Unidade 2", "Unidade 3", "Unidade 4"],
      screens: [
        "Agendamento",
        "Pacientes",
        "Colaboradores",
        "Convênios",
        "Equipamentos",
        "Serviços",
        "Estoque",
        "Guias",
        "Receituário",
        "Financeiro",
      ],
    },
  ]);

  const [name, setName] = useState("");
  const [units, setUnits] = useState([]);
  const [screens, setScreens] = useState([]);

  const handleName = (event: any) => {
    setName(event.target.value as string);
  };

  //Handle Specs
  function handleUnits(event: { preventDefault: () => void }, value: any) {
    event.preventDefault();
    setUnits(value);
  }

  //Handle Screens
  function handleScreens(event: { preventDefault: () => void }, value: any) {
    event.preventDefault();
    setScreens(value);
  }

  //Handle Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        name,
        units,
        screens,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg mt-4 overflow-hidden">
      <h1 className="text-base font-semibold bg-gray-300 p-4 mb-4">
        Perfis de
      </h1>
      <form className="w-full">
        <div className="flex md:flex-row flex-col w-full justify-between gap-2 px-4">
          <TextField
            label="Nome do Perfil"
            variant="outlined"
            value={name}
            onChange={(event) => handleName(event)}
            className="w-full"
          />

          <Autocomplete
            className="w-full"
            multiple
            limitTags={1}
            onChange={handleUnits}
            autoSelect
            value={units}
            options={unitsOptions.map((option) => option)}
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
                label="Unidades de Acesso"
                variant="outlined"
              />
            )}
          />

          <Autocomplete
            className="w-full"
            multiple
            limitTags={1}
            onChange={handleScreens}
            autoSelect
            value={screens}
            options={screensOptions.map((option) => option)}
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
                label="Telas de Acesso"
                variant="outlined"
              />
            )}
          />
          <span
            onClick={handleSubmit}
            className="flex bg-blue-600 text-white text-base min-w-[55px] text-center justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
          >
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </form>
      <div className="w-full h-[300px] mt-8 px-4 py-4">
        <DataGrid
          rows={inputFields}
          columns={columns}
          getRowHeight={() => "auto"}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    </div>
  );
};
