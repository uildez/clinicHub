// Yup
import * as yup from "yup";

export interface FormInputsNewDebit {
  procedurePayment: string;
  dateNewDebit: Date;
  insurance: string;
  price: string;
  select: string;
  professional: string;
  obs: string;
}

export const schemaNewDebit = yup
  .object()
  .shape({
    procedurePayment: yup.string().required("Campo obrigatório."),
    dateNewDebit: yup.string().required("Campo obrigatório."),
    insurance: yup.string().required("Campo obrigatório."),
    price: yup.string().required("Campo obrigatório."),
    select: yup.string().required("Campo obrigatório."),
    professional: yup.string().required("Campo obrigatório."),
    obs: yup.string().notRequired(),
  })
  .required();
