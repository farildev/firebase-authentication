import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import LoadingScreen from "@/components/App/LoadingScreen";
import StarRating from "@/components/App/StarRating";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      const movieRef = doc(db, "movies", id);
      const docSnapshot = await getDoc(movieRef);

      if (docSnapshot.exists()) {
        setMovie(docSnapshot.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <LoadingScreen />;
  }
  return (
    <div className={`h-full w-full`}>
      <div className="relative h-full">
        <div className="h-full w-full object-cover">
          {movie.image && (
            <img
              className="w-full h-full object-cover object-center"
              src={movie.image}
              alt="Movie Banner"
            />
          )}
        </div>
        <Link className="bg-secondary p-3 rounded-full absolute top-10 left-10 z-20" to='/movies'><IoIosArrowRoundBack size={32}/></Link>
        <div className="w-full h-full bg-black/70 absolute top-0 left-0"></div>
        <div className="flex flex-col absolute bottom-0 left-0 p-10">
          <h1 className="text-6xl font-medium">{movie.name}</h1>
          <div className="mt-10">
            <p className="text-lg font-medium">Release Date: {movie.releaseDate}</p>
            <p className="text-lg font-medium">Director: {movie.director}</p>
            <p className="text-lg font-medium">Description: {movie.desc}</p>
            <p className="text-lg font-medium flex items-center gap-1">Rating: <StarRating rating={movie.rating} /></p>
            <p className="text-lg font-medium">Genre: {movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
