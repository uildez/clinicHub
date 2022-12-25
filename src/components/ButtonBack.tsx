import { useNavigate } from "react-router-dom";

export function ButtonBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="w-fit mt-4 flex items-center cursor-pointer hover:scale-105 text-sm text-white hover:shadow-blue-800/50 hover:bg-blue-800 hover:text-white bg-blue-600 px-4 py-2 rounded-lg transition ease-in-out mb-4"
    >
      <i className="text-sm fa-solid fa-circle-chevron-left mr-4"></i>Voltar
    </button>
  );
}
