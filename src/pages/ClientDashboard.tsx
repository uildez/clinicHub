import { Route, Routes } from "react-router-dom";

import { Menu } from "../components/client/Menu";
import { ClientNavbar } from "../containers/client/ClientNavbar";

import { Appointment } from "../containers/client/Appointment";
import { Confirm } from "../containers/client/Confirm";
import { Exams } from "../containers/client/Exams";
import { OptionsPages } from "../containers/client/OptionsPages";

import { motion } from "framer-motion";
import { PrivateRouteClient } from "../routes/PrivateRouteClient";

export const ClientDashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="bg-blue-200">
                <Menu />
                <div className="flex flex-col bg-slate-100 lg:h-full h-auto min-h-screen w-screen lg:justify-between lg:pl-28 lg:py-6 lg:pr-12 p-8 pt-20">
                    <ClientNavbar />
                    <Routes>
                        <Route path="/" element={
                            <PrivateRouteClient>
                                <OptionsPages />
                            </PrivateRouteClient>
                        } />
                        <Route path="consulta" element={
                            <PrivateRouteClient>
                                <Appointment />
                            </PrivateRouteClient>
                        }
                        />
                        <Route path="confirmacao" element={
                            <PrivateRouteClient>
                                <Confirm />
                            </PrivateRouteClient>
                        } />
                        <Route path="exames" element={
                            <PrivateRouteClient>
                                <Exams />
                            </PrivateRouteClient>
                        } />
                    </Routes>
                </div>
            </div>
        </motion.div>
    );
};