import React from "react";
import { useState } from "react";

import { DataGrid, GridColDef, GridToolbar, ptBR } from "@mui/x-data-grid";
import { ButtonBack } from "../../components/ButtonBack";

import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material/styles";
import { Link } from "react-router-dom";
import { rowsInsurance } from "../../_fakeData/DataInsurance";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: { main: "#1976d2" },
    },
  })
);

const columnsInsurance: GridColDef[] = [
  {
    field: "name",
    headerClassName: "super-app-theme--header",
    headerName: "Nome do Procedimento",
    width: 500,
  },
  {
    field: "type",
    headerClassName: "super-app-theme--header",
    headerName: "Tipo",
    width: 300,
  },
  {
    field: "price",
    headerClassName: "super-app-theme--header",
    headerName: "Valor",
    width: 200,
  },
  {
    field: "duration",
    headerClassName: "super-app-theme--header",
    headerName: "Tempo",
    width: 200,
  },
  {
    field: "appoitment",
    headerClassName: "super-app-theme--header",
    headerName: "Necessita agendamento",
    width: 200,
  },
  {
    field: "actions",
    headerName: "Ações",
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

const VISIBLE_FIELDS = [
  "Nome do Procedimento",
  "Razão Social",
  "Unidades",
  "Vincular tabela de Preço",
  "isAdmin",
];

export const Procedures = () => {
  const [insurance, setInsurance] = useState<any[]>([]);

  return (
    <>
      <ButtonBack />

      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-slate-100 shadow-xl rounded-lg mb-4">
        <div className="flex w-full justify-between mb-4">
          <Link
            to="/portaldocolaborador/servicos/novo-servico"
            className="py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
          >
            Novo Procedimento
          </Link>
        </div>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div className="h-[500px]">
              <DataGrid
                rows={rowsInsurance}
                columns={columnsInsurance}
                components={{ Toolbar: GridToolbar }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
              />
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </>
  );
};
