import { useState } from "react";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const days = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const frequencies = [
  "Não se repete",
  "Diário",
  "Semanal (a cada 7 dias)",
  "Quinzenal (a cada 15 dias)",
  "Mensal (1 vez por mês)",
  "Semestral (a cada 6 meses)",
];

const columns: GridColDef[] = [
  {
    field: "day",
    headerClassName: "super-app-theme--header",
    headerName: "Dia da Semana",
    width: 200,
  },
  {
    field: "timeStart",
    headerName: "Hora Início",
    width: 220,
    align: "left",
    type: "time",
  },
  {
    field: "timeEnd",
    headerName: "Hora Final",
    width: 220,
    align: "left",
    type: "time",
  },
  {
    field: "frenquency",
    headerName: "Frenquência",
    width: 190,
    align: "left",
  },
  {
    field: "validateStart",
    headerName: "Validade Início",
    width: 220,
    align: "left",
    type: "time",
  },
  {
    field: "validateEnd",
    headerName: "Validade Final",
    width: 220,
    align: "left",
    type: "time",
  },
  {
    field: "actions",
    headerName: "Deletar",
    width: 90,
    align: "left",
    description: "Clique no botão para editar as informações do paciente.",
    renderCell: (params) => {
      return (
        <span className="flex gap-2 items-center w-[30px] h-[30px] text-sm text-white lowercase bg-gray-500 rounded-lg hover:bg-blue-700 cursor-pointer transition-all">
          <i className="fa-solid fa-user-pen mx-auto"></i>
        </span>
      );
    },
  },
];

export const GradeHours = () => {
  const [inputFields, setInputFields] = useState<any[]>([]);

  const [day, setDay] = useState("");
  const [frenquency, setFrenquency] = useState("");
  const [timeStart, setTimeStart] = useState<Date | null>(null);
  const [timeEnd, setTimeEnd] = useState<Date | null>(null);
  const [validateStart, setValidateStart] = useState<Date | null>(null);
  const [validateEnd, setValidateEnd] = useState<Date | null>(null);

  //Handle Day
  const handleDay = (event: any) => {
    setDay(event.target.value as string);
  };

  //Handle Frequency Value
  const handleFrenquency = (event: any) => {
    setFrenquency(event.target.value as string);
  };

  //Hanlde Submit
  const handleSubmit = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        day: day,
        timeStart: timeStart,
        timeEnd: timeEnd,
        validateStart: validateStart,
        validateEnd: validateEnd,
        frenquency: frenquency,
      },
    ]);
    console.log(inputFields);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg mt-4 overflow-hidden">
      <h1 className="text-base font-semibold bg-gray-300 p-4 mb-4">
        Adicionar Horário
      </h1>
      <form className="w-full">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full justify-between gap-2 px-4">
          <TextField
            label="Escolha um dia"
            variant="outlined"
            value={day}
            onChange={(event) => handleDay(event)}
            className="w-full"
            select
          >
            {days.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TimePicker
            label="Hora de Ínicio"
            renderInput={(params) => (
              <TextField {...params} className="w-full" />
            )}
            value={timeStart}
            onChange={(newValue) => {
              setTimeStart(newValue);
            }}
          />
          <TimePicker
            label="Hora de Fim"
            renderInput={(params) => (
              <TextField {...params} className="w-full" />
            )}
            value={timeEnd}
            onChange={(newValue) => {
              setTimeEnd(newValue);
            }}
          />

          <TextField
            label="Frequência"
            variant="outlined"
            value={frenquency}
            onChange={(event) => handleFrenquency(event)}
            className="w-full"
            select
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fa-solid fa-repeat"></i>
                </InputAdornment>
              ),
            }}
          >
            {frequencies.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>

          <DatePicker
            label="Validade Início"
            renderInput={(params: any) => (
              <TextField {...params} className="w-full" />
            )}
            value={validateStart}
            onChange={(newValue: any) => {
              setValidateStart(newValue);
            }}
          />

          <DatePicker
            label="Validade Fim"
            renderInput={(params: any) => (
              <TextField {...params} className="w-full" />
            )}
            value={validateEnd}
            onChange={(newValue: any) => {
              setValidateEnd(newValue);
            }}
          />
        </div>
        <div className="flex w-full items-end justify-end gap-2 px-4 mt-4">
          <span
            onClick={handleSubmit}
            className="flex bg-blue-600 text-white text-base w-fit px-8 py-4 justify-center items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
          >
            <i className="fa-solid fa-plus mr-2"></i> Salvar
          </span>
        </div>
      </form>
      <div className="w-full h-[300px] mt-8 px-4 py-4">
        <DataGrid
          rows={inputFields}
          columns={columns}
          pagination={true}
          autoHeight={true}
          pageSizeOptions={[7]}
        />
      </div>
    </div>
  );
};
