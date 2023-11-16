import React, {useEffect, useState} from "react";
import Movies from "../../api";

function Movie_card_data() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const moviesData = await Movies();
            setMovies(moviesData);
        })()
    }, []);

    return movies;
}

export default Movie_card_data;
