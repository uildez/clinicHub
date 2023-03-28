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

const columns: GridColDef[] = [
  {
    field: "code",
    headerClassName: "super-app-theme--header",
    headerName: "Código na Operadora",
    width: 180,
  },
  {
    field: "cnpj",
    headerName: "Identificador CNPJ",
    width: 200,
    align: "left",
  },
  {
    field: "local",
    headerName: "Local Externo",
    width: 200,
    align: "left",
  },
  {
    field: "cnpj2",
    headerName: "Identificador CNPJ",
    width: 200,
    align: "left",
  },
  {
    field: "local2",
    headerName: "Local Externo",
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
        <span className="flex gap-2 items-center justify-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
          <i className="fa-solid fa-trash"></i>
        </span>
      );
    },
  },
];

export const PlansInsurance = () => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [code, setCode] = useState("");
  const [local, setLocal] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [local2, setLocal2] = useState("");
  const [cnpj2, setCnpj2] = useState("");

  const handleCode = (event: any) => {
    setCode(event.target.value as string);
  };

  const handleLocal = (event: any) => {
    setLocal(event.target.value as string);
  };

  const handleCnpj = (event: any) => {
    setCnpj(event.target.value as string);
  };

  const handleLocal2 = (event: any) => {
    setLocal2(event.target.value as string);
  };

  const handleCnpj2 = (event: any) => {
    setCnpj2(event.target.value as string);
  };

  //Handle Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        code,
        local,
        cnpj,
        local2,
        cnpj2,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg mt-4 overflow-hidden">
      <h1 className="text-base font-semibold bg-gray-300 p-4 mb-4">
        Locais Externos
      </h1>
      <form className="w-full">
        <div className="flex md:flex-row flex-col justify-between gap-2 px-4">
          <TextField
            label="Código da Operadora"
            variant="outlined"
            value={code}
            onChange={(event) => handleCode(event)}
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
            label="Local Externo"
            variant="outlined"
            value={local}
            onChange={(event) => handleLocal(event)}
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
            label="Identificador CNPJ"
            variant="outlined"
            value={cnpj2}
            onChange={(event) => handleCnpj2(event)}
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
            label="Local Externo"
            variant="outlined"
            value={local2}
            onChange={(event) => handleLocal2(event)}
            className="w-full"
            select
          >
            {hiredOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          {inputFields.length < 3 ? (
            <>
              <span
                onClick={handleSubmit}
                className="flex bg-blue-600 text-white text-xl min-w-[55px] h-[55px] justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
              >
                <i className="fa-solid fa-plus"></i>
              </span>
            </>
          ) : (
            <>
              <span className="flex bg-gray-600 text-white text-xl min-w-[55px] h-[55px] justify-center items-center rounded-md transition-all">
                <i className="fa-solid fa-plus"></i>
              </span>
            </>
          )}
        </div>
      </form>
      <div className="w-full h-[300px] mt-8 px-4 py-4">
        <DataGrid
          rows={inputFields}
          columns={columns}
          pagination={true}
          autoHeight={true}
          pageSizeOptions={[7]}
        />
      </div>
    </div>
  );
};
