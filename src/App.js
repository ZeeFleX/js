import "./App.css";
import React, {useEffect, useState} from "react";
import Movies from "./api";

function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const moviesData = await Movies();
      setMovies(moviesData);
    })()
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Render List/Array of Items</h1>
      </div>
      <ul>
        {movies.map(movie => <li>{movie.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
