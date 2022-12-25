// Yup
import * as yup from "yup";

//Interfaces
export interface FormInputsNewProcedure {
  name: string;
  type: string;
  price: string;
  duration: string;

  maxPacient: string;
  return: number;
  equipament: string;
  group: string;
  sigla: string;
  tussCode: string;
  tecnicalName: string;

  limitInsurances: string,
  limitLocals: string,
  limitEquipaments: string,
 
  obs: string,
  reminder: string,
  textProcedure: string,
  
  serie: string,
  breakSerie: number,
  refund: number,

  bondEquip: string,
  procedureComplement: string,
}

//Configuration Yup
export const schemaNewProcedure = yup
  .object()
  .shape({
    name: yup.string().required("Campo obrigatório."),
    type: yup.string().notRequired(),
    price: yup.string().notRequired(),
    duration: yup.string().notRequired(),

    maxPacient: yup.string().notRequired(),
    return: yup.number(),
    equipament: yup.string().notRequired(),
    group: yup.string().notRequired(),
    sigla: yup.string().notRequired(),
    tussCode: yup.string().notRequired(),
    tecnicalName: yup.string().notRequired(),

    limitInsurances: yup.string().notRequired(),
    limitLocals: yup.string().notRequired(),
    limitEquipaments: yup.string().notRequired(),
    
    obs: yup.string().notRequired(),
    reminder: yup.string().notRequired(),
    textProcedure: yup.string().notRequired(),
    
    serie: yup.string().notRequired(),
    breakSerie: yup.number().notRequired(),
    refund: yup.number().notRequired(),

    bondEquip: yup.string().notRequired(),
    procedureComplement: yup.string().notRequired(),
  })
  .required();
