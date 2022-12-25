import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  GridColumns,
  GridRowsProp,
  GridActionsCellItem,
} from "@mui/x-data-grid-pro";

export const columnsInsurance: GridColumns = [
  {
    field: "name",
    headerName: "Nome",
    width: 200,
    align: "left",
    headerAlign: "left",
  },    
  { field: "socialReason", headerName: "Razão Social", width: 450, align: "left", headerAlign: "left",},
  { field: "units", headerName: "Unidades", width: 100, align: "left", headerAlign: "left",},
  { field: "tablePrices", headerName: "Vincular Tabela de Preço",  width: 200, align: "left", headerAlign: "left",},
  {
    field: "actions",
    type: "actions",
    headerName: "Ações",
    width: 100,
    align: "left",
    headerAlign: "left",
    getActions: () => [
      <GridActionsCellItem icon={<EditIcon />} label="Editar" />,
      <GridActionsCellItem icon={<DeleteIcon />} label="Deletar" />
    ],
  },
];

export const rowsInsurance: GridRowsProp = [
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: '',
  },
  {
    id: 2,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: ''
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: ''
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: ''
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: '',
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: '',
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: ''
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: '',
  },
  {
    id: 1,
    name: "Nome do Convênio",
    socialReason: 'Associação dos Médicos de Hospitais Privados do DF',
    units: '0',
    tablePrices: '',
  },
];
