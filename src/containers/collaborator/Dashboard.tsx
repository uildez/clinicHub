import { AiFillBuild } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Dashboard = () => {
  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">
      <div className="grid container h-full w-full gap-4">
        
        <div className="section1 flex flex-col justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <div className="flex flex-col">
            <span className="text-base text-gray-600 font-semibold">Pacientes do dia</span>
            <h2 className="lg:text-6xl text-3xl text-blue-600 font-bold">29</h2>
          </div>
          <Link to="/portaldocolaborador/pacientes" className="text-base text-gray-600 border-blue-600 hover:pl-2 hover:border-l-4 transition-all">Ver pacientes</Link>
        </div>

        <div className="section2 flex flex-col justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-blue-600">
          <div className="flex flex-col">
            <span className="text-base text-white font-semibold">Estoque</span>
            <h2 className="flex items-end lg:text-6xl text-3xl text-white font-bold">121 <p className="text-sm font-medium mb-1 ml-2">itens</p></h2>
          </div>
          <Link to="/portaldocolaborador/estoque" className="text-base text-white border-white hover:pl-2 hover:border-l-4 transition-all">Abrir estoque</Link>
        </div>

        <div className="section3 flex flex-col justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-[#0069A2]">
          <div className="flex flex-col">
            <div className="flex lg:flex-row flex-col lg:items-center justify-between">
              <span className="text-base text-white font-semibold">Atendimentos</span>
              <div className="lg:flex hidden gap-2">
                <i onClick={() => { }} className="fa-solid fa-circle-arrow-left text-white hover:ring-2 hover:ring-white rounded-full transition-all cursor-pointer"></i>
                <i onClick={() => { }} className="fa-solid fa-circle-arrow-right text-white hover:ring-2 hover:ring-white rounded-full transition-all cursor-pointer"></i>
              </div>
            </div>
            <h2 className="flex items-end lg:text-6xl text-3xl text-white font-bold">12 <p className="text-sm font-medium mb-1 ml-2">cardiologista</p></h2>
            <div className="lg:hidden flex gap-2">
              <i onClick={() => { }} className="fa-solid fa-circle-arrow-left text-white hover:ring-2 hover:ring-white rounded-full transition-all cursor-pointer"></i>
              <i onClick={() => { }} className="fa-solid fa-circle-arrow-right text-white hover:ring-2 hover:ring-white rounded-full transition-all cursor-pointer"></i>
            </div>
          </div>
          <Link to="/portaldocolaborador/estoque" className="text-base text-white border-white hover:pl-2 hover:border-l-4 transition-all">Abrir atendimentos</Link>
        </div>

        <div className="section4 flex flex-col justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-[#004F7A]">
          <div className="flex flex-col">
            <span className="text-base text-white font-semibold">Agendamentos</span>
            <h2 className="flex items-end lg:text-6xl text-3xl text-white font-bold">98</h2>
          </div>
          <Link to="/portaldocolaborador/agendamento" className="text-base text-white border-white hover:pl-2 hover:border-l-4 transition-all">Fazer novo agendamento</Link>
        </div>

        <div className="section5 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm lg:text-xl font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section6 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm lg:text-xl font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section7 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section8 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section9 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section10 flex flex-col lg:text-left text-center text-white justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-blue-600">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section11 flex flex-col lg:text-left text-center text-white justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-blue-600">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section12 flex flex-col lg:text-left text-center text-white justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-blue-600">
          <AiFillBuild className="text-5xl lg:mx-0 mx-auto" />
          <h2 className="text-sm font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section13 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-2xl" />
          <h2 className="text-sm lg:text-xl font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>

        <div className="section14 flex flex-col lg:text-left text-center text-blue-600 justify-between py-6 px-5 gap-4 rounded-lg shadow-md bg-white">
          <AiFillBuild className="text-2xl" />
          <h2 className="text-sm lg:text-xl font-semibold">Em Desenvolvimento</h2>
          <p className="text-base">Volte em breve</p>
        </div>
      </div>
    </div>
  )
}
