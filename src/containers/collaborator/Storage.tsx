import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
  adaptV4Theme,
  createTheme,
} from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { columnsStore, rowsStore } from "../../_fakeData/DataStore";
import { ButtonBack } from "../../components/ButtonBack";

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

export const Storage = () => {
  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">
      <ButtonBack />
      <div className="flex lg:flex-row flex-col items-center justify-between w-full p-8 bg-white shadow-xl rounded-lg text-blue-600 mb-4 lg:gap-0 gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-2/5 w-full h-full">
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-lg w-auto py-2 px-4">
            <h2 className="text-4xl font-semibold">28</h2>
            <p className="text-center">
              Locais
              <br /> Ocupados
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-lg w-auto py-2 px-4">
            <h2 className="text-4xl font-semibold">234</h2>
            <p className="text-center">
              Itens no <br /> estoque
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-lg w-auto py-2 px-4">
            <h2 className="text-4xl font-semibold">30</h2>
            <p className="text-center">
              Categorias <br />
              cadastradas
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-300 rounded-lg w-auto py-2 px-4">
            <h2 className="text-4xl font-semibold">12</h2>
            <p className="text-center">
              Itens em
              <br /> Falta
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between mb-4">
        <Link
          to="/portaldocolaborador/estoque/novo-produto"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          + Adicionar Produto
        </Link>
      </div>

      <div className="flex flex-col bg-white shadow-xl h-full rounded-xl p-8">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rowsStore}
                columns={columnsStore}
                checkboxSelection
              />
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </div>
  );
};
