import React from "react";
import { Link } from "react-router-dom";

import { ButtonBack } from "../../components/ButtonBack";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import faker from "faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      color: "#fff",
    },
    title: {
      display: true,
      text: "Funcionários por área",
    },
  },
};

const labels = [
  "Ortopedista",
  "Dentista",
  "Pediatra",
  "Ortopedista",
  "Dentista",
  "Pediatra",
  "Ortopedista",
  "Dentista",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Masculino",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#9E1012",
    },
    {
      label: "Feminino",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#0284c7",
    },
  ],
};

export const Employees = () => {
  const columns: GridColDef[] = [
    {
      field: "collaboratorName",
      headerClassName: "super-app-theme--header",
      headerName: "Nome do Colaborador",
      width: 350,
    },
    {
      field: "date",
      headerName: "Admissão",
      width: 220,
      align: "left",
      type: "dateTime",
    },
    {
      field: "area",
      headerName: "Atuação",
      width: 220,
      align: "left",
      type: "dateTime",
    },
    {
      field: "status",
      headerName: "Status",
      width: 190,
      align: "left",
      renderCell: (params) => {
        if (params.formattedValue === "Ativo") {
          return (
            <p className="bg-green-500 py-1 px-4 font-bold text-white rounded-lg">
              {params.formattedValue}
            </p>
          );
        } else if (params.formattedValue === "Inativo") {
          return (
            <p className="bg-blue-600 py-1 px-4 font-bold text-white rounded-lg">
              {params.formattedValue}
            </p>
          );
        }
      },
    },
    {
      field: "actions",
      headerName: "Ações",
      width: 260,
      align: "left",
      description: "Clique no botão para editar as informações do paciente.",
      renderCell: (params) => {
        // const onClick = (e: any) => {
        //   e.stopPropagation(); // don't select this row after clicking

        //   const api: GridApi = params.api;
        //   const thisRow: Record<string, GridCellValue> = {};

        //   api
        //     .getAllColumns()
        //     .filter((c) => c.field !== "__check__" && !!c)
        //     .forEach(
        //       (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        //     );

        //   return alert(JSON.stringify(thisRow, null, 4));
        // };

        return (
          // <Link to="/paciente">
          <span className="flex gap-2 items-center px-4 h-[40px] text-sm text-white lowercase bg-green-500 rounded-lg hover:bg-green-700">
            <i className="fa-solid fa-user-pen mx-auto"></i>Editar informações
          </span>
          // </Link>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      date: new Date(2018, 2, 1),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 2,
      date: new Date(2022, 3, 2),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 3,
      date: new Date(2021, 4, 8),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Inativo",
    },
    {
      id: 4,
      date: new Date(2022, 4, 5),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 5,
      date: new Date(2022, 4, 9),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 6,
      date: new Date(2021, 7, 2),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 7,
      date: new Date(2022, 8, 4),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 8,
      date: new Date(2020, 8, 6),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
    {
      id: 9,
      date: new Date(2022, 9, 4),
      collaboratorName: "Nome do Colaborador",
      area: "Nome da Especialidade",
      status: "Ativo",
    },
  ];

  return (
    <div>
      <ButtonBack />

      <div className="flex lg:flex-row flex-col items-center justify-between w-full py-4 px-8 bg-slate-100 shadow-xl rounded-lg text-blue-600 mb-4 lg:gap-0 gap-4">
        <div className="flex lg:flex-col items-center flex-row gap-2">
          <h2 className="text-6xl font-bold min-w-[70px]">87</h2>
          <span className="text-xl text-center">
            Funcionários <br />
            Ativos
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 items-center">
            <i className="text-green-500 text-5xl fa-solid fa-user-plus"></i>
            <div>
              <span className="text-gray-500 text-xs">Admitidos</span>
              <h2 className="bg-green-500 pl-4 pr-8 py-1 text-white text-3xl font-semibold rounded-r-full">
                65
              </h2>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <i className="text-blue-500 text-5xl fa-solid fa-user-minus"></i>
            <div>
              <span className="text-gray-500 text-xs">Demitidos</span>
              <h2 className="bg-blue-500 pl-4 pr-8 py-1 text-white text-3xl font-semibold rounded-r-full">
                65
              </h2>
            </div>
          </div>
        </div>
        <div className="md:flex hidden h-[300px] w-[600px]">
          {/* <BarChart data={data} options={options} className="w-[700px]" /> */}
        </div>
      </div>

      <div className="flex w-full justify-between mb-4">
        <Link
          to="/portaldocolaborador/funcionarios/novo-funcionario"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          + Novo Funcionário
        </Link>
        <Link
          to="/portaldocolaborador/funcionarios/novo-usuario"
          className="flex items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          Novo usuário
        </Link>
      </div>

      <div className="flex flex-col bg-slate-100 h-auto rounded-xl p-8">
        <div
          style={{
            height: 500,
            maxHeight: 700,
            width: "100%",
            color: "#553285",
          }}
        >
          <DataGrid
            sx={{
              width: "100%",
              "& .super-app-theme--header": {
                // backgroundColor: "rgba(255, 7, 0, 0.55)",
              },
            }}
            rows={rows}
            columns={columns}
            pagination={true}
            autoHeight={true}
            pageSizeOptions={[7]}
          />
        </div>
      </div>
    </div>
  );
};
