import { GridColDef } from "@mui/x-data-grid";
import {
  GridRowsProp
} from "@mui/x-data-grid-pro";

export const columnsInsurance: GridColDef[] = [
  {
    field: "name",
    headerName: "Nome",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "socialReason",
    headerName: "Razão Social",
    width: 450,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "units",
    headerName: "Unidades",
    width: 100,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "tablePrices",
    headerName: "Vincular Tabela de Preço",
    width: 200,
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
      // <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      // <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
    ],
  },
];

export const rowsInsurance: GridRowsProp = [
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 2,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: "Associação dos Médicos de Hospitais Privados do DF",
    units: "0",
    tablePrices: "",
  },
];
