import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard/EventCard';
import "./Events.css"

const Events = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.dev.mooon.by/events')
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies.map(movie => <EventCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default Events;