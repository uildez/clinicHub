
export const AboutPacient = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <h1 className="text-lg py-4 px-8 text-white font-semibold bg-blue-600">
          Nome do Paciente Completo
        </h1>
        <div className="flex flex-col gap-3 py-4 px-8">
          <p className="flex justify-between w-full">
            <strong>Celular:</strong> (00) 00000-000
          </p>
          <p className="flex justify-between w-full">
            <strong>Código do Paciente:</strong> 33443
          </p>
          <p className="flex justify-between w-full">
            <strong>Número do Paciente:</strong> 1003
          </p>
          <p className="flex justify-between w-full">
            <strong>CPF do Paciente:</strong> 000.000.000-00
          </p>
          <p className="flex justify-between w-full">
            <strong>Idade do Paciente:</strong> 21 anos
          </p>
          <p className="flex justify-between w-full">
            <strong>Data de Nascimento:</strong> dd/mm/aaaa
          </p>
          <p className="flex justify-between w-full">
            <strong>Sexo:</strong> Masculino
          </p>
          <p className="flex justify-between w-full">
            <strong>Plano:</strong> Unimed e Bradesco
          </p>
          <p className="flex justify-between w-full">
            <strong>Email:</strong> contato@gmail.com.br
          </p>
          <p className="flex justify-between w-full">
            <strong>Endereço:</strong> Rua Fictícia
          </p>
          <p className="flex justify-between w-full">
            <strong>Bairro:</strong> Bairro Inventado
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between w-full bg-slate-100 shadow-xl rounded-lg text-gray-600 mb-4 overflow-hidden">
          <h1 className="text-lg py-4 px-8 text-white font-semibold bg-blue-600">Última evolução</h1>
          <div className="py-4 px-8">
            <p className="flex justify-between">
              <span>Nome da Especialista</span> dd/mm/aaaa
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full max-h-[345px] bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
          <h1 className="text-lg py-4 px-8 text-white font-semibold bg-blue-600">Consultas</h1>
          <div className="flex flex-col gap-4 py-4 px-8 text-sm max-h-[265px] overflow-y-scroll">
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full">
                Finalizado
              </span>
              <span>Nome da Especialista</span>
            </div>
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full">
                Em andamento
              </span>
              <span>Nome da Especialista</span>
            </div>
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full">
                Finalizado
              </span>
              <span>Nome da Especialista</span>
            </div>
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full">
                Cancelado
              </span>
              <span>Nome da Especialista</span>
            </div>
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full">
                Status
              </span>
              <span>Nome da Especialista</span>
            </div>
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded-full">
                Finalizado
              </span>
              <span>Nome da Especialista</span>
            </div>
            <div className="flex justify-between">
              <span>dd/mm/aaaa hh:mm</span>
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full">
                Em andamento
              </span>
              <span>Nome da Especialista</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
