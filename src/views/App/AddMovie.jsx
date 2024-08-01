import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "@/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";
import SelectBox from "@/components/ui/SelectBox";
import ImageSelect from "@/components/ui/ImageSelect";

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [movieRelease, setMovieRelease] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieDesc, setMovieDesc] = useState('');
  const [movieBanner, setMovieBanner] = useState(null);
  const [movieRating, setMovieRating] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const moviesCollectionRef = collection(db, 'movies');
  const navigate = useNavigate();

  const userId = auth?.currentUser?.uid;

  const handleMovieName = (e) => {
    setMovieName(e.target.value);
  };
  const handleReleaseDate = (e) => {
    setMovieRelease(e.target.value);
  };
  const handleDirectorName = (e) => {
    setMovieDirector(e.target.value);
  };
  const handleFilmDesc = (e) => {
    setMovieDesc(e.target.value);
  };

  const handleFilmRating = (e) => {
    setMovieRating(parseFloat(e.target.value));
  };

  const handleMovieBanner = (e) => {
    setMovieBanner(e.target.files[0])
  }

  const handleMovieGenre = (selectedGenre) => {
    setMovieGenre(selectedGenre)
    console.log(movieGenre)
  }

  const addMovieToCollection = async () => {
    let imageUrl = '';
    if (movieBanner) {
      const filesFolderRef = ref(storage, `movieBanners/${movieBanner.name}`);
      await uploadBytes(filesFolderRef, movieBanner);
      imageUrl = await getDownloadURL(filesFolderRef);
    }

    try {
      await addDoc(moviesCollectionRef, {
        name: movieName,
        releaseDate: movieRelease,
        director: movieDirector,
        filmDescription: movieDesc,
        image: imageUrl,
        genre : movieGenre,
        rating : parseFloat(movieRating),
        userId
      });
      navigate('/movies');
    } catch (err) {
      console.error(err);
    }    
  };

  return (
    <section className="py-10 md:px-10 px-4 h-screen">
      <div className="w-full pb-10">
        <h1 className="md:text-4xl text-2xl font-medium">Add Movie</h1>
        <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-4">
          <input
            onChange={handleMovieName}
            value={movieName}
            className="bg-white/5 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add movie name"
          />
          <input
            onChange={handleReleaseDate}
            value={movieRelease}
            className="bg-white/5 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add movie release date"
          />
          <input
            onChange={handleDirectorName}
            value={movieDirector}
            className="bg-white/5 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add director name"
          />
          <input
            onChange={handleFilmDesc}
            value={movieDesc}
            className="bg-white/5 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add film description"
          />
          <input
            onChange={handleFilmRating}
            value={movieRating}
            className="bg-white/5 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="number"
            max={5}
            placeholder="Add film rating"
          />
          <SelectBox handleMovieGenre={handleMovieGenre} />
        </div>
        <div className="mt-3">
          <ImageSelect handleMovieBanner={handleMovieBanner} />
        </div>
        <button
          onClick={addMovieToCollection}
          className="bg-secondary mt-3 flex items-center gap-1 text-sm rounded-lg p-3 outline-none border-none"
        >
          <MdOutlineAdd size={20}/>
          Add Movie
        </button>
      </div>
    </section>
  );
};

export default AddMovie;
