import { Routes, Route } from "react-router-dom";
import Login from "@/views/Auth/Login";
import Register from "@/views/Auth/Register";
import Home from "@/views/App/Home";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import AddMovie from "@/views/App/AddMovie";
import Movies from "@/views/App/Movies";
import ForgotPassword from "@/views/Auth/ForgotPassword";

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/add-movie" element={<AddMovie/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Route>
    </Routes>
  )
}

export default AllRoutes