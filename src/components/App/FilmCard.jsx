import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";


const FilmCard = ({
  filmDetail,
  deleteMovieFromCollection,
  updateMovieDetail,
}) => {
  return (
    <div className="relative group">
      <Link
        to={filmDetail.id}
        className="flex justify-between flex-col items-center relative group overflow-hidden h-full rounded-lg"
      >
        <div className="bg-black/75 text-white w-full h-full absolute top-0 left-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible flex items-center justify-center">
          <div className="absolute bottom-6 left-5">
            <h1 className="flex items-center gap-2 font-medium text-xl">
              {filmDetail.name}
            </h1>
            <span className="text-xs gap-1 mt-2 flex items-center">
              Rating : <StarRating rating={parseFloat(filmDetail.rating)} />
            </span>
          </div>
        </div>
        <div className="w-full h-[250px]">
          <img
            className="w-full h-full object-cover object-top"
            src={filmDetail.image}
            alt={filmDetail.name}
          />
        </div>
      </Link>
      <div className="absolute top-2 right-2 flex flex-col gap-2">
        <button
          onClick={() => updateMovieDetail(filmDetail.id)}
          className=" bg-blue-600 text-white rounded-full p-2 shadow-md hover:bg-blue-700 transition"
        >
          <AiOutlineEdit size={20} />
        </button>
        <button
          onClick={() => deleteMovieFromCollection(filmDetail.id)}
          className=" bg-red-600 text-white rounded-full p-2 shadow-md hover:bg-red-700 transition"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
