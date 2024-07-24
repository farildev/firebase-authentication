import logo from "@/assets/images/logo.svg";
import background from "@/assets/images/bg.jpg";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config/firebase";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset email sended to your mail address");
        setEmail("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="bg-primary text-white h-screen py-8">
      <div className="flex justify-between h-full siteContainer">
        <div className="flex-1 flex flex-col px-10">
          <img className="w-[50px]" src={logo} alt="Logo" />
          <div className="flex flex-col mt-10">
            <div className="flex items-center gap-2">
              <Link className="bg-secondary rounded-full" to="/login">
                <IoIosArrowRoundBack size={28}/>
              </Link>
              <h1 className="text-3xl font-semibold">Forgot Password 👋</h1>
            </div>
            <span className="text-md mt-2 text-gray-500">
              I forgot my password
            </span>
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
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </form>
          <button
            onClick={resetPassword}
            className="text-white bg-secondary p-4 text-sm font-base outline-none rounded-lg mt-8"
          >
            Reset Password
          </button>
        </div>
        <div className="md:block hidden w-[55%] h-full rounded-2xl overflow-hidden px-10">
          <img
            className="w-full h-full object-cover object-center"
            src={background}
            alt="Backgroun image"
          />
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
