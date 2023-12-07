import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ movie, addToBaskets, removeFromBaskets, isBasket }) => {
  const [addedToBaskets, setAddedToBaskets] = useState(false);

  const handleToggleBaskets = () => {
    if (isBasket) {
      removeFromBaskets(movie.id);
    } else {
      addToBaskets(movie);
    }
    setAddedToBaskets(!addedToBaskets);
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
      {addedToBaskets ? (
        <p>Фильм был добавлен в корзину</p>
      ) : (
        <button onClick={handleToggleBaskets}>
          {isBasket ? 'Удалить из корзины' : 'Добавить в корзину'}
        </button>
      )}
    </div>
  );
};

export default EventCard;
