import { useState, useEffect } from "react";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

import { createTheme, ThemeProvider, Theme, StyledEngineProvider, adaptV4Theme } from "@mui/material/styles";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme(adaptV4Theme({
  palette: {
    primary: { main: "#1976d2" },
  },
}, ptBR));

const columns: GridColDef[] = [
  {
    field: "specs",
    headerClassName: "super-app-theme--header",
    headerName: "Especialidade",
    width: 250,
  },
  {
    field: "rqe",
    headerClassName: "super-app-theme--header",
    headerName: "Código da Profissão",
    width: 350,
  },
  {
    field: "textObs",
    headerClassName: "super-app-theme--header",
    headerName: "Observações",
    width: 350,
  },
  {
    field: "actions",
    headerName: "Deletar",
    width: 90,
    align: "left",
    description: "Clique no botão para editar as informações do paciente.",
    renderCell: (params) => {
      return (
        <span className="flex gap-2 items-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
          <i className="fa-solid fa-user-pen mx-auto"></i>
        </span>
      );
    },
  },
];

export const SpecsAdd = (role: any) => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [specs, setSpecs] = useState("");
  const [rqe, setRqe] = useState("");
  const [textObs, setTextObs] = useState("");
  //Handle Specialities
  const handleSpecs = (event: any) => {
    setSpecs(event.target.value as string);
  };

  //Handle RQE
  const handleRqe = (event: any) => {
    setRqe(event.target.value as string);
  };

  //Handle Observation
  const handleObs = (event: any) => {
    setTextObs(event.target.value as string);
  };

  useEffect(() => {
    setInputFields([]);
  }, [role]);

  //Hanlde Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        specs: specs,
        rqe: rqe,
        textObs: textObs,
      },
    ]);
    // console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg mt-4 overflow-hidden">
      <h1 className="text-base font-semibold bg-gray-300 p-4 mb-4">
        Adicionar Especialidades
      </h1>
      <form className="w-full">
        <div className="flex md:flex-row flex-col w-full justify-between gap-2 px-4">
          <TextField
            label="Escreva a Especialidade"
            variant="outlined"
            value={specs}
            onChange={(event) => handleSpecs(event)}
            className="w-full"
          />

          {role.role === "Médico" ? (
            <>
              <TextField
                label="CRM"
                variant="outlined"
                value={rqe}
                onChange={(event) => handleRqe(event)}
                className="w-full"
              />
            </>
          ) : (
            <></>
          )}

          {role.role === "Dentista" ? (
            <>
              <TextField
                label="CRO"
                variant="outlined"
                value={rqe}
                onChange={(event) => handleRqe(event)}
                className="w-full"
              />
            </>
          ) : (
            <></>
          )}

          {role.role === "Enfermeiro" ? (
            <>
              <TextField
                label="RQE (Registro de Qualificação de Especialidade)"
                variant="outlined"
                value={rqe}
                onChange={(event) => handleRqe(event)}
                className="w-full"
              />
            </>
          ) : (
            <></>
          )}
          <TextField
            label="Observações"
            multiline
            rows={1}
            variant="outlined"
            className="w-full"
            value={textObs}
            onChange={(event) => handleObs(event)}
          />
          <span
            onClick={handleSubmit}
            className="flex bg-blue-600 text-white text-xl min-w-[55px] h-[55px] justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
          >
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </form>
      <div className="w-full h-[300px] mt-8 px-4 py-4">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <DataGrid
              rows={inputFields}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[7]}
            />
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </div>
  );
};
