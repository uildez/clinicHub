import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export function SignIn() {
  const [register, setRegister] = useState(false)
  return (
    <div className="w-full">
      {register === false ? <Login /> : <Register/>}
      <span className="flex w-full justify-center pt-4 mx-auto text-gray-600">
        {register == false ? "Não possui conta?" : "Já tem conta?"}
        <button
          onClick={() => setRegister(!register)}
          className="cursor-pointer font-bold hover:underline transition-all ml-2"
        >
          {register == false ? "Fazer cadastro" : "Acesse aqui"}
        </button>
      </span>
    </div>
  );
}
