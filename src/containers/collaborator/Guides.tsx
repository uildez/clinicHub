import { Link } from "react-router-dom"
import { ButtonBack } from "../../components/ButtonBack"

import { AiFillBuild } from "react-icons/ai"

export const Guides = () => {
    return (
        <div className="lg:px-8 px-4 py-4 bg-slate-100 relative">
            <div className="absolute flex flex-col items-center justify-start pt-40 lg:h-full h-screen w-screen -top-10 lg:-right-10 right-0 z-10 bg-slate-800/50 backdrop-blur-lg">
                <AiFillBuild className="text-8xl" />
                <h2 className="text-2xl font-semibold">Página em Desenvolvimento</h2>
                <p className="text-base">Volte em breve</p>

                <Link to="/portaldocolaborador/dashboard" className="mt-8 bg-blue-600 px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-all">Voltar para Home</Link>
            </div>
            <ButtonBack />
            <div className="grid container h-full w-full gap-4">
                <div className="section1 flex flex-col justify-between py-6 px-5 rounded-lg shadow-md bg-white">
                    <div className="flex flex-col">
                        <span className="text-base text-gray-600 font-semibold">Pacientes do dia</span>
                        <h2 className="text-6xl text-blue-600 font-bold">29</h2>
                    </div>
                    <Link to="/portaldocolaborador/pacientes" className="text-base text-gray-600 border-blue-600 hover:pl-2 hover:border-l-4 transition-all">Ver pacientes</Link>
                </div>

                <div className="section2 flex flex-col justify-between py-6 px-5 rounded-lg shadow-md bg-blue-600">
                    <div className="flex flex-col">
                        <span className="text-base text-white font-semibold">Estoque</span>
                        <h2 className="flex items-end text-6xl text-white font-bold">121 <p className="text-sm font-medium mb-1 ml-2">itens</p></h2>
                    </div>
                    <Link to="/portaldocolaborador/estoque" className="text-base text-white border-white hover:pl-2 hover:border-l-4 transition-all">Abrir estoque</Link>
                </div>

                <div className="section3 flex flex-col justify-between py-6 px-5 rounded-lg shadow-md bg-[#0069A2]">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                            <span className="text-base text-white font-semibold">Atendimentos</span>
                            <div className="flex gap-2">
                                <i onClick={() => { }} className="fa-solid fa-circle-arrow-left text-white hover:ring-2 hover:ring-white rounded-full transition-all cursor-pointer"></i>
                                <i onClick={() => { }} className="fa-solid fa-circle-arrow-right text-white hover:ring-2 hover:ring-white rounded-full transition-all cursor-pointer"></i>
                            </div>
                        </div>
                        <h2 className="flex items-end text-6xl text-white font-bold">12 <p className="text-sm font-medium mb-1 ml-2">cardiologista</p></h2>
                    </div>
                    <Link to="/portaldocolaborador/estoque" className="text-base text-white border-white hover:pl-2 hover:border-l-4 transition-all">Abrir atendimentos</Link>
                </div>

                <div className="section4 flex flex-col justify-between py-6 px-5 rounded-lg shadow-md bg-[#004F7A]">
                    <div className="flex flex-col">
                        <span className="text-base text-white font-semibold">Agendamentos</span>
                        <h2 className="flex items-end text-6xl text-white font-bold">98</h2>
                    </div>
                    <Link to="/portaldocolaborador/agendamento" className="text-base text-white border-white hover:pl-2 hover:border-l-4 transition-all">Fazer novo agendamento</Link>
                </div>
            </div>
        </div>
    )
}
