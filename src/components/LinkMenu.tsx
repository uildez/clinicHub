import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  routing: string;
  text: string;
  icon: string;
  active: boolean;
  setMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LinkMenu = ({
  routing,
  text,
  icon,
  active,
  setMenu,
}: LinkProps) => {
  return (
    <Link to={routing}>
      <button
        className={
          active
            ? "flex cursor-pointer hover:lg:scale-105 group hover:shadow-blue-800/50 hover:text-blue-800 transition ease-in-out"
            : "flex cursor-auto lg:text-blue-500 text-white transition ease-in-out opacity-50"
        }
        onClick={() => setMenu}
        type="button"
      >
        <i className={`text-xl ${icon} text-blue-600`}></i>
        <div className="flex justify-start lg:ml-0 ml-2 top-[0rem] lg:absolute overflow-hidden lg:max-w-[0px] group-hover:lg:max-w-[250px] group-hover:lg:min-w-[230px] rounded-lg lg:left-16">
          <span className="lg:bg-blue-600 lg:text-white lg:px-4 lg:scale-105 rounded-lg">
            {text}
          </span>
        </div>
      </button>
    </Link>
  );
};
