import { Outlet } from "react-router-dom";

export function Acess() {
  return (
    <div className="flex flex-col bg-[#e9e9e9] w-screen lg:justify-between">
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-blue-300 to-blue-500">
        <div className="flex flex-col h-auto lg:w-2/5 w-5/6 bg-slate-200 text-blue-600 rounded-xl lg:px-8 lg:py-8 py-8 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
