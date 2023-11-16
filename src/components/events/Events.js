import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard/EventCard';
import './Events.css';

const Events = ({ selectedGenres, selectedPremiere, searchQuery }) => {
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

  const filterMovies = () => {
    let filteredMovies = movies;

    if (selectedGenres) {
      // Используем some для проверки хотя бы одного совпадения
      filteredMovies = filteredMovies.filter(movie => 
        movie.genres.some(({ genre }) => genre.Name.toLowerCase() === selectedGenres.toLowerCase())
      );
    }

    if (selectedPremiere !== '') {
      filteredMovies = filteredMovies.filter(movie => movie.premiere === (selectedPremiere === 'true'));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(query));
    }

    return filteredMovies;
  };

  const filteredMovies = filterMovies();

  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredMovies.map(movie => <EventCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default Events;