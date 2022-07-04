import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // 하단의 코드를 더 짧게 만든 버전
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);  
    };

    // // 하단에 쓰인 코드를 async-await 방식으로 변경한 코드
    // const getMovies = async() => {
    //   const response = await fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    //   );
    //   const json = await response.json();
    //   setMovies(json.data.movies);
    //   setLoading(false);  
    //   };

    
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
    {loading ? <h1>Loading...</h1> : <div>{movies.map( movie => 
      <div key={movie.id}>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map(g => <li key={g}>{g}</li>)}
          </ul>
      </div>
      )}
      </div>
      }
  </div>;
}

export default App;