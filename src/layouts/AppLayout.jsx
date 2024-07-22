import { Outlet, Navigate } from "react-router-dom";
import { auth } from "@/config/firebase";
import {useAuthState} from "react-firebase-hooks/auth"
const AppLayout = () => {
  const [user, isLoading] = useAuthState(auth);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(!user){
    return <Navigate to="/login" replace />
  }
  return (
    <div>
      
      <main className="bg-primary h-screen text-white">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout