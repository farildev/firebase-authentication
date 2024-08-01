import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="flex items-center justify-between md:px-10 px-4 py-10 w-full h-screen">
      <div className="h-full flex flex-col items-center justify-center w-full gap-5">
        <h1 className="sm:text-6xl text-4xl font-semibold text-center">Welcome to Filminoo! 👋</h1>
        <p className="sm:w-3/4 w-full text-center sm:text-sm text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, consequatur consequuntur. Quidem totam laudantium atque fugiat at nemo! Quae debitis modi ipsum, tenetur eos rem?</p>
        <Link to="/movies" className="bg-secondary text-white text-sm p-3 rounded-md">See all movies</Link>
      </div>
    </section>
  );
};

export default Home;
