import { Navigate, Route, RouteProps, RouterProps, Routes, redirect, RoutesProps } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";
import { Dashboard } from "./containers/collaborator/Dashboard";
import { Login } from "./containers/collaborator/Login";

import { AnimatePresence } from "framer-motion";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import bgLocale from "date-fns/locale/pt-BR";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ptBR } from "@mui/x-data-grid";
import { PrivateRoute } from "./routes/PrivateRoute";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  ptBR
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={bgLocale}
      >
        <AnimatePresence mode="wait">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portaldopaciente/*" element={<Schedule />} />
              <Route path="portaldocolaborador/login" element={<Login />} />
              <Route path="/portaldocolaborador/*" element={
                // <PrivateRoute >
                <Dashboard />
                // </PrivateRoute> 
              } />
              <Route path="/portaldocolaborador/teste" element={
                <PrivateRoute >
                  <h1>TEST</h1>
                </PrivateRoute>
              } />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
