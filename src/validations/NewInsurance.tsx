// Yup
import * as yup from "yup";

//Interfaces
export interface FormInputsNewInsurance {
  file: File | undefined;
  name: string;
  corporateName: string;
  cnpj: string;
  ans: string;
  queryReturn: number;
  typeReceipt: string;
  receipt: number;
  guideNumber: string;
  tissVersion: string;

  // date: Date;

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
  setor: string;
  email: string;
  personContact: string;
  
  phone2: string;
  setor2: string;
  email2: string;
  personContact2: string;

  phone3: string;
  setor3: string;
  email3: string;
  personContact3: string;

  // Insurance Taxes
  secondProcedure: number;
  thirdProcedure: number;
  fourthProcedure: number;
  escalation: string;
  calculationUnit: string;

  valueCH: number;
  valueUCO: number;
  valueMovie: number;
  
  // Insurance Tables
  materials: string;
  medicines: string;
  taxes: string;
  movies: string;
  procedures: string;
  calculationTable: string;
  sizeTable: string;
}

//Configuration Yup
export const schemaNewInsurance = yup
  .object()
  .shape({
    file: yup.mixed().required("File is required"),
    name: yup.string().required("Campo obrigatório."),
    corporateName: yup.string().notRequired(),
    cnpj: yup.string().notRequired(),
    ans: yup.string().notRequired(),
    queryReturn: yup.number().notRequired(),
    typeReceipt: yup.string().notRequired(),
    receipt: yup.number().notRequired(),
    guideNumber: yup.string().notRequired(),
    tissVersion: yup.string().notRequired(),

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
    setor: yup.string().notRequired(),
    email: yup.string().notRequired(),
    personContact: yup.string().notRequired(),

    phone2: yup.string().required("Campo obrigatório."),
    setor2: yup.string().notRequired(),
    email2: yup.string().notRequired(),
    personContact2: yup.string().notRequired(),
    
    phone3: yup.string().required("Campo obrigatório."),
    setor3: yup.string().notRequired(),
    email3: yup.string().notRequired(),
    personContact3: yup.string().notRequired(),
    
    // Insurance Taxes
    secondProcedure: yup.number().notRequired(),
    thirdProcedure: yup.number().notRequired(),
    fourthProcedure: yup.number().notRequired(),
    escalation: yup.string().notRequired(),
    calculationUnit: yup.string().notRequired(),

    valueCH: yup.string().notRequired(),
    valueUCO: yup.string().notRequired(),
    valueMovie: yup.string().notRequired(),
    
    // Insurance Tables
    materials: yup.string().notRequired(),
    medicines: yup.string().notRequired(),
    taxes: yup.string().notRequired(),
    movies: yup.string().notRequired(),
    procedures: yup.string().notRequired(),
    calculationTable: yup.string().notRequired(),
    sizeTable: yup.string().notRequired(),
  })
  .required();
