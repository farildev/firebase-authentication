import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
const Home = () => {
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <section className="flex items-center justify-between p-10">
      <h1>Home</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </section>
  )
}

export default Home