// Yup
import * as yup from "yup";

//Interfaces
export interface FormInputsNewEmployeer {
    file: File | undefined;
    name: string;
    genre: string;
    date: Date;

    // Adress Info
    CEP: number;
    adress: string;
    numberHouse: number;
    complement: string;
    
    district: string,
    city: string,
    state: string,
    country: string,
    
    // Contact Info
    phone: string;
    phone2: string;
    tel: string;
    email: string;
  
    // Documents
    cpf: string;
    rg: string;
    dateAdmission: Date;
    status: string;
    role: string;
    obs: string;
    
    //Specific to Doctor's 
    tiss: string;
    company: string;
    insurance: string;
  }
  
  //Configuration Yup
export const schemaNewEmployeer = yup
    .object()
    .shape({
      file: yup.mixed().required("File is required"),
      name: yup.string().required("Campo obrigatório."),
      genre: yup.string().required("Campo obrigatório."),
      date: yup.string().required("Campo obrigatório."),

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
      email: yup.string().required("Campo obrigatório."),

      // Documents
      cpf: yup
      .number()
      .required("Campo obrigatório.")
      .min(11, "A quantidade mínima é de 11 caracteres.")
      .typeError('Esse campo não pode ser vazio'),
      rg: yup.number().notRequired(),
      dateAdmission: yup.string().notRequired(),
      status: yup.string().required("Campo obrigatório."),
      role: yup.string().required("Campo obrigatório."),
      obs: yup.string().notRequired(),
      
      //Specific to Doctor's  
      tiss: yup.string().required("Campo obrigatório."),
      company: yup.string().required("Campo obrigatório."),
      insurance: yup.string().notRequired(),
    })
    .required();
  