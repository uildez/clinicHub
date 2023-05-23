import { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";

// Import's
import { columns } from "../../_fakeData/DataPacients";
import { ButtonBack } from "../../components/ButtonBack";
import { CalendarModel } from "../../components/employee/CalendarModel";

//Material-UI
import { Box, MenuItem, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { filterOptions } from "../../_fakeData/DataCalendar";

interface PacientsTypes {
  _id: string,
  name: string,
  email: string,
  date: Date,
  phone: string,
  cpf: string,
  createdAt: string,
  __v: number

}

export const Schedule = () => {
  const [filter, setFilter] = useState("");
  const [pacients, setPacients] = useState<PacientsTypes[]>([]);

  //Handle Filter
  const handleFilter = (event: any) => {
    event.stopPropagation();
    setFilter(event.target.value as string);
  };

  useEffect(() => {
    axios.get('https://backend-clinic-hub.vercel.app/authClients/clients')
      .then(response => {
        setPacients(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(pacients)

  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">
      <ButtonBack />
      <div className="flex lg:flex-row flex-col justify-between lg:h-[400px] h-[700px] p-8 bg-white shadow-xl rounded-lg text-blue-600 mb-4 gap-8">
        <div className="lg:w-[30%] w-full">
          <h2 className="text-xl font-semibold mb-2">Filtros</h2>
          <Box>
            <TextField
              label="Filtro"
              variant="outlined"
              value={filter}
              onChange={handleFilter}
              className="w-full"
              select
            >
              {filterOptions.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </div>
        {filter ? (
          <div className="lg:w-[70%] w-full h-full overflow-hidden">
            {filterOptions?.map((item) => (
              <>
                <CalendarModel key={item.value} filter={filter} />
              </>
            ))}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center h-full w-full bg-blue-600 rounded-lg">
              <h2 className="text-white texl-9xl text-center font-semibold w-3/4">
                Use de filtro ao lado para ver o Calendário
              </h2>
            </div>
          </>
        )}
      </div>

      <div className="flex w-full justify-between mb-4">
        <Link
          to="/portaldocolaborador/pacientes/novo-paciente"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          Novo Paciente
        </Link>
        {/* <Link
          to=""
          className="flex items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-800 transition-all rounded-lg"
        >
          <i className="fa-regular fa-calendar"></i> Novo Agendamento
        </Link> */}
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
            Foram encontrados <strong>{pacients.length}</strong> pacientes
          </span>
          <DataGrid
            rows={pacients}
            columns={columns}
            getRowId={(row) => row?._id}
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
