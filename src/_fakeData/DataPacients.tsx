import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export const columns: GridColDef[] = [
  {
    field: "pacientName",
    headerClassName: "header",
    headerName: "Paciente",
    width: 200,
  },
  {
    field: "phone",
    headerClassName: "header",
    headerName: "Telefone",
    width: 190,
  },
  {
    field: "age",
    headerClassName: "header",
    headerName: "Idade",
    type: "number",
    width: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "date",
    headerClassName: "header",
    headerName: "Último Atendimento",
    width: 190,
    align: "left",
    type: "dateTime",
  },
  {
    field: "insurance",
    headerClassName: "header",
    headerName: "Convênio",
    type: "boolean",
    width: 120,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "status",
    headerClassName: "header",
    headerName: "Dias sem Atendimento",
    width: 190,
    align: "left",
    renderCell: (params) => {
      if (params.formattedValue > 30 && params.formattedValue < 50) {
        return (
          <p className="bg-yellow-400 w-full text-center py-1 px-4 font-bold text-white rounded-full">
            {params.formattedValue} Dias
          </p>
        );
      } else if (params.formattedValue < 30) {
        return (
          <p className="bg-green-500 w-full text-center py-1 px-4 font-bold text-white rounded-full">
            {params.formattedValue} Dias
          </p>
        );
      } else if (params.formattedValue > 50 && params.formattedValue < 100) {
        return (
          <p className="bg-orange-500 w-full text-center py-1 px-4 font-bold text-white rounded-full">
            {params.formattedValue} Dias
          </p>
        );
      } else if (params.formattedValue > 100) {
        return (
          <p className="bg-blue-600 w-full text-center py-1 px-4 font-bold text-white rounded-full">
            {params.formattedValue} Dias
          </p>
        );
      }
    },
  },
  {
    field: "actions",
    headerClassName: "header",
    headerName: "Ações",
    width: 120,
    align: "left",
    description: "Clique no botão para editar as informações do paciente.",
    renderCell: () => {
      return (
        <Link to="/portaldocolaborador/pacientes/pagina-paciente/sobre">
          <span className="flex gap-2 items-center w-[40px] h-[40px] text-lg text-white lowercase bg-green-500 rounded-lg hover:bg-green-700">
            <i className="fa-solid fa-user-pen mx-auto"></i>
          </span>
        </Link>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    date: new Date(2018, 2, 1),
    pacientName: "Nome do Paciente",
    age: 20,
    phone: "(00) 00000-0000",
    insurance: true,
    status: 20,
  },
  {
    id: 2,
    date: new Date(2022, 3, 2),
    pacientName: "Nome do Paciente",
    age: 45,
    phone: "(00) 00000-0000",
    insurance: true,
    status: 45,
  },
  {
    id: 3,
    date: new Date(2021, 4, 8),
    pacientName: "Nome do Paciente",
    age: 60,
    phone: "(00) 00000-0000",
    insurance: false,
    status: 2,
  },
  {
    id: 4,
    date: new Date(2022, 4, 5),
    pacientName: "Nome do Paciente",
    age: 76,
    phone: "(00) 00000-0000",
    insurance: true,
    status: 90,
  },
  {
    id: 5,
    date: new Date(2022, 4, 9),
    pacientName: "Nome do Paciente",
    age: 23,
    phone: "(00) 00000-0000",
    insurance: true,
    status: 150,
  },
  {
    id: 6,
    date: new Date(2021, 7, 2),
    pacientName: "Nome do Paciente",
    age: 12,
    phone: "(00) 00000-0000",
    insurance: false,
    status: 35,
  },
  {
    id: 7,
    date: new Date(2022, 8, 4),
    pacientName: "Nome do Paciente",
    age: 60,
    phone: "(00) 00000-0000",
    insurance: true,
    status: 65,
  },
  {
    id: 8,
    date: new Date(2020, 8, 6),
    pacientName: "Nome do Paciente",
    age: 88,
    phone: "(00) 00000-0000",
    insurance: false,
    status: 34,
  },
  {
    id: 9,
    date: new Date(2022, 9, 4),
    pacientName: "Nome do Paciente",
    age: 2,
    phone: "(00) 00000-0000",
    insurance: true,
    status: 23,
  },
];
