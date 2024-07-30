import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "@/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [movieRelease, setMovieRelease] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieDesc, setMovieDesc] = useState('');
  const [movieBanner, setMovieBanner] = useState(null);
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

  const handleMovieBanner = (e) => {
    setMovieBanner(e.target.files[0])
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
        userId
      });
      navigate('/movies');
    } catch (err) {
      console.error(err);
    }    
  };

  return (
    <section className="p-10 h-screen">
      <div className="w-full">
        <h1 className="text-4xl font-medium">Add Movie</h1>
        <div className="mt-10 grid grid-cols-2 gap-2">
          <input
            onChange={handleMovieName}
            value={movieName}
            className="bg-neutral-700 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add movie name"
          />
          <input
            onChange={handleReleaseDate}
            value={movieRelease}
            className="bg-neutral-700 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add movie release date"
          />
          <input
            onChange={handleDirectorName}
            value={movieDirector}
            className="bg-neutral-700 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add director name"
          />
          <input
            onChange={handleFilmDesc}
            value={movieDesc}
            className="bg-neutral-700 p-3 rounded-lg text-white outline-none border-gray-300/20 border text-sm"
            type="text"
            placeholder="Add film description"
          />
          <input
            className="flex flex-col"
            onChange={handleMovieBanner}
            type="file"
          />
        </div>
        <button
          onClick={addMovieToCollection}
          className="bg-secondary mt-3 rounded-lg p-3 outline-none border-none"
        >
          Add Movie
        </button>
      </div>
    </section>
  );
};

export default AddMovie;
