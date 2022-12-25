import { ButtonBack } from "../../components/ButtonBack";
import { Login } from "./Login";
import img from "../../assets/images/img-login.png";

export function SignIn() {
  return (
    <>
      <ButtonBack />
      <div className="flex lg:flex-row flex-col h-4/5 rounded-xl overflow-hidden">
        <div className="flex flex-col h-full lg:w-3/5 w-full bg-slate-200 text-blue-600 rounded-xl lg:px-8 lg:py-8 py-8 px-6">
          <i className="fa-solid fa-bolt text-3xl font-bold mb-4"></i>
          <h2 className="text-3xl font-bold">Login</h2>
          <div className="flex flex-col justify-between w-full">
            <Login />
          </div>
        </div>
        <div className="lg:block hidden lg:w-3/5 w-full overflow-hidden">
          <img
            className="absolute h-[550px] overflow-hidden bottom-0 right-40"
            src={img}
            alt="Doutor com Paciente"
          />
        </div>
      </div>
    </>
  );
}
