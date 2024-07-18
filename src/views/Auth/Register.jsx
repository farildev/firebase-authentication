import background from "@/assets/images/bg.jpg";
import logo from "@/assets/images/logo.svg";
import Divider from "@/components/Divider";
import Input from "@/components/Input";
const Register = () => {
  return (
    <section className="bg-primary text-white h-screen py-8">
      <div className="flex justify-between h-full">
        <div className="flex-1 flex flex-col px-10">
          <img className="w-[50px]" src={logo} alt="Logo" />
          <div className="flex flex-col mt-10">
            <h1 className="text-3xl font-semibold">Create an Account  👋</h1>
            <span className="text-md mt-2 text-gray-500">Kindly fill in your details to create an account</span>
          </div>
          <form className="w-full mt-6 flex flex-col gap-5" action="">
            <Input type="text" placeholder="Enter your name"  />
            <Input />
            <Input />
          </form>
          <button className="text-white bg-secondary p-4 text-sm font-base outline-none rounded-lg mt-8">Register Account</button>
          <Divider />
          <button className="text-white bg-black p-4 text-sm font-base outline-none rounded-lg mt-5">Register with Google</button>
        </div>
        <div className="md:block hidden w-[55%] h-full rounded-2xl overflow-hidden px-10">
          <img className="w-full h-full object-cover object-center" src={background} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Register