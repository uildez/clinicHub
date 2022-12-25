// Yup
import * as yup from "yup";

export interface FormInputsNewAnamnese {
  model: string;
  titleAnamnese: string;
  dateAnamnese: Date;
  obsAnamnese: string;

  titlePhysicalAssessment: string;
  datePhysicalAssessment: Date;
  obsPhysicalAssessment: string;

  titleBodyAssessment: string;
  dateBodyAssessment: Date;
  obsBodyAssessment: string;

  titleClinicalHistory: string;
  dateClinicalHistory: Date;
  obsClinicalHistory: string;
}

export const schemaNewAnamnese = yup
  .object()
  .shape({
    model: yup.string().required("Campo obrigatório."),
    titleAnamnese: yup.string().notRequired(),
    dateAnamnese: yup.string().notRequired(),
    obsAnamnese: yup.string().notRequired(),
    
    titlePhysicalAssessment: yup.string().notRequired(),
    datePhysicalAssessment: yup.string().notRequired(),
    obsPhysicalAssessment: yup.string().notRequired(),
    
    titleBodyAssessment: yup.string().notRequired(),
    dateBodyAssessment: yup.string().notRequired(),
    obsBodyAssessment: yup.string().notRequired(),
    
    titleClinicalHistory: yup.string().notRequired(),
    dateClinicalHistory: yup.string().notRequired(),
    obsClinicalHistory: yup.string().notRequired(),
  })
  .required();
