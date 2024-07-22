import { sidebarRoutes } from "@/utils/constants"
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <aside className="w-[20%] h-full fixed top-0 left-0 border-r border-gray-300/10 px-5 py-8">
      <div className="h-full flex flex-col justify-between">
        <div>
        <h1 className="text-white font-semibold text-xl">
          Filmino
        </h1>
        <nav className="flex flex-col mt-10 gap-10">
          {
            sidebarRoutes.map((route, index) => (
              <NavLink className='flex items-center gap-1 text-md text-white font-base' key={index} to={route.path}>
                <span className="text-2xl">{route.icons[0].active}</span>
                <span>{route.label}</span>
              </NavLink>
            ))
          }
        </nav>
        </div>
        <button onClick={handleSignOut} className="bg-secondary rounded-md p-2 flex items-center gap-1 w-fit"><IoIosLogOut />Sign Out</button>
      </div>
    </aside>
  )
}

export default Sidebar