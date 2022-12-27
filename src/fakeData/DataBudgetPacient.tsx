import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  GridColumns,
  GridRowsProp,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

export const columnsBudget: GridColumns = [
  {
    field: "dueDate",
    headerName: "Data",
    type: "date",
    width: 220,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "description",
    headerName: "Descrição",
    width: 450,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "value",
    headerName: "Valor",
    width: 150,
    align: "left",
    type: "number",
    headerAlign: "left",
  },
  {
    field: "status",
    headerName: "Status",
    align: "left",
    width: 150,
    headerAlign: "left",
    renderCell: (params) => {
      if (params.formattedValue === "Aprovado") {
        return (
          <p className="flex gap-1 items-center bg-green-500 py-1 px-4 font-bold text-white rounded-full">
            <i className="fa-regular fa-circle-check"></i>
            {params.formattedValue}
          </p>
        );
      } else if (params.formattedValue === "Em análise") {
        return (
          <p className="flex gap-1 items-center bg-orange-500 py-1 px-4 font-bold text-white rounded-full">
            <i className="fa-solid fa-spinner"></i>
            {params.formattedValue}
          </p>
        );
      } else if (params.formattedValue === "Cancelado") {
        return (
          <p className="flex gap-1 items-center bg-blue-600 py-1 px-4 font-bold text-white rounded-full">
            <i className="fa-regular fa-circle-xmark"></i>
            {params.formattedValue}
          </p>
        );
      }
    },
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Contrato",
    width: 100,
    align: "left",
    headerAlign: "left",
    getActions: () => [
      // <GridActionsCellItem icon={<EditIcon />} label="Editar" />,
      // <GridActionsCellItem icon={<DeleteIcon />} label="Deletar" />,
    ],
  },
];

export const rowsBudget: GridRowsProp = [
  {
    id: 1,
    dueDate: new Date(2022, 9, 0),
    description: "Plano Tratamento Nome do Paciente",
    value: 220.88,
    status: "Aprovado",
  },
  {
    id: 2,
    dueDate: new Date(2022, 9, 0),
    description: "Plano Tratamento Nome do Paciente",
    value: 220.88,
    status: "Em análise",
  },
  {
    id: 3,
    dueDate: new Date(2022, 9, 0),
    description: "Plano Tratamento Nome do Paciente",
    value: 220.88,
    status: "Aprovado",
  },
  {
    id: 4,
    dueDate: new Date(2022, 9, 0),
    description: "Plano Tratamento Nome do Paciente",
    value: 220.88,
    status: "Cancelado",
  },
  {
    id: 5,
    dueDate: new Date(2022, 9, 0),
    description: "Plano Tratamento Nome do Paciente",
    value: 220.88,
    status: "Cancelado",
  },
  {
    id: 6,
    dueDate: new Date(2022, 9, 0),
    description: "Plano Tratamento Nome do Paciente",
    value: 220.88,
    status: "Cancelado",
  },
];
