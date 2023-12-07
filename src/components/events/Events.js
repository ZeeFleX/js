import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard/EventCard';
import './Events.css';

const Events = ({ selectedGenres, selectedPremiere, searchQuery, isDarkMode }) => {
  const [movies, setMovies] = useState([]);
  const [basketMovieIds, setBasketMovieIds] = useState(
    new Set(JSON.parse(localStorage.getItem('basketMovieIds')) || [])
  );

  useEffect(() => {
    axios.get('https://api.dev.mooon.by/events')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  const addToBaskets = (movieId) => {
    const newBasketMovieIds = new Set([...basketMovieIds, movieId]);
    setBasketMovieIds(newBasketMovieIds);
    localStorage.setItem('basketMovieIds', JSON.stringify(Array.from(newBasketMovieIds)));
  };

  const removeFromBaskets = (movieId) => {
    const newBasketMovieIds = new Set(basketMovieIds);
    newBasketMovieIds.delete(movieId);
    setBasketMovieIds(newBasketMovieIds);
    localStorage.setItem('basketMovieIds', JSON.stringify(Array.from(newBasketMovieIds)));
  };

  const filterMovies = () => {
    // Применение фильтров по жанрам, премьере и поисковому запросу
    let filteredMovies = [...movies];
  
    // Фильтрация по жанрам
    if (selectedGenres.length > 0) {
      filteredMovies = filteredMovies.filter(movie => selectedGenres.includes(movie.genre));
    }
  
    // Фильтрация по премьере
    if (selectedPremiere !== '') {
      filteredMovies = filteredMovies.filter(movie => movie.premiere.toString() === selectedPremiere);
    }
  
    // Фильтрация по поисковому запросу
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(query));
    }
  
    return filteredMovies;
  };

  const filteredMovies = filterMovies();

  return (
    <div className={`movie-list ${isDarkMode ? 'dark' : 'light'}`}>
      {filteredMovies.map(movie => (
        <EventCard
          key={movie.id}
          movie={movie}
          addToBaskets={() => addToBaskets(movie.id)}
          removeFromBaskets={() => removeFromBaskets(movie.id)}
          isBasket={basketMovieIds.has(movie.id)}
        />
      ))}
    </div>
  );
};

export default Events;