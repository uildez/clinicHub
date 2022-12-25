import { Outlet } from "react-router-dom";
export const Collaborator = () => {
  return (
    <div className="flex flex-col bg-[#ddd6fe] w-screen lg:justify-between">
      <Outlet />
    </div>
  );
};
