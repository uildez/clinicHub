import React from "react";
import { Routes, Route } from "react-router-dom";
import { Appointment } from "../containers/schedule/Appointment";
import { Confirm } from "../containers/schedule/Confirm";
import { Menu } from "../containers/schedule/Menu";
import { Navbar } from "../containers/schedule/Navbar";
import { OptionsPages } from "../containers/schedule/OptionsPages";
import { Register } from "../containers/schedule/Register";
import { SignIn } from "../containers/schedule/SignIn";
import { motion } from "framer-motion";
import { Exams } from "../containers/schedule/Exams";

export const Schedule = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="bg-blue-200">
        <Menu />
        <div className="flex flex-col bg-[#ddd6fe] lg:h-full h-auto min-h-screen w-screen lg:justify-between lg:pl-28 lg:py-6 lg:pr-12 p-8 pt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<OptionsPages />} />
            <Route path="consulta" element={<Appointment />} />
            <Route path="confirmacao" element={<Confirm />} />
            <Route path="exames" element={<Exams />} />
            <Route path="entrar" element={<SignIn />} />
            <Route path="cadastro" element={<Register />} />
          </Routes>
        </div>
      </div>
    </motion.div>
  );
};
