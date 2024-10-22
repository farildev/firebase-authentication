import logo from "@/assets/images/logo.svg";
import Divider from "@/components/Auth/Divider";
import background from "@/assets/images/bg.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth , googleProvider } from "@/config/firebase";

const Login = () => {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(!email || !password){
      return null
    }

    signInWithEmailAndPassword(auth,email,password)
      .catch((err) => {
        console.log(err)
      })
  }

  const handleGoogleLogin = () => {
    signInWithPopup(auth , googleProvider)
  }
   
  const changeVisibility = (e) => {
    e.preventDefault();
    setVisibilityPassword(!visibilityPassword);
  }
  return (
    <section className="bg-primary text-white h-screen py-8">
      <div className="flex justify-between h-full siteContainer">
        <div className="flex-1 flex flex-col md:px-10 px-4">
          <img className="w-[50px]" src={logo} alt="Logo" />
          <div className="flex flex-col mt-10">
            <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
            <span className="text-md mt-2 text-gray-500">We are happy to have you back</span>
          </div>
          <form className="w-full mt-6 flex flex-col gap-5" action="">
          <div className="flex flex-col gap-3">
              <label className="text-xs text-gray-500" htmlFor="#email">
                Email address
              </label>
              <div
                id="email"
                className="px-[15px] py-3 bg-input rounded-lg flex items-center border border-gray-500"
              >
                <input
                  className="w-full h-full bg-transparent outline-none border-none text-xs"
                  type='email'
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xs text-gray-500" htmlFor="#password">
                Password
              </label>
              <div
                id="password"
                className="px-[15px] py-3 bg-input rounded-lg flex items-center border border-gray-500"
              >
                <input
                  className="w-full h-full bg-transparent outline-none border-none text-xs"
                  type={visibilityPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="false"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={changeVisibility}>
                  {visibilityPassword ? <FaRegEye/> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-between mt-5">
            <div className="text-xs text-gray-300">Have not any account?<Link className="underline" to='/register'> Sign up</Link></div>
            <Link className="text-xs font-light text-gray-400 hover:underline" to='/forgot-password'>Forgot Password?</Link>
          </div>
          <button onClick={handleLogin} className="text-white bg-secondary p-4 text-sm font-base outline-none rounded-lg mt-8">Login Account</button>
          <Divider />
          <button onClick={handleGoogleLogin} className="text-white bg-black p-4 text-sm font-base outline-none rounded-lg mt-5 flex items-center justify-center gap-2"><FcGoogle size={18}/>Login with Google</button>
        </div>
        <div className="md:block hidden w-[55%] h-full rounded-2xl overflow-hidden px-10">
          <img className="w-full h-full object-cover object-center" src={background} alt="Backgroun image" />
        </div>
      </div>
    </section>
  )
}

export default Login