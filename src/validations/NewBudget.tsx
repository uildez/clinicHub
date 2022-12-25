// Yup
import * as yup from "yup";

export interface FormInputsNewBudget {
  descriptionBudget: string;
  dateNewBudget: Date;
  insurance: string;
  procedure: string;
  price: string;
  professional: string;
  select: string;
  obs: string;
}

export const schemaNewBudget = yup
  .object()
  .shape({
    descriptionBudget: yup.string().required("Campo obrigatório."),
    dateNewBudget: yup.string().required("Campo obrigatório."),
    insurance: yup.string().required("Campo obrigatório."),
    procedure: yup.string().required("Campo obrigatório."),
    price: yup.string().required("Campo obrigatório."),
    professional: yup.string().required("Campo obrigatório."),
    select: yup.string().required("Campo obrigatório."),
    obs: yup.string().notRequired(),
  })
  .required();
