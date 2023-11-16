import React from 'react';
import './EventCard.css';

const EventCard = ({ movie }) => {
  return (
    <div key={movie.id} className="movie-card">
      <img src={movie.imageMedium} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Возрастной рейтинг: {movie.ageLimit}</p>
      <p>Язык: {movie.languages.map(({ language }) => language.Acronym).join(', ')}</p>
      <p>Жанры: {movie.genres.map(({ genre }) => genre.Name).join(', ')}</p>
      <p>Продолжительность: {movie.duration / 60} мин</p>
      <p>Премьера: {movie.premiere ? 'Да' : 'Нет'}</p>
    </div>
  );
};

export default EventCard;
