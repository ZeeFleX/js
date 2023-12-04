import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard/EventCard';
import './Events.css';

const Events = ({ selectedGenres, selectedPremiere, searchQuery, isDarkMode }) => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovieIds, setFavoriteMovieIds] = useState(
    new Set(JSON.parse(localStorage.getItem('favoriteMovieIds')) || [])
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

  const addToFavorites = (movieId) => {
    const newFavoriteMovieIds = new Set([...favoriteMovieIds, movieId]);
    setFavoriteMovieIds(newFavoriteMovieIds);
    localStorage.setItem('favoriteMovieIds', JSON.stringify(Array.from(newFavoriteMovieIds)));
  };

  const removeFromFavorites = (movieId) => {
    const newFavoriteMovieIds = new Set(favoriteMovieIds);
    newFavoriteMovieIds.delete(movieId);
    setFavoriteMovieIds(newFavoriteMovieIds);
    localStorage.setItem('favoriteMovieIds', JSON.stringify(Array.from(newFavoriteMovieIds)));
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
          addToFavorites={() => addToFavorites(movie.id)}
          removeFromFavorites={() => removeFromFavorites(movie.id)}
          isFavorite={favoriteMovieIds.has(movie.id)}
        />
      ))}
    </div>
  );
};

export default Events;