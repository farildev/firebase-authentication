import { collection, deleteDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/App/LoadingScreen";
import { IoIosSearch } from "react-icons/io";
import FilmCard from "@/components/App/FilmCard";

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData , setFilteredData] = useState([]);
  const moviesCollectionRef = collection(db, 'movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(moviesCollectionRef);
        const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(dataList);
        setFilteredData(dataList);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [moviesCollectionRef]);


  useEffect(() => {
    const filtered = data.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered)
  },[searchTerm, data])

  const deleteMovieFromCollection = async (postId) => {
    try {
      const movieDoc = doc(moviesCollectionRef, postId);
      await deleteDoc(movieDoc);
    } catch (err) {
      console.log(err);
    }
  }

  const updateMovieDetail = async(postId) => {
    try{
      const movieDoc = doc(moviesCollectionRef, postId);
      await updateDoc(movieDoc)
    }catch(err){
      console.error(err)
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <section className="py-10 md:px-10 px-4 h-screen">
      <div className="w-full h-full relative">
        <h1 className="md:text-4xl text-2xl font-medium">Movies</h1>
        <div className="flex items-center gap-2 bg-neutral-700 md:p-3 p-2 rounded-lg text-white outline-none border-gray-300/20 border w-full mt-5">
          <IoIosSearch size={20} />
          <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="w-full h-full bg-transparent outline-none md:text-sm text-xs" placeholder="Search movie, series & etc." />
        </div>
        <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 w-full">
        {
            filteredData.map((item, index) => (
              <FilmCard
                updateMovieDetail={updateMovieDetail}
                deleteMovieFromCollection={deleteMovieFromCollection}
                filmDetail={item}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Movies;
