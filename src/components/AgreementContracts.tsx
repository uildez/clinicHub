import { useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const hiredOptions = [
  "CLINFEC",
  "CAROLINA CLEMENTE RESENDE",
  "DANIELLE BATISTA DE OLIVEIRA SALES",
  "ESTER ALVES NUNES BATISTA",
  "FERNANDO RIBEIRO DE BARROS",
  "Filipe Rodrigues Marques",
  "Franciely Pabline Santana Barbosa",
  "Gabrielle Roos Diehl",
  "Heloisa Costa Ravagnani Muniz",
  "KAROLINE EVANGELISTA SOUZA",
  "MARCO ANTONIO CORREA REBELLO CEZAR",
  "MARCOS FELIPE DE CARVALHO LEITE",
  "NADIA CRISTINA DE SOUSA MISAEL",
  "Nathalia Ramos Bento",
  "PAULO  JOSÉ MORENO LIMA",
  "William Mattiello",
];

const receiptOptions = [
  "BB Clinfec",
  "Sicoob - Clinfec",
  "Sicoob - Muniz",
  "UOL - Pagseguro",
];

const cnpjOptions = ["Sim", "Não"];

const applicantOptions = ["Executante", "Solicitante"];

const unitsOptions = [
  "Unidade 1",
  "Unidade 2",
  "Unidade 3",
  "Unidade 4",
  "Unidade 5",
  "Unidade 6",
  "Unidade 7",
  "Unidade 8",
];

const columns: GridColDef[] = [
  {
    field: "code",
    headerClassName: "super-app-theme--header",
    headerName: "Código na Operadora",
    width: 180,
  },
  {
    field: "hired",
    headerName: "Contratado",
    width: 200,
    align: "left",
  },
  {
    field: "receipt",
    headerName: "Conta para Recebimento",
    width: 220,
    align: "left",
  },
  {
    field: "login",
    headerName: "Login WS",
    width: 150,
    align: "left",
  },
  {
    field: "password",
    headerName: "Senha WS",
    width: 150,
    align: "left",
  },
  {
    field: "cnpj",
    headerName: "Identificador CNPJ",
    width: 150,
    align: "left",
  },
  {
    field: "applicant",
    headerName: "Executante / Solicitante",
    width: 200,
    align: "left",
  },
  {
    field: "units",
    headerName: "Unidade",
    width: 200,
    align: "left",
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

export const AgreementContracts = () => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [code, setCode] = useState("");
  const [hired, setHired] = useState("");
  const [receipt, setReceipt] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [applicant, setApplicant] = useState("");
  const [units, setUnits] = useState("");

  const handleCode = (event: any) => {
    setCode(event.target.value as string);
  };

  const handleHired = (event: any) => {
    setHired(event.target.value as string);
  };

  const handleReceipt = (event: any) => {
    setReceipt(event.target.value as string);
  };

  const handleLogin = (event: any) => {
    setLogin(event.target.value as string);
  };

  const handlePassword = (event: any) => {
    setPassword(event.target.value as string);
  };

  const handleCnpj = (event: any) => {
    setCnpj(event.target.value as string);
  };

  const handleApplicant = (event: any) => {
    setApplicant(event.target.value as string);
  };

  const handleUnits = (event: any) => {
    setUnits(event.target.value as string);
  };

  //Handle Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        code,
        hired,
        receipt,
        login,
        password,
        cnpj,
        applicant,
        units,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg mt-4 overflow-hidden">
      <h1 className="text-base font-semibold bg-gray-300 p-4 mb-4">
        Contratos do Convênio
      </h1>
      <form className="w-full">
        <div className="grid md:grid-cols-4 grid-cols-1 w-full justify-between gap-2 px-4">
          <TextField
            label="Código da Operadora"
            variant="outlined"
            value={code}
            onChange={(event) => handleCode(event)}
            className="w-full"
          />

          <TextField
            label="Contratado"
            variant="outlined"
            value={hired}
            onChange={(event) => handleHired(event)}
            className="w-full"
            select
          >
            {hiredOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Conta para Recebimento"
            variant="outlined"
            value={receipt}
            onChange={(event) => handleReceipt(event)}
            className="w-full"
            select
          >
            {receiptOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Login WS"
            variant="outlined"
            value={login}
            onChange={(event) => handleLogin(event)}
            className="w-full"
          />

          <TextField
            label="Senha WS"
            variant="outlined"
            value={password}
            onChange={(event) => handlePassword(event)}
            className="w-full"
          />

          <TextField
            label="Identificador CNPJ"
            variant="outlined"
            value={cnpj}
            onChange={(event) => handleCnpj(event)}
            className="w-full"
            select
          >
            {cnpjOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Executante/Solicitante"
            variant="outlined"
            value={applicant}
            onChange={(event) => handleApplicant(event)}
            className="w-full"
            select
          >
            {applicantOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Unidade"
            variant="outlined"
            value={units}
            onChange={(event) => handleUnits(event)}
            className="w-full"
            select
          >
            {unitsOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex w-full justify-end gap-2 px-4 mt-4">
          <span
            onClick={handleSubmit}
            className="flex bg-blue-600 text-white text-base w-fit px-8 py-4 justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
          >
            <i className="fa-solid fa-plus mr-2"></i> Salvar
          </span>
        </div>
      </form>
      <div className="w-full h-[300px] mt-8 px-4 py-4">
        <DataGrid
          rows={inputFields}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    </div>
  );
};
