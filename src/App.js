import React, {useState, useEffect} from "react";
import Axios from "axios";
import PhotoContainer from "./PhotoContainer";
import './App.css'

const App= () => {
  const [Loading, setLoading] = useState (false);
  const [Query, setQuery] = useState ('');
  const [photos, setPhotos] = useState ([]);
  const [photographer, setPhotographer] = useState('')
  


  const getRequest = () => { 
    setLoading(true)
    
    Axios.get("https://api.pexels.com/v1/search?query=" + Query, {
      headers: {
        'Authorization': '563492ad6f91700001000001ee93c67384544944b777ca357e5336ed'
      }
    }
    ).then((response) => {
     setPhotos (response.data.photos);
    setPhotographer (response.data.photos.photographer)
    setLoading (false)
     console.log (response.data.photos)
    })
    .catch(err => {
      throw Error(err.message);
    })}


  useEffect (() => {
    if (Query !== '') {
      getRequest();
    }
  }, [Query])

 
  return (
    <div className="container py-5">
      <h1>
        Pexels Photo App
      </h1>
      <form className="mb-5">
      <input
        type="text"
        placeholder="Search Photos..." 
        value={Query}
        onChange={(e) => { 
          console.log(e.target.value)
          setQuery(e.target.value);
         
        }}
      
      />
      </form>
      {Query=== '' ? (
          <h3>
          No Photo!
        </h3>  
      ) : (
        <section>
        {Loading ? (
          <h3>Loading...</h3>
        ) : (<PhotoContainer photos={photos} photographer={photographer} />)}
      </section>

      ) }
    
    </div>

    
  );}
  

export default App;
