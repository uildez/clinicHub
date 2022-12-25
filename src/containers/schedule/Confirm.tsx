import { ButtonBack } from "../../components/ButtonBack";
import img from "../../assets/images/img-confirm.png";
import { Link } from "react-router-dom";

export function Confirm() {
  return (
    <>
      <ButtonBack />
      <div className="flex lg:flex-row flex-col h-4/5 rounded-xl overflow-hidden">
        <div className="flex flex-col h-full lg:w-4/5 w-full bg-slate-200 text-blue-600 rounded-xl lg:px-8 lg:py-8 py-8 px-6">
          <div className="flex flex-col text-center mb-8">
            <i className="fa-solid fa-check-double text-3xl font-bold mb-4"></i>
            <h2 className="text-3xl font-bold">Consulta confirmada</h2>
            <span>
              Confira as informações abaixo e apresente o Ticket na sua consulta
            </span>
          </div>
          <div className="flex flex-col mx-auto border-dashed border-2 border-blue-900 p-8 rounded-lg">
            <div className="flex lg:flex-row flex-col lg:text-left text-center">
              <img
                className="rounded-full w-[70px] h-[70px] object-cover lg:mr-4 lg:mx-0 mx-auto"
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                alt="Foto do Usuário"
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Nome do Paciente</h2>
                <p className="text-base">
                  <strong>CPF:</strong> 909.090.089-09
                </p>
                <span className="text-xs">
                  <strong>
                    Protocolo N<sup>o</sup>:
                  </strong>{" "}
                  232.343.546-90
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-8 bg-blue-600 w-2/4 text-white py-2 px-4 rounded-lg">
                <h2 className="text-sm font-bold mb-2">Quem irá te atender</h2>
                <div className="flex flex-row items-center">
                  <img
                    className="rounded-full w-[60px] h-[60px] object-cover lg:mr-4 lg:mx-0 mx-auto"
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    alt="Foto do Médico"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-sm font-bold">
                      Dr<sup>o</sup>. Olavo Carvalho
                    </h2>
                    <p className="text-xs">Dermatologista</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-blue-600 w-2/4 text-white py-2 px-4 rounded-lg">
                <h2 className="text-sm font-bold mb-2">Dia, horário e Local</h2>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-xs">
                    <i className="fa-solid fa-calendar"></i> 24/07/2023
                  </p>
                  <p className="flex items-center gap-2 text-xs">
                    <i className="fa-solid fa-clock"></i> 08:00 AM
                  </p>
                  <p className="flex items-center gap-2 text-xs">
                    <i className="fa-solid fa-location-dot"></i> Clínica HUB
                    Nordeste João Pessoa - 2 km | 56089-900
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden lg:w-3/5 w-full overflow-hidden">
          <img
            className="absolute h-[550px] overflow-hidden bottom-0 right-20"
            src={img}
            alt="Doutor com Paciente"
          />
        </div>
      </div>
    </>
  );
}
