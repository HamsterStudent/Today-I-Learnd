import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);  
    };
    // // 하단에 쓰인 코드를 async-await 방식으로 변경한 코드가 상단.
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // )
    // .then((response) => response.json())
    // .then((json) =>{
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // });
  useEffect(()=> {
    getMovies();
  }, []);
  console.log(movies)
  return <div>
    {loading ? <h1>Loading...</h1> : null}
  </div>;
}

export default App;