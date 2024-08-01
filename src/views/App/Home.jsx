import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="flex items-center justify-between p-10 w-full h-screen">
      <div className="h-full flex flex-col items-center justify-center w-full gap-5">
        <h1 className="text-6xl font-semibold">Welcome to Filminoo! 👋</h1>
        <p className="w-3/4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, consequatur consequuntur. Quidem totam laudantium atque fugiat at nemo! Quae debitis modi ipsum, tenetur eos rem?</p>
        <Link to="/movies" className="bg-secondary text-white  p-3 rounded-md">See all movies</Link>
      </div>
    </section>
  );
};

export default Home;
