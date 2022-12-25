// Yup
import * as yup from "yup";

export interface FormInputsNewAppoitment {
  insurances: string;
  frequency: string;
  status: string;
  guide: string;
  professional: string;
  procedure: object;
  procedureStart: string;
  procedureEnd: string;
}

export const schemaAppoitment = yup
  .object()
  .shape({
    insurances: yup.string().required("Campo obrigatório."),
    frequency: yup.string().required("Campo obrigatório."),
    status: yup.string().required("Campo obrigatório."),
    procedureStart: yup.string().required("Campo obrigatório."),
    procedureEnd: yup.string().required("Campo obrigatório."),
    professional: yup.string().required("Campo obrigatório."),
    guide: yup.string().required("Campo obrigatório."),
    procedure: yup
      .array()
      .of(yup.string())
      .required("Campo obrigatório.")
      .nullable(),
  })
  .required();
