import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useState } from "react";
import { useEffect } from "react";
const Movies = () => {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      try{
        const querySnapshot = await getDocs(collection(db, 'movies'));
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
  },[])

  if(loading){
    <div className="w-full h-full bg-black text-white">Loading...</div>
  }
  return (
    <section className="p-10">
      <div className="siteContainer">
        <h1>Movies</h1>
        <div>
          {
            data.map((item, index) => (
              <div key={index}>
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