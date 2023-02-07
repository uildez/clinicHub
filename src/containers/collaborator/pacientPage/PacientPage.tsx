import React from "react";
import { ButtonBack } from "../../../components/ButtonBack";

import { AboutPacient } from "./AboutPacient";
import { Route, Routes, useLocation } from "react-router-dom";
import { LinkMenuPacientPage } from "../../../components/employee/LinkMenuPacientPage";
import { BudgetPacient } from "./BudgetPacient";
import { Attendance } from "./Attendance";
import { TreatmentPacient } from "./TreatmentPacient";
import { DebitPacient } from "./DebitPacient";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { InfoService } from "./InfoService";

const Menu = () => (
  <>
    <LinkMenuPacientPage
      location={location.pathname}
      routing="sobre"
      icon="fa-solid fa-user"
      title="Sobre"
    />
    <LinkMenuPacientPage
      location={location.pathname}
      routing="orcamentos"
      icon="fa-solid fa-dollar-sign"
      title="Orçamentos"
    />
    <LinkMenuPacientPage
      location={location.pathname}
      routing="servicos"
      icon="fa-solid fa-pills"
      title="Serviços"
    />
    <LinkMenuPacientPage
      location={location.pathname}
      routing="atendimento"
      icon="fa-solid fa-file-medical"
      title="Atendimento"
    />
    <LinkMenuPacientPage
      location={location.pathname}
      routing="debitos"
      icon="fa-solid fa-credit-card"
      title="Débitos"
    />
  </>
);

export const PacientPage = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      <ButtonBack />
      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-slate-100 shadow-xl rounded-lg text-gray-600 mb-4">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <img
              className="rounded-full w-[80px] h-[80px] object-cover"
              src="https://cdn1.newsplex.pt/fotos/2022/8/10/830037.jpg?type=Artigo"
              alt="Foto do Cliente"
            />
            <div className="md:text-left text-center">
              <h2 className="text-lg font-semibold mb-2">Novo Paciente</h2>
              <p className="text-xs mb-2">
                (00) 00000-0000 | <strong>CPF: </strong>000.000.000-00
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-gray-300 text-gray-600 p-4 rounded-lg hover:bg-gray-600 hover:text-white hover:scale-105 transition-all ease-in-out">
              <i className="fa-solid fa-pen-to-square mr-2"></i> Editar
            </button>
            <button className="bg-green-300 text-green-600 p-4 rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 transition-all ease-in-out">
              <i className="fa-brands fa-whatsapp mr-2"></i> Conversar
            </button>
          </div>
        </div>
        <Box className="md:hidden flex" sx={{ maxWidth: { xs: "100%", sm: "100%" }, bgcolor: "none", marginTop: 4 }}>
          <Tabs variant="scrollable" scrollButtons={false}>
            <Menu />
          </Tabs>
        </Box>
        <div className="md:flex w-auto justify-center gap-8 mt-8 hidden">
          <Menu />
        </div>
      </div>
      <Routes>
        <Route path="sobre" element={<AboutPacient />} />
        <Route path="orcamentos" element={<BudgetPacient />} />
        <Route path="servicos" element={<TreatmentPacient />} />
        <Route path="servicos/informacao-servico" element={<InfoService />} />
        <Route path="atendimento" element={<Attendance />} />
        <Route path="debitos" element={<DebitPacient />} />
      </Routes>
    </div>
  );
};
