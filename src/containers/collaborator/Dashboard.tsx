import { Routes, Route } from "react-router-dom";
import { Menu } from "../../components/employee/Menu";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { Employees } from "./Employees";
import { MenuMobile } from "../../components/employee/MenuMobile";
import { Pacients } from "./Pacients";
import { Insurance } from "./Insurance";
import { Storage } from "./Storage";
import { Schedule } from "./Schedule";
import { NewEmployeer } from "./NewEmployeer";
import { NewPacient } from "./NewPacient";
import { Equip } from "./Equip";
import { NewUser } from "./NewUser";
import { PacientPage } from "./pacientPage/PacientPage";
import { NewInsurance } from "./NewInsurance";
import { Procedures } from "./Procedures";
import { NewProcedure } from "./NewProcedure";
import { NewStorage } from "./NewStorage";
import { Config } from "./Config";

import { useSelector } from "react-redux/es/exports";
// import { State } from "../../redux/root-reducer";

export const Dashboard = () => {
  // const { currentUser } = useSelector((rootReducer: State) => rootReducer.user)

  // console.log({ currentUser })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex bg-blue-200 h-full w-screen">
        <Menu />
        <MenuMobile />
        <div className="flex flex-col bg-slate-200 w-screen min-h-screen overflow-hidden lg:py-4 lg:px-8 p-4 pt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<Schedule />} />
            <Route path="agendamento" element={<Schedule />} />
            <Route path="pacientes" element={<Pacients />} />
            <Route path="pacientes/novo-paciente/*" element={<NewPacient />} />
            <Route
              path="pacientes/pagina-paciente/*"
              element={<PacientPage />}
            />
            <Route path="funcionarios" element={<Employees />} />
            <Route
              path="funcionarios/novo-funcionario"
              element={<NewEmployeer />}
            />
            <Route path="funcionarios/novo-usuario" element={<NewUser />} />
            <Route path="servicos-convenio" element={<Insurance />} />
            <Route
              path="servicos-convenio/novo-convenio"
              element={<NewInsurance />}
            />
            <Route path="equipamentos" element={<Equip />} />
            <Route path="servicos" element={<Procedures />} />
            <Route path="servicos/novo-servico" element={<NewProcedure />} />
            <Route path="estoque" element={<Storage />} />
            <Route path="estoque/novo-produto" element={<NewStorage />} />
            <Route path="guias-atendimento" element={<></>} />
            <Route path="receituario" element={<></>} />
            <Route path="financeiro" element={<></>} />
            <Route path="meu-perfil" element={<Config />} />
          </Routes>
        </div>
      </div>
    </motion.div>
  );
};
