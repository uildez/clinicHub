import bgLocale from "date-fns/locale/pt-BR";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { ClientDashboard } from "./pages/ClientDashboard";
import { Home } from "./pages/Home";
import { UserDashboard } from "./pages/UserDashboard";

//Routes
import { PrivateRoute } from "./routes/PrivateRoute";
import { PrivateRouteClient } from "./routes/PrivateRouteClient";

// Mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ptBR } from "@mui/x-data-grid";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


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
              <Route path="/portaldopaciente/*" element={
                <PrivateRouteClient >
                  <ClientDashboard />
                </PrivateRouteClient>
              } />
              <Route path="/portaldocolaborador/*" element={
                <PrivateRoute >
                  <UserDashboard />
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
