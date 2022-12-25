import { useState } from "react";

import { DataGrid, ptBR } from "@mui/x-data-grid";
import { ButtonBack } from "../../components/ButtonBack";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { columnsInsurance, rowsInsurance } from "../../fakeData/DataInsurance";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  ptBR
);

export const Insurance = () => {
  const [insurance, setInsurance] = useState<any[]>([]);

  return (
    <>
      <ButtonBack />

      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-slate-100 shadow-xl rounded-lg mb-4">
        <div className="flex w-full justify-between mb-4">
          <Link
            to="/portaldocolaborador/servicos-convenio/novo-convenio"
            className="py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
          >
            Novo Convênio
          </Link>
        </div>
        <ThemeProvider theme={theme}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rowsInsurance}
              columns={columnsInsurance}
              checkboxSelection
            />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};
