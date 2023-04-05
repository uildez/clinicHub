import { Outlet } from "react-router-dom";
export const Collaborator = () => {
  return (
    <div className="flex flex-col bg-[#e9e9e9] w-screen lg:justify-between">
      <Outlet />
    </div>
  );
};
