import { Link } from "react-router-dom";
import StarRating from "./StarRating";
const FilmCard = () => {
  return (
    <Link
      to={``}
      className="flex justify-between flex-col items-center relative group overflow-hidden h-full rounded-lg"
    >
      <div className="bg-black/75 text-white w-full h-full absolute top-0 left-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible flex items-center justify-center">
        <div className="absolute bottom-6 left-5">
          <h1 className="flex items-center gap-2 font-medium text-2xl">Interstellar</h1>
          <span className="text-xs gap-1 mt-2 flex items-center">Rating : <StarRating rating={5} /></span>
        </div>
      </div>
      <div className="w-full h-[250px]">
        <img
          className="w-full h-full object-cover object-top"
          src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          alt="Interstellar"
        />
      </div>
    </Link>
  );
};

export default FilmCard;
