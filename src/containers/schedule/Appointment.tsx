import { ButtonBack } from "../../components/ButtonBack";
import { NewPacient } from "../collaborator/NewPacient";

export const Appointment = () => {
  return (
    <>
      <ButtonBack />
      <div className="flex flex-col bg-slate-200 text-blue-600 lg:h-screen h-auto rounded-xl p-8">
        <h1>Appoitment</h1>
      </div>
    </>
  );
};
