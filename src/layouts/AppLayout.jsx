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
    <main>
      <Outlet />
    </main>
  )
}

export default AppLayout