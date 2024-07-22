import { Routes, Route } from "react-router-dom";
import Login from "@/views/Auth/Login";
import Register from "@/views/Auth/Register";
import Home from "@/views/App/Home";
import AddFilm from "@/views/App/AddFilm";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/add-film" element={<AddFilm/>}/>
      </Route>
    </Routes>
  )
}

export default AllRoutes