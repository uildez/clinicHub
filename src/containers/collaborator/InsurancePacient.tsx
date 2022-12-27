import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import { DatePicker } from "@mui/x-date-pickers";

import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: { main: "#1976d2" },
    },
  })
);

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

const planOptions = [
  "Plano 1",
  "Plano 2",
  "Plano 3",
  "Plano 4",
  "Plano 5",
  "Plano 6",
];

const columns: GridColDef[] = [
  {
    field: "insurance",
    headerClassName: "super-app-theme--header",
    headerName: "Convênio",
    width: 200,
  },
  {
    field: "plan",
    headerClassName: "super-app-theme--header",
    headerName: "Plano",
    width: 200,
  },
  {
    field: "registration",
    headerClassName: "super-app-theme--header",
    headerName: "Matrícula/Carteirinha",
    width: 200,
  },
  {
    field: "token",
    headerClassName: "super-app-theme--header",
    headerName: "Token Carteirinha",
    width: 200,
  },
  {
    field: "validate",
    headerName: "Validade",
    width: 200,
    align: "left",
    type: "time",
  },
  {
    field: "titular",
    headerClassName: "super-app-theme--header",
    headerName: "Titular",
    width: 200,
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

export const InsurancePacient = () => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [insurance, setInsurance] = useState("");
  const [plan, setPlan] = useState("");
  const [registration, setRegistration] = useState("");
  const [token, setToken] = useState("");
  const [validate, setValidate] = useState<Date | null>(null);
  const [titular, setTitular] = useState("");

  //Handle Insurance
  const handleInsurance = (event: any) => {
    setInsurance(event.target.value as string);
  };

  //Handle Plan
  const handlePlan = (event: any) => {
    setPlan(event.target.value as string);
  };

  //Handle Registration
  const handleRegistration = (event: any) => {
    setRegistration(event.target.value as string);
  };

  //Handle Token
  const handleToken = (event: any) => {
    setToken(event.target.value as string);
  };

  //Handle Titular
  const handleTitular = (event: any) => {
    setTitular(event.target.value as string);
  };

  //Hanlde Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        insurance: insurance,
        plan: plan,
        registration: registration,
        token: token,
        validate: validate,
        titular: titular,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-400 rounded-lg mt-4 p-4">
      <h1 className="text-base font-semibold mb-4">Convênios do Paciente</h1>
      <form>
        <div className="flex md:flex-row flex-col w-full justify-between gap-2">
          <TextField
            label="Convênio"
            variant="outlined"
            value={insurance}
            onChange={handleInsurance}
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
            label="Plano"
            variant="outlined"
            value={plan}
            onChange={handlePlan}
            className="w-full"
            select
          >
            {planOptions.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Matrícula/Carteirinha"
            variant="outlined"
            value={registration}
            onChange={(event) => handleRegistration(event)}
            className="w-full"
          />

          <TextField
            label="Token Carteirinha"
            variant="outlined"
            value={token}
            onChange={(event) => handleToken(event)}
            className="w-full"
          />

          <DatePicker
            label="Validade"
            renderInput={(params: any) => <TextField {...params} />}
            value={validate}
            onChange={(newValue: any) => {
              setValidate(newValue);
            }}
            className="w-full"
          />

          <TextField
            label="Titular"
            variant="outlined"
            value={titular}
            onChange={(event) => handleTitular(event)}
            className="w-full"
          />

          <span
            onClick={handleSubmit}
            className="flex bg-blue-600 text-white text-xl min-w-[55px] h-[55px] justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
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
              pageSize={7}
              rowsPerPageOptions={[7]}
            />
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </div>
  );
};
