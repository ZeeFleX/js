import {useEffect, useState, useContext} from "react";
import Movies from "../../api";
import {UserInput} from "../filterInput/filterInputComponent";


function MovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const moviesData = await Movies();
      setMovies(moviesData);
    })()
  }, []);

  function truncate(str) {
    return str.length > 200 ? str.substring(0, 200) + "..." : str;
  }

  const filteredMovies = []
  const userInput = useContext(UserInput);

  movies.map(movie => {
    if (movie.title.indexOf(userInput) >= 0) {
      filteredMovies.push(movie);
    }

  });

  return (
    <div className='row'>
    {filteredMovies.map(movie =>
        <div className="card m-2" style={{width: '18rem'}}>
          <img src={movie.imageMedium} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{truncate(movie.description)}</p>
            <a href={movie.trailer} className="btn btn-primary" target='_blank' rel="noreferrer">Трейлер</a>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default MovieCard;
