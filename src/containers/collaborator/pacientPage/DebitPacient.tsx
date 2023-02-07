import React, { useState } from "react";

// React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Import's
import {
  columnsDebitPacient,
  rowsDebitPacient,
} from "../../../_fakeData/DataDebitPacient";
import {
  FormInputsNewDebit,
  schemaNewDebit,
} from "../../../validations/NewDebit";

// Material UI
import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material/styles";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: ["90%", "70%"],
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: ".5rem",
};

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: { main: "#1976d2" },
    },
  })
);

const insuranceOptions = [
  "Convênio 1",
  "Convênio 2",
  "Convênio 3",
  "Convênio 4",
  "Convênio 5",
  "Convênio 6",
  "Convênio 7",
  "Convênio 8",
  "Convênio 9",
  "Convênio 10",
  "Convênio 11",
  "Convênio 12",
  "Convênio 13",
  "Convênio 14",
  "Convênio 15",
];

const procedureOptions = [
  "Tabela AMB 92",
  "97 - Tabela Própria Taxas TRT",
  "Outras Tabelas",
  "Consulta de Infectologia",
  "0 - Outras Tabelas (Central)",
  "1 - CBHPM 2012 (Central)",
  "2 - CBHPM 2010 (Central)",
  "20 - TUSS - Medicamentos (Central)",
  "22 - TUSS - Procedimentos e eventos em saúde (medicina, odonto e demais áreas de saúde) (Central)",
  "40 - CBHPM 2005 (Central)",
  "50 - CBHPM 2008 (Central)",
  "51 - CBHPM 2009 (Central)",
  "90 - Tabela Própria Pacote Odontológico (Central)",
  "94 - Tabela Própria Procedimentos (Central)",
  "98 - Tabela Própria de Pacotes (Central)",
  "99 - Tabela Própria das Operadoras (Central)",
];

const selectRegionOptions = [
  "Região 1",
  "Região 2",
  "Região 3",
  "Região 4",
  "Região 5",
  "Região 6",
  "Região 7",
  "Região 8",
  "Região 9",
];

export const DebitPacient = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dateNewDebit, setDateNewDebit] = useState<Date | null>(null);
  const [insurance, setInsurance] = useState("");
  const [procedure, setProcedure] = useState("");
  const [select, setSelect] = useState("");

  //Handle Insurance
  const handleInsurance = (event: any) => {
    event.stopPropagation();
    setInsurance(event.target.value as string);
  };

  //Handle Procedure
  const handleProcedure = (event: any) => {
    event.stopPropagation();
    setProcedure(event.target.value as string);
  };

  //Handle Select
  const handleSelect = (event: any) => {
    event.stopPropagation();
    setSelect(event.target.value as string);
  };

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputsNewDebit>({
    resolver: yupResolver(schemaNewDebit),
  });

  //HandleSubmit
  const handleSubmit = (data: any) => {
    console.log(data);
    setOpen(false);
    // navigate("/portaldocolaborador");
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full p-8 bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <div className="flex w-full justify-between mb-4">
          <button
            onClick={handleOpen}
            className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-green-500/50 transition duration-[500ms] ease-in-out"
          >
            + Novo Débito
          </button>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-8 w-full mb-8 mt-4">
          <div className="flex flex-col w-full bg-green-500 text-white text-left p-8 rounded-lg">
            <span className="text-sm uppercase mb-4">Total recebido</span>
            <h2 className="text-3xl font-semibold">R$</h2>
          </div>
          <div className="flex flex-col w-full bg-blue-500 text-white text-left p-8 rounded-lg">
            <span className="text-sm uppercase mb-4">Total a receber</span>
            <h2 className="text-3xl font-semibold">R$</h2>
          </div>
        </div>

        <div className="flex w-full justify-between mb-4">
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rowsDebitPacient}
                  columns={columnsDebitPacient}
                  checkboxSelection
                />
              </div>
            </ThemeProvider>
          </StyledEngineProvider>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex w-full items-center justify-between mb-4">
              <h3 className="text-lg text-blue-600 font-bold">Novo Débito</h3>

              <button onClick={handleClose}>
                <i className="fa-solid fa-square-xmark text-blue-600 hover:text-blue-700 text-4xl hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"></i>
              </button>
            </div>
            <form
              onSubmit={onSubmit(handleSubmit)}
              className="max-h-[400px] overflow-y-scroll"
            >
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                <TextField
                  {...register("procedurePayment")}
                  label="Serviço a ser Pago*"
                  variant="outlined"
                  value={procedure}
                  onChange={handleProcedure}
                  helperText={errors?.procedurePayment?.message}
                  error={errors?.procedurePayment ? true : false}
                  className="w-full"
                  select
                >
                  {procedureOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <DatePicker
                  label="Data*"
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      {...register("dateNewDebit")}
                      helperText={errors?.dateNewDebit?.message}
                      error={errors?.dateNewDebit ? true : false}
                      className="w-full"
                    />
                  )}
                  value={dateNewDebit}
                  onChange={(newValue: any) => {
                    setDateNewDebit(newValue);
                  }}
                />
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full p-4 border-2 rounded-lg my-8">
                <TextField
                  {...register("insurance")}
                  label="Plano*"
                  variant="outlined"
                  value={insurance}
                  onChange={handleInsurance}
                  helperText={errors?.insurance?.message}
                  error={errors?.insurance ? true : false}
                  className="w-full"
                  select
                >
                  {insuranceOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  {...register("select")}
                  label="Dente/Região"
                  variant="outlined"
                  value={select}
                  onChange={handleSelect}
                  helperText={errors?.select?.message}
                  error={errors?.select ? true : false}
                  className="w-full"
                  select
                >
                  {selectRegionOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  {...register("price")}
                  label="Valor*"
                  variant="outlined"
                  helperText={errors?.price?.message}
                  error={errors?.price ? true : false}
                  className="w-full"
                />

                <TextField
                  {...register("professional")}
                  label="Profissional*"
                  variant="outlined"
                  helperText={errors?.professional?.message}
                  error={errors?.professional ? true : false}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col items-center">
                <button className="py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-green-500/50 transition duration-[500ms] ease-in-out mb-8">
                  Adicionar Tratamento
                </button>
                <TextField
                  {...register("obs")}
                  label="Observações*"
                  variant="outlined"
                  className="w-full pt-8"
                  multiline
                  rows={8}
                />
                <div className="flex flex-col items-center my-8">
                  <span className="text-gray-500">Valor Total</span>
                  <p className="text-gray-700 font-semibold text-xl">
                    RS 20,00
                  </p>
                </div>
              </div>
              <div className="flex w-full items-end justify-end mb-4">
                <button
                  type="submit"
                  className="flex text-base text-white w-fit px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                >
                  Adicionar Tratamento
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};
