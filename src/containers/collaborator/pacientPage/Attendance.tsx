import React, { useState } from "react";

// React-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Import's
import { columnsBudget, rowsBudget } from "../../../fakeData/DataBudgetPacient";
import {
  FormInputsNewAnamnese,
  schemaNewAnamnese,
} from "../../../validations/NewAnamnese";

// Material UI
import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
  styled,
} from "@mui/material/styles";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MenuItem, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

// const Root = styled("div")({
//   position: "absolute" as "absolute",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "justify-between",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: ["90%", "70%"],
//   minHeight: "500px",
//   bgcolor: "background.paper",
//   border: "0px solid #000",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: ".5rem",
// });

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: { main: "#1976d2" },
    },
  })
);

const modelsOptions = [
  "Anamnese",
  "Avaliação Física",
  "Avaliação Corporal",
  "Histórico Clínico",
];

export const Attendance = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dateAnamnese, setDateAnamnese] = useState<Date | null>(null);
  const [model, setModel] = useState("");

  //Handle Model Anamese
  const handleModel = (event: any) => {
    event.stopPropagation();
    setModel(event.target.value as string);
  };

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputsNewAnamnese>({
    resolver: yupResolver(schemaNewAnamnese),
  });

  //HandleSubmit
  const handleSubmit = (data: any) => {
    console.log(data);
    // navigate("/portaldocolaborador");
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full min-h-[400px] p-8 bg-slate-100 shadow-xl rounded-lg text-gray-600 overflow-hidden">
        <div className="flex w-full justify-between mb-4">
          <button
            onClick={handleOpen}
            className="py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white transition-all rounded-lg"
          >
            + Novo Atendimento
          </button>
        </div>

        <div className="flex flex-col gap-2 items-center mb-8">
          <i className="fa-solid fa-file-circle-xmark text-9xl"></i>
          <h1 className="w-full text-center my-auto text-xl font-semibold">
            Paciente sem Atendimento <br />
            realizado
          </h1>
        </div>
        <div className="flex flex-col items-center text-left w-full mx-auto text-sm gap-2">
          <ul>
            <i className="fa-solid fa-check mr-2"></i> Lembrete de
            <strong> alerta</strong> de restrições, alertas e etc
          </ul>
          <ul>
            <i className="fa-solid fa-check mr-2"></i> Personalize e configure
            os
            <strong> modelos</strong> de anamnese
          </ul>
          <ul>
            <i className="fa-solid fa-check mr-2"></i> Conheça o
            <strong> histórico</strong> de saúde do seu paciente
          </ul>
          <ul>
            <i className="fa-solid fa-check mr-2"></i>
            <strong>Assinatura eletrônica</strong> de documentos emitidos
          </ul>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute" as "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "justify-between",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: ["90%", "70%"],
              minHeight: "500px",
              bgcolor: "background.paper",
              border: "0px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: ".5rem",
            }}
          >
            <div className="flex w-full items-center justify-between mb-4">
              <h3 className="text-lg text-blue-600 font-bold">
                Novo Atendimento
              </h3>

              <button onClick={handleClose}>
                <i className="fa-solid fa-square-xmark text-blue-600 hover:text-blue-700 text-4xl hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"></i>
              </button>
            </div>
            <form
              onSubmit={onSubmit(handleSubmit)}
              className="flex flex-col justify-between max-h-[400px] overflow-y-scroll pt-4"
            >
              <div className="flex flex-col gap-4 w-full">
                <div className="grid grid-cols-1 gap-4">
                  <TextField
                    {...register("model")}
                    label="Escolha o tipo de Atendimento*"
                    variant="outlined"
                    value={model}
                    onChange={handleModel}
                    helperText={errors?.model?.message}
                    error={errors?.model ? true : false}
                    className="w-full"
                    select
                  >
                    {modelsOptions.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                {model ? (
                  <>
                    {model.includes("Anamnese") ? (
                      <>
                        <div className="flex flex-col gap-4">
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <TextField
                              label="Título da Anamnese*"
                              variant="outlined"
                              {...register("titleAnamnese")}
                              className="w-full"
                            />

                            <DatePicker
                              label="Data*"
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  {...register("dateAnamnese")}
                                  className="w-full"
                                />
                              )}
                              value={dateAnamnese}
                              onChange={(newValue: any) => {
                                setDateAnamnese(newValue);
                              }}
                            />
                          </div>

                          <TextField
                            {...register("obsAnamnese")}
                            label="Observações"
                            multiline
                            rows={4}
                            variant="outlined"
                            className="w-full"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {model.includes("Avaliação Física") ? (
                      <>
                        <div className="flex flex-col gap-4">
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <TextField
                              label="Título da Avaliação Física*"
                              variant="outlined"
                              {...register("titlePhysicalAssessment")}
                              helperText={errors?.dateAnamnese?.message}
                              error={errors?.dateAnamnese ? true : false}
                              className="w-full"
                            />

                            <DatePicker
                              label="Data*"
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  {...register("datePhysicalAssessment")}
                                  helperText={errors?.dateAnamnese?.message}
                                  error={errors?.dateAnamnese ? true : false}
                                  className="w-full"
                                />
                              )}
                              value={dateAnamnese}
                              onChange={(newValue: any) => {
                                setDateAnamnese(newValue);
                              }}
                            />
                          </div>

                          <TextField
                            {...register("obsPhysicalAssessment")}
                            label="Observações"
                            multiline
                            rows={4}
                            variant="outlined"
                            className="w-full"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {model.includes("Avaliação Corporal") ? (
                      <>
                        <div className="flex flex-col gap-4">
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <TextField
                              label="Título da Avaliação Corporal*"
                              variant="outlined"
                              {...register("titleBodyAssessment")}
                              helperText={errors?.dateAnamnese?.message}
                              error={errors?.dateAnamnese ? true : false}
                              className="w-full"
                            />

                            <DatePicker
                              label="Data*"
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  {...register("dateBodyAssessment")}
                                  helperText={errors?.dateAnamnese?.message}
                                  error={errors?.dateAnamnese ? true : false}
                                  className="w-full"
                                />
                              )}
                              value={dateAnamnese}
                              onChange={(newValue: any) => {
                                setDateAnamnese(newValue);
                              }}
                            />
                          </div>

                          <TextField
                            {...register("obsBodyAssessment")}
                            label="Observações"
                            multiline
                            rows={4}
                            variant="outlined"
                            className="w-full"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {model.includes("Histórico Clínico") ? (
                      <>
                        <div className="flex flex-col gap-4">
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <TextField
                              label="Título do Histórico Clínico*"
                              variant="outlined"
                              {...register("titleClinicalHistory")}
                              helperText={errors?.dateAnamnese?.message}
                              error={errors?.dateAnamnese ? true : false}
                              className="w-full"
                            />

                            <DatePicker
                              label="Data*"
                              renderInput={(params: any) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  {...register("dateClinicalHistory")}
                                  helperText={errors?.dateAnamnese?.message}
                                  error={errors?.dateAnamnese ? true : false}
                                  className="w-full"
                                />
                              )}
                              value={dateAnamnese}
                              onChange={(newValue: any) => {
                                setDateAnamnese(newValue);
                              }}
                            />
                          </div>

                          <TextField
                            {...register("obsClinicalHistory")}
                            label="Observações"
                            multiline
                            rows={4}
                            variant="outlined"
                            className="w-full"
                          />
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <h4 className="text-gray-400 text-sm mt-4">
                    Selecione o{" "}
                    <strong>
                      tipo de atendimento para carregar as perguntas...
                    </strong>
                  </h4>
                )}
              </div>

              <div className="flex md:flex-row flex-col w-full items-end justify-end md:gap-4 ">
                <button
                  onClick={handleClose}
                  className="flex text-base text-white md:w-fit w-[300px] px-4 gap-2 font-medium py-2 mt-4 bg-gray-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                >
                  Fechar
                </button>
                <button
                  // type="submit"
                  className="flex text-base text-white md:w-fit w-[300px] px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                >
                  Emitir Anamense
                </button>
                <button
                  type="submit"
                  className="flex text-base text-white md:w-fit w-[300px] px-4 gap-2 font-medium py-2 mt-4 bg-blue-600 cursor-pointer items-center justify-center rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition duration-[500ms] ease-in-out"
                >
                  Salvar Anamnese
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};
