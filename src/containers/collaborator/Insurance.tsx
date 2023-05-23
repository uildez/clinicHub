import { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { ButtonBack } from "../../components/ButtonBack";

import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
  adaptV4Theme,
  createTheme,
} from "@mui/material/styles";
import { Link } from "react-router-dom";
import { columnsInsurance, rowsInsurance } from "../../_fakeData/DataInsurance";

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

export const Insurance = () => {
  const [insurance, setInsurance] = useState<any[]>([]);

  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">
      <ButtonBack />

      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-white shadow-xl rounded-lg mb-4">
        <div className="flex w-full justify-between mb-4">
          <Link
            to="/portaldocolaborador/convenio/novo-convenio"
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
    </div>
  );
};
