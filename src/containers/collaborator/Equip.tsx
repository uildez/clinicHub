import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ButtonBack } from "../../components/ButtonBack";
import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material/styles";
import "@mui/styles";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme { }
}

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: { main: "#1976d2" },
    },
  })
);

const frequencies = ["Fixo", "Móvel"];

const columns: GridColDef[] = [
  {
    field: "patrimony",
    headerClassName: "super-app-theme--header",
    headerName: "Patrimônio",
    width: 150,
  },
  {
    field: "name",
    headerName: "Equipamento",
    width: 220,
    align: "left",
  },
  {
    field: "disp",
    headerName: "Fixo/Móvel",
    width: 190,
    align: "left",
  },
  {
    field: "local",
    headerName: "Local do Equipamento",
    width: 250,
    align: "left",
    renderCell: (params) => {
      if (params.row.disp === "Móvel") {
        return (
          <p className="bg-yellow-400 py-1 px-4 font-bold text-white rounded-full">
            Não possui local Fixo
          </p>
        );
      } else {
        return (
          <p className="bg-green-400 py-1 px-4 font-bold text-white rounded-full">
            {params.row.local}
          </p>
        );
      }
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
        <span className="flex gap-2 items-center w-[30px] h-[30px] text-sm text-white bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all ease-in-out">
          <i className="fa-solid fa-trash mx-auto"></i>
        </span>
      );
    },
  },
];

export const Equip = () => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [patrimony, setPatrimony] = useState("");
  const [name, setName] = useState("");
  const [disp, setDisp] = useState("");
  const [local, setLocal] = useState("");

  //Handle patrimony
  const handlePatrimony = (event: any) => {
    setPatrimony(event.target.value);
  };

  //Handle Name
  const handleName = (event: any) => {
    setName(event.target.value);
  };

  //Handle Disp
  const handleDisp = (event: any) => {
    setDisp(event.target.value);
  };

  //Handle local
  const handleLocal = (event: any) => {
    setLocal(event.target.value);
  };

  //Hanlde Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        patrimony: patrimony,
        name: name,
        disp: disp,
        local: local,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <>
      <ButtonBack />
      <div className="flex flex-col bg-slate-100 shadow-xl h-auto rounded-xl p-8">
        <h1 className="text-base font-semibold mb-4 text-blue-600">
          Adicionar Equipamento
        </h1>
        <form>
          <div className="flex md:flex-row flex-col w-full justify-between gap-4">
            <TextField
              id="outlined-basic"
              label="Patrimônio"
              variant="outlined"
              value={patrimony}
              onChange={(event) => handlePatrimony(event)}
              className="w-full"
            />

            <TextField
              id="outlined-basic"
              label="Equipamento"
              variant="outlined"
              value={name}
              className="w-full"
              onChange={(event) => handleName(event)}
            />

            <TextField
              label="Fixo/Móvel"
              variant="outlined"
              value={disp}
              onChange={(event) => handleDisp(event)}
              className="w-full"
              select
            >
              {frequencies.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            {disp === "Fixo" ? (
              <>
                <TextField
                  id="outlined-basic"
                  label="Local"
                  variant="outlined"
                  value={local}
                  onChange={(event) => handleLocal(event)}
                  className="w-full"
                />
              </>
            ) : (
              <></>
            )}

            <span
              onClick={handleSubmit}
              className="flex bg-blue-600 text-white text-xl min-w-[55px] min-h-[55px] justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
            >
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </form>
        <div className="w-full h-[300px] mt-8">
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <DataGrid
                rows={inputFields}
                columns={columns}
                pagination={true}
                autoHeight={true}
                pageSizeOptions={[7]}
              />
            </ThemeProvider>
          </StyledEngineProvider>
        </div>
      </div>
    </>
  );
};
