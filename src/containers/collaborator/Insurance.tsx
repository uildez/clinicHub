import { useState } from "react";

import { DataGrid, ptBR } from "@mui/x-data-grid";
import { ButtonBack } from "../../components/ButtonBack";

import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material/styles";
import { Link } from "react-router-dom";
import { columnsInsurance, rowsInsurance } from "../../fakeData/DataInsurance";

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
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rowsInsurance}
                columns={columnsInsurance}
                checkboxSelection
              />
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </>
  );
};
