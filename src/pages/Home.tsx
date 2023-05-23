import { useState } from "react";
import { SignIn } from "../containers/client/SignIn";
import { Login } from "../containers/collaborator/Login";

//Assets
import img from "../_assets/images/doctor-pointing-out.png";
import Logo from "../_assets/images/logo/logo-blue.png";

export const Home = () => {
  const [userLogin, setUserLogin] = useState<string>("user")
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center w-screen h-screen overflow-hidden bg-white from-blue-400 to-blue-500">
      <div className="flex flex-col items-center justify-center lg:px-40 px-10 lg:py-16 py-40 lg:w-3/5 w-full bg-white h-full">
        <img src={Logo} className="lg:w-3/6 w-2/4 mb-12" alt="Logotipo da Clinfec" />
        <h1 className="text-xl font-bold md:text-4xl md:leading-tight lg:text-xl lg:leading-tight lg:text-left text-center text-blue-500 mb-8">
          Olá {userLogin === "user" ? "Colaborador" : "Cliente"}, acesse sua conta abaixo
        </h1>

        <div className="flex lg:flex-row flex-col w-full gap-4">
          <button
            onClick={() => setUserLogin("user")}
            className={`flex w-full justify-center font-bold ${userLogin === "user" ? "text-white bg-blue-600 cursor-default hover:bg-blue-600" : "border-2 border-gray-500 text-gray-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white"} py-4 rounded-lg cursor-pointer transition ease-in-out `}
          >
            Sou Colaborador
          </button>
          <button
            onClick={() => setUserLogin("client")}
            className={`flex w-full justify-center font-bold ${userLogin === "client" ? "text-white bg-blue-600 cursor-default hover:bg-blue-600" : "border-2 border-gray-500 text-gray-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white"} py-4 rounded-lg cursor-pointer transition ease-in-out `}
          >
            Sou Cliente
          </button>
        </div>

        {userLogin === "user" ? <Login /> : <SignIn /> }
      </div>

      <div className="flex justify-center lg:w-2/5 w-full h-full text-white rounded-xl overflow-hidden">
        <div className="w-full relative lg:block hidden">
          <img
            src={img}
            className="h-full absolute bottom-0 right-0 object-cover rounded-l-3xl"
            alt="Médica apontando para a esquerda"
          />
        </div>
      </div>
    </div>
  );
};
