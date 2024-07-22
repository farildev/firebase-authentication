import { Outlet, Navigate } from "react-router-dom";
import { auth } from "@/config/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import Sidebar from "@/components/App/Sidebar";
const AppLayout = () => {
  const [user, isLoading] = useAuthState(auth);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(!user){
    return <Navigate to="/login" replace />
  }
  return (
    <div className="flex justify-between gap-3 relative">
      <Sidebar />
      <main className="h-screen w-[80%] absolute top-0 right-0">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout