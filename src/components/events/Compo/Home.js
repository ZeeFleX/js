import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../EventCard/EventCard';
import GenresFilter from '../Filters/GenresFilter';
import PremiereFilter from '../Filters/PremiereFilter';
import SearchFilter from '../Filters/SearchFilter';
import '../Filters/Filters.css';

const Home = ({ isDarkMode, addToFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPremiere, setSelectedPremiere] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]); // Используем состояние для отфильтрованных фильмов

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

  useEffect(() => {
    // Функция для фильтрации фильмов
    const filterMovies = () => {
      let tempMovies = [...movies];

      if (selectedGenre !== '') {
        tempMovies = tempMovies.filter(movie => movie.genre === selectedGenre);
      }

      if (selectedPremiere !== '') {
        tempMovies = tempMovies.filter(movie => movie.premiere.toString() === selectedPremiere);
      }

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        tempMovies = tempMovies.filter(movie => movie.title.toLowerCase().includes(query));
      }

      return tempMovies;
    };

    // Обновляем состояние отфильтрованных фильмов
    setFilteredMovies(filterMovies());
  }, [movies, selectedGenre, selectedPremiere, searchQuery]); // Эффект будет вызываться при изменении этих параметров

  return (
    <div className={`container home ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Домашняя страница</h2>
      <div className="filters-container">
        <GenresFilter setGenre={setSelectedGenre} />
        <PremiereFilter setPremiere={setSelectedPremiere} />
        <SearchFilter setSearchQuery={setSearchQuery} />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {filteredMovies.map(movie => (
            <EventCard key={movie.id} movie={movie} addToFavorites={addToFavorites} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;