import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useState } from "react";
import { useEffect } from "react";
const Movies = () => {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const moviesCollectionRef = collection(db, 'movies');

  useEffect(() => {
    const fetchData = async() => {
      try{
        const querySnapshot = await getDocs(moviesCollectionRef);
        const dataList = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setData(dataList);
        setLoading(false);
      }
      catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  },[moviesCollectionRef])

  if(loading){
    <div className="w-full h-full bg-black text-white">Loading...</div>
  }
  return (
    <section className="p-10">
      <div className="w-full">
        <h1 className="text-4xl font-medium">Movies</h1>
        <div className="mt-10 grid grid-cols-3">
          {
            data.map((item, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <div>
                  <img src={item?.image} alt="" />
                </div>
                <span>{item.director}</span>
                <span>{item.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Movies