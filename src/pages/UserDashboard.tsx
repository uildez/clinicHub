import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import { Menu } from "../components/employee/Menu";
import { MenuMobile } from "../components/employee/MenuMobile";

import { PrivateRouteUser } from "../routes/PrivateRouteUser";

import { Config } from "../containers/collaborator/Config";
import { Dashboard } from "../containers/collaborator/Dashboard";
import { Employees } from "../containers/collaborator/Employees";
import { Equip } from "../containers/collaborator/Equip";
import { Finances } from "../containers/collaborator/Finances";
import { Guides } from "../containers/collaborator/Guides";
import { Insurance } from "../containers/collaborator/Insurance";
import { Navbar } from "../containers/collaborator/Navbar";
import { NewEmployeer } from "../containers/collaborator/NewEmployeer";
import { NewInsurance } from "../containers/collaborator/NewInsurance";
import { NewPacient } from "../containers/collaborator/NewPacient";
import { NewProcedure } from "../containers/collaborator/NewProcedure";
import { NewStorage } from "../containers/collaborator/NewStorage";
import { NewUser } from "../containers/collaborator/NewUser";
import { Pacients } from "../containers/collaborator/Pacients";
import { Prescription } from "../containers/collaborator/Prescription";
import { Procedures } from "../containers/collaborator/Procedures";
import { Schedule } from "../containers/collaborator/Schedule";
import { Storage } from "../containers/collaborator/Storage";
import { PacientPage } from "../containers/collaborator/pacientPage/PacientPage";

export const UserDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex lg:flex-row flex-col bg-white h-full w-screen">
        <Menu />
        <MenuMobile />
        <div className="flex flex-col bg-white w-screen min-h-screen overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="dashboard"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor', 'finance']}>
                  <Dashboard />
                </PrivateRouteUser>
              }
            />

            <Route path="agendamento"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor', 'finance']}>
                  <Schedule />
                </PrivateRouteUser>
              }
            />

            <Route path="meu-perfil"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor', 'finance']}>
                  <Config />
                </PrivateRouteUser>
              }
            />

            <Route path="estoque"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor', 'finance']}>
                  <Storage />
                </PrivateRouteUser>
              }
            />

            <Route path="estoque/novo-produto"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor', 'finance']}>
                  <NewStorage />
                </PrivateRouteUser>
              }
            />

            <Route path="pacientes"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <Pacients />
                </PrivateRouteUser>
              }
            />

            <Route path="pacientes/novo-paciente/*"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <NewPacient />
                </PrivateRouteUser>
              }
            />

            <Route path="pacientes/pagina-paciente/*"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <PacientPage />
                </PrivateRouteUser>
              }
            />

            <Route path="funcionarios"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'finance']}>
                  <Employees />
                </PrivateRouteUser>
              }
            />

            <Route path="equipamentos"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <Equip />
                </PrivateRouteUser>
              }
            />

            <Route path="servicos"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance']}>
                  <Procedures />
                </PrivateRouteUser>
              }
            />

            <Route path="servicos/novo-servico"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'finance']}>
                  <NewProcedure />
                </PrivateRouteUser>
              }
            />

            <Route path="convenio"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'finance']}>
                  <Insurance />
                </PrivateRouteUser>
              }
            />

            <Route path="convenio/novo-convenio"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'finance']}>
                  <NewInsurance />
                </PrivateRouteUser>
              }
            />            

            <Route path="funcionarios/novo-funcionario"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'finance']}>
                  <NewEmployeer />
                </PrivateRouteUser>
              }
            />
            <Route path="funcionarios/novo-usuario"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <NewUser />
                </PrivateRouteUser>
              }
            />

            <Route path="guias-atendimento"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <Guides/>
                </PrivateRouteUser>
              }
            />

            <Route path="receituario"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <Prescription/>
                </PrivateRouteUser>
              }
            />

            <Route path="financeiro"
              element={
                <PrivateRouteUser userTypeAllowed={['admin', 'attendance', 'doctor']}>
                  <Finances/>
                </PrivateRouteUser>
              }
            />
          </Routes>
        </div>
      </div>
    </motion.div>
  );
};
