// Yup
import * as yup from "yup";

//Interfaces
export interface FormInputsNewPacient {
  file: File | undefined;
  name: string;
  date: Date;
  genre: string;
  socialname: string;
  height: number;
  weight: number;
  chart: number;
  priority: string;

  // Adress Info
  CEP: number;
  adress: string;
  numberHouse: number;
  complement: string;

  district: string;
  city: string;
  state: string;
  country: string;

  // Contact Info
  phone: string;
  phone2: string;
  tel: string;
  email: string;

  // Documents
  role: string;
  scholling: string;
  cpf: string;
  rg: string;
  naturalness: string;
  marital: string;
  origin: string;
  skin: string;
  obs: string;
}

//Configuration Yup
export const schemaNewPacient = yup
  .object()
  .shape({
    file: yup.mixed().required("File is required"),
    name: yup.string().required("Campo obrigatório."),
    date: yup.string().required("Campo obrigatório."),
    genre: yup.string().required("Campo obrigatório."),
    socialname: yup.string().notRequired(),
    height: yup.number().notRequired(),
    weight: yup.number().notRequired(),
    chart: yup.number().notRequired(),
    priority: yup.string().notRequired(),

    // Adress Info
    CEP: yup.string().required("Preencha esse campo para continuar"),
    adress: yup.string().notRequired(),
    numberHouse: yup.number().notRequired(),
    complement: yup.string().notRequired(),
    district: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
    country: yup.string().notRequired(),

    // Contact Info
    phone: yup.string().required("Campo obrigatório."),
    phone2: yup.string().notRequired(),
    tel: yup.string().notRequired(),
    email: yup.string().notRequired(),

    // Documents
    role: yup.string().notRequired(),
    scholling: yup.string().notRequired(),
    cpf: yup
      .number()
      .required("Campo obrigatório.")
      .min(11, "A quantidade mínima é de 11 caracteres.")
      .typeError("Esse campo não pode ser vazio"),
    rg: yup.number().notRequired(),
    naturalness: yup.string().notRequired(),
    marital: yup.string().notRequired(),
    origin: yup.string().notRequired(),
    skin: yup.string().notRequired(),
    obs: yup.string().notRequired(),
  })
  .required();
