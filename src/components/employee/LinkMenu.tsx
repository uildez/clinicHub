import { Link } from "react-router-dom";
import { useAppSelector } from "../../features/hooks/hooks";

interface LinkProps {
  toggleMenu: any;
  routing: string;
  icon: string;
  title: string;
  location: any;
  userTypeAllowed: string[]
}

export const LinkMenu = ({
  toggleMenu,
  routing,
  icon,
  title,
  location,
  userTypeAllowed
}: LinkProps) => {

  const user = useAppSelector((state) => state.rootReducer.auth.user)
  const hasPermission = userTypeAllowed?.length === 0 || userTypeAllowed?.includes(user!.type)

  if (!hasPermission) {
    return null
  }

  return (
    <>
      {hasPermission &&
        <Link
          to={routing}
          className={`flex items-center relative group
          ${toggleMenu ? "justify-left" : "justify-center"} gap-2 w-full 
          ${toggleMenu ? "w-full pl-8" : "max-w-[45px] pl-10"} 
          ${location.includes(routing)
              ? "text-blue-600 font-semibold"
              : "text-gray-600 hover:text-blue-600"
            } 
          min-h-[35px] transition-all cursor-pointer`}
        >
          <i className={`${icon} ${toggleMenu && "min-w-[35px]"} text-blue-600`}></i>
          {location.includes(routing) && (
            <span className="w-[5px] bg-blue-600 absolute h-[35px] left-0 rounded-r-2xl transition-all duration-200"></span>
          )}
          <span className="w-[5px] bg-blue-600 absolute h-[35px] -left-10 group-hover:left-0 rounded-r-2xl transition-all duration-200"></span>
          <span
            className={`${toggleMenu
              ? "block opacity-100 transition-all duration-500"
              : "hidden opacity-0 transition-all duration-500"
              }`}
          >
            {title}
          </span>
        </Link>
      }
    </>
  );
};