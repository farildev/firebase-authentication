import { Outlet, Navigate, useLocation } from "react-router-dom";
import { auth } from "@/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Sidebar from "@/components/App/Sidebar";
import LoadingScreen from "@/components/App/LoadingScreen";

const AppLayout = () => {
  const [user, isLoading] = useAuthState(auth);
  const location = useLocation();
  const hideSidebar = /^\/movies\/[^/]+$/.test(location.pathname);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex justify-between gap-3 relative">
      {!hideSidebar && <Sidebar />}
      <main className={`h-screen ${hideSidebar ? 'w-full' : 'w-[80%]'} absolute top-0 right-0`}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
