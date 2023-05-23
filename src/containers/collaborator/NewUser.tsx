import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { ButtonBack } from "../../components/ButtonBack";

const types = ["Enfermeiro", "Administrador", "Atendente"];
const companies = [
  "Elfa/Medicamentos",
  "3M",
  "ABA Hospitalar",
  "Becton Dickinson",
  "Bling",
  "CM Coma",
];

export const NewUser = () => {
  const [newUser, setNewUser] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  // const [company, setCompany] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  //Handle Email
  const handleEmail = (event: any) => {
    setEmail(event.target.value as string);
  };

  //Handle CPF
  const handleCPF = (event: any) => {
    setCpf(event.target.value as string);
  };

  //Handle Password
  const handlePassword = (event: any) => {
    setPassword(event.target.value as string);
  };

  //Handle Type
  const handleType = (event: any) => {
    setType(event.target.value as string);
  };

  // //Handle Role
  // const handleCompany = (event: any) => {
  //   event.stopPropagation();
  //   setCompany(event.target.value as string);
  // };

  //Handle Random Password
  const handleSecretPassword = () => {
    var pass = "";
    var str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (let i = 1; i <= 12; i++) {
      var char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  };

  //Handle Submit
  const handleSubmit = () => {
    console.log(newUser);
  };

  return (
    <div className="lg:px-8 px-4 py-4 bg-slate-100">

      <ButtonBack />
      <div className="flex flex-col justify-between w-full pt-8 pb-4 px-8 bg-white shadow-xl rounded-lg text-blue-600 mb-4">
        <form className="flex flex-col gap-4">
          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex flex-col gap-4 justify-between w-full">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg text-blue-600 font-bold mb-4">
                  Novo Usuário
                </h3>
                <TextField
                  label="Email do Colaborador"
                  variant="outlined"
                  value={email}
                  onChange={(event) => handleEmail(event)}
                />

                <TextField
                  label="CPF do Colaborador"
                  variant="outlined"
                  value={cpf}
                  onChange={(event) => handleCPF(event)}
                />

                <TextField
                  label="Senha de Acesso"
                  variant="outlined"
                  value={password}
                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                  onChange={(event) => handlePassword(event)}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          size="large">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <TextField
                label="Perfil de Usuário"
                variant="outlined"
                value={type}
                onChange={(event) => handleType(event)}
                className="w-full"
                select
              >
                {types.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
              <span
                onClick={handleSecretPassword}
                className="flex bg-blue-600 text-white text-base px-4 justify-center items-center min-h-[50px] rounded-md transition-all hover:bg-blue-800 cursor-pointer"
              >
                <i className="fa-solid fa-lock mr-2"></i>Gerar senha
              </span>
            </div>
            <div className="flex flex-col gap-8 w-full">
              {/* <TextField
              label="Empresa"
              variant="outlined"
              value={company}
              onChange={handleCompany}
              className="w-full"
              select
            >
              {companies.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField> */}
              <h3 className="text-lg text-blue-600 font-bold">
                Telas e Unidades de Acesso
              </h3>
              {type ? (
                <>
                  {type.includes("Administrador") ? (
                    <>
                      <div className="flex flex-row gap-4 w-full">
                        <FormControl
                          component="fieldset"
                          className="w-full"
                          variant="standard"
                        >
                          <FormLabel>Unidades de Acesso</FormLabel>
                          <FormGroup>
                            <div className="grid md:grid-cols-3">
                              <FormControlLabel
                                control={<Checkbox name="Unidade 1" checked />}
                                label="Unidade 1"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Unidade 2" />}
                                label="Unidade 2"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Unidade 3" />}
                                label="Unidade 3"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Unidade 4" />}
                                label="Unidade 4"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Unidade 5" />}
                                label="Unidade 5"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Unidade 6" />}
                                label="Unidade 6"
                              />
                            </div>
                          </FormGroup>
                          <FormHelperText>
                            Selecione as unidades que o usuário terá acesso
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="flex flex-row gap-4 w-full">
                        <FormControl
                          component="fieldset"
                          className="w-full"
                          variant="standard"
                        >
                          <FormLabel>Telas do sistema</FormLabel>
                          <FormGroup>
                            <div className="grid md:grid-cols-3">
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Agendamento" />
                                }
                                label="Agendamento"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Colaboradores" />
                                }
                                label="Colaboradores"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Atendimento" />
                                }
                                label="Atendimento"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Convênios" />}
                                label="Convênios"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Equipamentos" />
                                }
                                label="Equipamentos"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Estoque" />}
                                label="Estoque"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Financeiro" />}
                                label="Financeiro"
                              />
                            </div>
                          </FormGroup>
                          <FormHelperText>
                            Selecione as telas que o usuário terá acesso na
                            unidade
                          </FormHelperText>
                        </FormControl>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {type.includes("Atendente") ? (
                    <>
                      <div className="flex flex-row gap-4 w-full">
                        <FormControl
                          component="fieldset"
                          className="w-full"
                          variant="standard"
                        >
                          <FormLabel>Unidades de Acesso</FormLabel>
                          <FormGroup>
                            <div className="grid md:grid-cols-3">
                              <FormControlLabel
                                control={<Checkbox name="Unidade 1" checked />}
                                label="Unidade 1"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 2" />}
                                label="Unidade 2"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 3" />}
                                label="Unidade 3"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 4" />}
                                label="Unidade 4"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 5" />}
                                label="Unidade 5"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 6" />}
                                label="Unidade 6"
                              />
                            </div>
                          </FormGroup>
                          <FormHelperText>
                            Selecione as unidades que o usuário terá acesso
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="flex flex-row gap-4 w-full">
                        <FormControl
                          component="fieldset"
                          className="w-full"
                          variant="standard"
                        >
                          <FormLabel>Telas do sistema</FormLabel>
                          <FormGroup>
                            <div className="grid md:grid-cols-3">
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Agendamento" />
                                }
                                label="Agendamento"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox disabled name="Colaboradores" />
                                }
                                label="Colaboradores"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Atendimento" />
                                }
                                label="Atendimento"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Convênios" />}
                                label="Convênios"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Equipamentos" />
                                }
                                label="Equipamentos"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Estoque" />}
                                label="Estoque"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox disabled name="Financeiro" />
                                }
                                label="Financeiro"
                              />
                            </div>
                          </FormGroup>
                          <FormHelperText>
                            Selecione as telas que o usuário terá acesso na
                            unidade
                          </FormHelperText>
                        </FormControl>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {type.includes("Enfermeiro") ? (
                    <>
                      <div className="flex flex-row gap-4 w-full">
                        <FormControl
                          component="fieldset"
                          className="w-full"
                          variant="standard"
                        >
                          <FormLabel>Unidades de Acesso</FormLabel>
                          <FormGroup>
                            <div className="grid md:grid-cols-3">
                              <FormControlLabel
                                control={<Checkbox name="Unidade 1" checked />}
                                label="Unidade 1"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 2" />}
                                label="Unidade 2"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 3" />}
                                label="Unidade 3"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 4" />}
                                label="Unidade 4"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 5" />}
                                label="Unidade 5"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Unidade 6" />}
                                label="Unidade 6"
                              />
                            </div>
                          </FormGroup>
                          <FormHelperText>
                            Selecione as unidades que o usuário terá acesso
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="flex flex-row gap-4 w-full">
                        <FormControl
                          component="fieldset"
                          className="w-full"
                          variant="standard"
                        >
                          <FormLabel>Telas do sistema</FormLabel>
                          <FormGroup>
                            <div className="grid md:grid-cols-3">
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Agendamento" />
                                }
                                label="Agendamento"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox disabled name="Colaboradores" />
                                }
                                label="Colaboradores"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox disabled name="Atendimento" />
                                }
                                label="Atendimento"
                              />
                              <FormControlLabel
                                control={<Checkbox disabled name="Convênios" />}
                                label="Convênios"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox checked name="Equipamentos" />
                                }
                                label="Equipamentos"
                              />
                              <FormControlLabel
                                control={<Checkbox checked name="Estoque" />}
                                label="Estoque"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox disabled name="Financeiro" />
                                }
                                label="Financeiro"
                              />
                            </div>
                          </FormGroup>
                          <FormHelperText>
                            Selecione as telas que o usuário terá acesso na
                            unidade
                          </FormHelperText>
                        </FormControl>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center bg-blue-600 rounded-md w-full h-full text-white">
                  Selecione um perfil para ver as telas e unidades de acesso
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end w-full">
            <span
              onClick={handleSubmit}
              className="flex bg-blue-600 text-white text-xl px-4 mt-8 min-h-[50px] w-fit justify-end items-center rounded-md transition-all hover:bg-blue-800 cursor-pointer"
            >
              <i className="fa-solid fa-plus mr-2"></i> Salvar
            </span>
          </div>
        </form>
      </div>
    </div>
  )
};

// <FormControl component="fieldset" variant="standard">
//                     <FormLabel component="legend">Telas do sistema</FormLabel>
//
//                     </FormGroup>
//                     <FormHelperText>
//                       Selecione as telas do sistema que o usuário terá acesso
//                     </FormHelperText>
//                   </FormControl>
