import { GridColDef } from "@mui/x-data-grid";
import { GridRowsProp } from "@mui/x-data-grid-pro";
import { Link } from "react-router-dom";

export const columnsTreatment: GridColDef[] = [
  {
    field: "plan",
    headerName: "Plano",
    width: 100,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "treatment",
    headerName: "Serviços",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "type",
    headerName: "Tipo de Serviço",
    width: 150,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "professional",
    headerName: "Profissional",
    width: 250,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "value",
    headerName: "Valor",
    width: 120,
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "payment",
    headerName: "Pagamento",
    align: "center",
    width: 200,
    headerAlign: "left",
    renderCell: (params) => {
      if (params.formattedValue === "Aprovado") {
        return (
          <p className="flex gap-1 items-center text-center justify-center w-full bg-green-500 py-1 px-2 font-bold text-white rounded-lg">
            <i className="fa-regular fa-circle-check"></i> Recebido
          </p>
        );
      } else if (params.formattedValue === "A receber") {
        if (params.row.status === "Cancelado") {
          return (
            <button
              disabled
              className="flex gap-1 items-center text-center justify-center w-full bg-gray-500 py-1 px-2 font-bold text-white rounded-lg transition-all ease-in-out"
            >
              <i className="fa-solid fa-dollar-sign"></i>Receber
            </button>
          );
        } else {
          return (
            <Link
              to="/portaldocolaborador/pacientes/pagina-paciente/debitos"
              className="flex gap-1 items-center text-center justify-center w-full bg-orange-500 py-1 px-2 hover:bg-orange-700 font-bold text-white rounded-lg transition-all ease-in-out"
            >
              <i className="fa-solid fa-dollar-sign"></i>Receber
            </Link>
          );
        }
      }
    },
  },
  {
    field: "status",
    headerName: "Status",
    align: "left",
    width: 180,
    headerAlign: "left",
    renderCell: (params) => {
      if (params.formattedValue === "Finalizado") {
        return (
          <p className="flex gap-1 items-center bg-green-500 py-1 px-4 font-bold text-white rounded-full">
            <i className="fa-regular fa-circle-check"></i>
            {params.formattedValue}
          </p>
        );
      } else if (params.formattedValue === "Em processo") {
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
    headerName: "Ações",
    width: 90,
    align: "left",
    description: "Clique no botão para ver as informações do serviço.",
    renderCell: (params) => {
      return (
        <Link
          to="/portaldocolaborador/pacientes/pagina-paciente/servicos/informacao-servico"
          className="flex gap-2 items-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all"
        >
          <i className="fa-solid fa-user-pen mx-auto"></i>
        </Link>
      );
    },
  },
];

export const rowsTreatment: GridRowsProp = [
  {
    id: 1,
    plan: "Particular",
    treatment: "Tratamento Resumido",
    type: "Exame",
    professional: "Dr(a) Nome do Profissional",
    value: 220.88,
    payment: "Aprovado",
    status: "Finalizado",
  },
  {
    id: 2,
    plan: "Particular",
    treatment: "Tratamento Resumido",
    type: "Consulta",
    professional: "Dr(a) Nome do Profissional",
    value: 220.88,
    payment: "Aprovado",
    status: "Finalizado",
  },
  {
    id: 3,
    plan: "Particular",
    treatment: "Tratamento Resumido",
    type: "Vacina",
    professional: "Dr(a) Nome do Profissional",
    value: 220.88,
    payment: "A receber",
    status: "Finalizado",
  },
  {
    id: 4,
    plan: "Particular",
    treatment: "Tratamento Resumido",
    type: "Exame",
    professional: "Dr(a) Nome do Profissional",
    value: 220.88,
    payment: "Aprovado",
    status: "Em processo",
  },
  {
    id: 5,
    plan: "Particular",
    treatment: "Tratamento Resumido",
    type: "Consulta",
    professional: "Dr(a) Nome do Profissional",
    value: 220.88,
    payment: "A receber",
    status: "Em processo",
  },
  {
    id: 6,
    plan: "Particular",
    treatment: "Tratamento Resumido",
    type: "Consulta",
    professional: "Dr(a) Nome do Profissional",
    value: 220.88,
    payment: "A receber",
    status: "Cancelado",
  },
];

export const TreatmentPacient = () => {
  return (
    <>
      <h1 className="text-blue-600">TWETETSDFCMSLDKFJSDLKFJDOÇSLKFJ</h1>
    </>
  );
};
