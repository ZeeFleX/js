import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ movie, addToFavorites, removeFromFavorites, isFavorite }) => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const handleToggleFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
    setAddedToFavorites(!addedToFavorites);
  };

  return (
    <div key={movie.id} className="movie-card">
      <img src={movie.imageMedium} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Возрастной рейтинг: {movie.ageLimit}</p>
      <p>Язык: {movie.languages.map(({ language }) => language.Acronym).join(', ')}</p>
      <p>Жанры: {movie.genres.map(({ genre }) => genre.Name).join(', ')}</p>
      <p>Продолжительность: {movie.duration / 60} мин</p>
      <p>Премьера: {movie.premiere ? 'Да' : 'Нет'}</p>
      {addedToFavorites ? (
        <p>Фильм был добавлен в избранное</p>
      ) : (
        <button onClick={handleToggleFavorites}>
          {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
      )}
    </div>
  );
};

export default EventCard;
