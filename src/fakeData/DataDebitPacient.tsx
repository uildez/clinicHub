import { GridColumns, GridRowsProp } from "@mui/x-data-grid-pro";

export const columnsDebitPacient: GridColumns = [
  {
    field: "dueDate",
    headerName: "Data",
    type: "date",
    width: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "description",
    headerName: "Nome do Serviço",
    width: 450,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "credit",
    width: 100,
    headerName: "Pagamento",
    renderCell: (params) => {
      return (
        <div className="flex flex-row items-center">
          <p>{params.formattedValue}</p>
          <span className="px-2 py-1 bg-gray-200 rounded-lg">
            {params.row.credit === true ? "crédito" : "débito"}
          </span>
        </div>
      );
    },
  },
  {
    field: "value",
    headerName: "Valor",
    width: 100,
    align: "right",
    type: "number",
    headerAlign: "right",
  },
  {
    field: "status",
    headerName: "",
    align: "center",
    width: 200,
    headerAlign: "center",
    renderCell: (params) => {
      if (params.formattedValue === "Aprovado") {
        return (
          <p className="flex gap-1 items-center text-center justify-center w-full bg-green-500 py-1 px-2 font-bold text-white rounded-lg">
            <i className="fa-regular fa-circle-check"></i> Recebido
          </p>
        );
      } else if (params.formattedValue === "A receber") {
        return (
          <button
            className="flex gap-1 items-center text-center justify-center w-full bg-orange-500 hover:bg-orange-700 py-1 px-2 font-bold text-white rounded-lg transition-all ease-in-out"
          >
            <i className="fa-solid fa-dollar-sign"></i>Receber
          </button>
        );
      }
    },
  },
  {
    field: "actions",
    headerName: "",
    width: 50,
    align: "left",
    headerAlign: "left",
    renderCell: (params) => {
      return (
        <i className="fa-solid fa-ellipsis-vertical text-2xl text-right w-full cursor-pointer" />
      );
    },
  },
];

export const rowsDebitPacient: GridRowsProp = [
  {
    id: 1,
    dueDate: new Date(2022, 9, 0),
    description: "Descrição do Serviço",
    value: 220.88,
    credit: true,
    status: "Aprovado",
  },
  {
    id: 2,
    dueDate: new Date(2022, 9, 0),
    description: "Descrição do Serviço",
    value: 220.88,
    credit: true,
    status: "A receber",
  },
  {
    id: 3,
    dueDate: new Date(2022, 9, 0),
    description: "Descrição do Serviço",
    value: 220.88,
    credit: false,
    status: "Aprovado",
  },
  {
    id: 4,
    dueDate: new Date(2022, 9, 0),
    description: "Descrição do Serviço",
    value: 220.88,
    credit: false,
    status: "A receber",
  },
  {
    id: 5,
    dueDate: new Date(2022, 9, 0),
    description: "Descrição do Serviço",
    value: 220.88,
    credit: false,
    status: "A receber",
  },
  {
    id: 6,
    dueDate: new Date(2022, 9, 0),
    description: "Descrição do Serviço",
    value: 220.88,
    credit: true,
    status: "A receber",
  },
];
