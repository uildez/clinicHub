import { GridColDef } from "@mui/x-data-grid";
import { GridRowsProp } from "@mui/x-data-grid-pro";

export const columnsStore: GridColDef[] = [
  {
    field: "idProduct",
    headerName: "Id do Produto",
    width: 160,
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "nameProduct",
    headerName: "Nome do Produto",
    width: 260,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "store",
    headerName: "Estoque",
    width: 150,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "lote",
    headerName: "Lote",
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "dueDate",
    headerName: "Vencimento",
    type: "date",
    width: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "amount",
    headerName: "Quantidade",
    type: "number",
    width: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Ações",
    width: 100,
    align: "left",
    headerAlign: "left",
    getActions: () => [
      // <GridActionsCellItem icon={<EditIcon />} label="Editar" />,
      // <GridActionsCellItem icon={<DeleteIcon />} label="Deletar" />
    ],
  },
];

export const rowsStore: GridRowsProp = [
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "A pagar",
  },
  {
    id: 2,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 8,
    status: "Pago",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "Pago",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "Pago",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 1,
    status: "A pagar",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "A pagar",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "Pago",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "A pagar",
  },
  {
    id: 1,
    idProduct: 23,
    nameProduct: "Dipirona Monoidratada",
    store: "Enfermaria",
    lote: "Lote 5",
    dueDate: new Date(2022, 9, 0),
    amount: 12,
    status: "Pago",
  },
];
