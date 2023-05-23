import { ButtonBack } from "../../components/ButtonBack";

import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { columns, rows } from "../../_fakeData/DataPacients";
import { fetchClients, selectClients } from "../../features/client/fecthClients";

export const Pacients = () => {
  const dispatch = useDispatch();
  const clients = useSelector(selectClients);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  console.log(clients)

  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">
      <ButtonBack />
      <div className="flex lg:flex-row flex-col justify-between w-full py-4 px-8 bg-white shadow-xl rounded-lg text-blue-600 mb-4 lg:gap-0 gap-4">
        <div className="flex lg:flex-col items-center flex-row gap-2">
          <h2 className="text-4xl font-bold min-w-[70px]">230</h2>
          <span className="text-lg">Pacientes Atendidos</span>
        </div>
        <div className="flex lg:flex-col items-center flex-row gap-2">
          <h2 className="text-4xl font-bold min-w-[70px]">42</h2>
          <span className="text-lg">Pacientes em Andamento</span>
        </div>
        <div className="flex lg:flex-col items-center flex-row gap-2">
          <h2 className="text-4xl font-bold min-w-[70px]">10</h2>
          <span className="text-lg">Pacientes Cancelados</span>
        </div>
      </div>

      <div className="flex w-full justify-between mb-4">
        <Link
          to="/portaldocolaborador/pacientes/novo-paciente"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          Novo Paciente
        </Link>
        <Link
          to=""
          className="flex items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          <i className="fa-regular fa-file-word"></i> Gerar Relatório
        </Link>
      </div>

      <div className="flex flex-col bg-white shadow-xl h-auto rounded-xl p-8">
        <div
          style={{
            height: 500,
            maxHeight: 700,
            width: "100%",
            color: "#101010",
          }}
        >
          <span className="text-gray-600">
            Foram encontrados <strong>{rows.length}</strong> pacientes
          </span>
          <DataGrid
            rows={rows}
            columns={columns}
            pagination={true}
            autoHeight={true}
            pageSizeOptions={[7]}
            sx={{
              color: "#4B5563",
              border: 0,
              borderColor: "transparent",
              "& .MuiDataGrid-cell:hover": {
                color: "red",
              },
              "& .header": {
                fontWeight: "bold",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
