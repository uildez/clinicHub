// Yup
import * as yup from "yup";

//Interfaces
export interface FormInputsNewStorage {
  file: File | undefined;
  name: string;
  type: string;
  code: string;
  category: string;
  manufacturer: string;
  lote: string;
  validity: string;
  apresentation: string;
  containing: string;
  unit: string;
  location: string;
  cd: string;

  apresentationDispensation: string;
  containingDispensation: string;
  unitDispensation: string;

  minDose: string;
  maxDose: string;
  unitPrescription: string;
  activePrinciple: string;

  minStorage: number;
  minStorageUnit: string;
  maxStorage: number;
  maxStorageUnit: string;
  validade: number;

  priceTicket: number;
  saleTicket: number;
}

//Configuration Yup
export const schemaNewStorage = yup
  .object()
  .shape({
    file: yup.mixed().required("File is required"),
    name: yup.string().required("Campo obrigatório."),
    type: yup.string().required("Campo obrigatório."),
    code: yup.string().notRequired(),
    category: yup.string().notRequired(),
    manufacturer: yup.string().notRequired(),
    lote: yup.string().notRequired(),
    validity: yup.string().notRequired(),
    apresentation: yup.string().required("Campo obrigatório."),
    containing: yup.string().required("Campo obrigatório."),
    unit: yup.string().required("Campo obrigatório."),
    location: yup.string().notRequired(),
    cd: yup.string().notRequired(),

    apresentationDispensation: yup.string().notRequired(),
    containingDispensation: yup.string().notRequired(),
    unitDispensation: yup.string().notRequired(),

    minDose: yup.string().notRequired(),
    maxDose: yup.string().notRequired(),
    unitPrescription: yup.string().notRequired(),
    activePrinciple: yup.string().notRequired(),

    minStorage: yup.number().notRequired(),
    minStorageUnit: yup.string().notRequired(),
    maxStorage: yup.number().notRequired(),
    maxStorageUnit: yup.string().notRequired(),
    validade: yup.number().notRequired(),

    priceTicket: yup.number().notRequired(),
    saleTicket: yup.number().notRequired(),
  })
  .required();
