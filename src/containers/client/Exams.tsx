import React, { useState } from "react";
import { DataGrid, GridColDef, GridKeyValue } from "@mui/x-data-grid";
import { ButtonBack } from "../../components/ButtonBack";
import { Button } from "@mui/material";

export function Exams() {
  const columns: GridColDef[] = [
    {
      field: "date",
      headerName: "Data",
      width: 190,
      align: "left",
      type: "dateTime",
    },
    {
      field: "procedureName",
      headerName: "Procedimento",
      width: 250,
      description: "Caso precise de ajuda entre em contato.",
    },
    { field: "doctorName", headerName: "Nome do Doutor(a)", width: 190 },
    {
      field: "price",
      headerName: "Preço",
      type: "number",
      width: 90,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "insurance",
      headerName: "Convênio",
      type: "boolean",
      width: 120,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "status",
      headerName: "Status",
      width: 190,
      align: "left",
      renderCell: (params) => {
        if (params.formattedValue === "Em andamento") {
          return (
            <p className="bg-yellow-400 py-2 px-4 font-bold text-white rounded-full">
              {params.formattedValue}
            </p>
          );
        } else if (params.formattedValue === "Finalizado") {
          return (
            <p className="bg-green-500 py-2 px-4 font-bold text-white rounded-full">
              {params.formattedValue}
            </p>
          );
        } else if (params.formattedValue === "Em análise") {
          return (
            <p className="bg-orange-500 py-2 px-4 font-bold text-white rounded-full">
              {params.formattedValue}
            </p>
          );
        } else if (params.formattedValue === "Cancelado") {
          return (
            <p className="bg-blue-500 py-2 px-4 font-bold text-white rounded-full">
              {params.formattedValue}
            </p>
          );
        }
      },
    },
    {
      field: "donwload",
      headerName: "Resultado",
      width: 120,
      align: "left",
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          const thisRow: Record<string, GridKeyValue> = {};
          return alert(JSON.stringify(thisRow, null, 4));
        };

        if (params.row.status === "Finalizado") {
          return (
            <Button onClick={onClick}>
              <span className="flex gap-2 items-center py-2 px-4 text-white lowercase bg-green-500 rounded-lg hover:bg-green-700">
                <i className="fa-solid fa-download"></i>Download
              </span>
            </Button>
          );
        } else {
          return (
            <Button disabled>
              <span className="flex gap-2 items-center py-2 px-4 text-white lowercase bg-gray-500 rounded-lg opacity-80">
                <i className="fa-solid fa-download"></i>Download
              </span>
            </Button>
          );
        }
      },
    },
  ];

  const rows = [
    {
      id: 1,
      date: new Date(2018, 2, 1),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Jon",
      price: 89.9,
      insurance: true,
      status: "Em andamento",
    },
    {
      id: 2,
      date: new Date(2022, 3, 2),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Cersei",
      price: 289.9,
      insurance: true,
      status: "Cancelado",
    },
    {
      id: 3,
      date: new Date(2021, 4, 8),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Jaime",
      price: 849.9,
      insurance: false,
      status: "Finalizado",
    },
    {
      id: 4,
      date: new Date(2022, 4, 5),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Arya",
      price: 99.9,
      insurance: true,
      status: "Em análise",
    },
    {
      id: 5,
      date: new Date(2022, 4, 9),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Daenerys",
      price: 89.9,
      insurance: true,
      status: "Em andamento",
    },
    {
      id: 6,
      date: new Date(2021, 7, 2),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "null",
      price: 889.9,
      insurance: false,
      status: "Finalizado",
    },
    {
      id: 7,
      date: new Date(2022, 8, 4),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Ferrara",
      price: 489.9,
      insurance: true,
      status: "Em andamento",
    },
    {
      id: 8,
      date: new Date(2020, 8, 6),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Rossini",
      price: 1089.9,
      insurance: false,
      status: "Cancelado",
    },
    {
      id: 9,
      date: new Date(2022, 9, 4),
      procedureName: "Bloqueios do plexo braquial",
      doctorName: "Harvey",
      price: 289.9,
      insurance: true,
      status: "Cancelado",
    },
  ];

  return (
    <>
      <ButtonBack />
      <div className="flex flex-col bg-slate-200 text-blue-600 lg:h-4/5 h-auto rounded-xl p-8">
        <div
          style={{
            height: 500,
            maxHeight: 700,
            width: "100%",
            color: "#553285",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pagination={true}
            autoHeight={true}
            pageSizeOptions={[7]}
          />
        </div>
      </div>
    </>
  );
}
