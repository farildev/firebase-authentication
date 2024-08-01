import { sidebarRoutes } from "@/utils/constants";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { IoIosLogOut } from "react-icons/io";
import classNames from "classnames";

const Sidebar = () => {
  const handleSignOut = () => {
    try{
      signOut(auth);
    }catch(err){
      console.error(err)
    }
  };
  return (
    <aside className="w-[20%] h-full fixed top-0 left-0 border-r border-gray-300/10 lg:px-5 px-3 py-8">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="max-w-[70px]">
            <img className="w-full h-full" src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small/abstract-circle-logo-icon-free-png.png" alt="" />
          </div>
          <nav className="flex flex-col mt-10 gap-5">
            {sidebarRoutes.map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                className={({isActive}) => classNames(
                  "flex items-center md:justify-start justify-center p-2 gap-3 rounded-lg text-sm transition-all duration-300",
                  {
                    'bg-secondary text-white' : isActive,
                    'bg-transparent text-white hover:bg-secondary/50' : !isActive
                  }
                )}
              >
                <span className="text-2xl">{route.icons[1].passive}</span>
                <span className="md:block hidden">{route.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-secondary rounded-md p-2 flex items-center md:justify-start justify-center gap-1 md:w-fit w-full"
        >
          <IoIosLogOut size={20}/>
          <span className="text-sm md:block hidden">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
