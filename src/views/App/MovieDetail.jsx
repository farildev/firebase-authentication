import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import LoadingScreen from "@/components/App/LoadingScreen";
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
    <div className="p-10 h-screen">
      <div className="grid grid-cols-2 gap-5">
        <div className="h-full">
          {movie.image && (
            <img
              className="w-full h-full object-cover object-center"
              src={movie.image}
              alt="Movie Banner"
            />
          )}
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-medium">{movie.name}</h1>
          <div className="mt-10">
            <p className="text-lg font-medium">Release Date: {movie.releaseDate}</p>
            <p className="text-lg font-medium">Director: {movie.director}</p>
            <p className="text-lg font-medium">Description: {movie.desc}</p>
            <p className="text-lg font-medium">Rating: {movie.rating}</p>
            <p className="text-lg font-medium">Genre: {movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
