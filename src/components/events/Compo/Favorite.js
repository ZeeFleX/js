import React from 'react';
import './Pages.css';
import EventCard from '../EventCard/EventCard';

const Favorite = ({ favoriteMovies, removeFromFavorites }) => {
  return (
    <div className="container favorite">
      <h2>Избранное</h2>
      {favoriteMovies.length > 0 ? (
        <div className="movie-list">
          {favoriteMovies.map((movie) => (
            <EventCard
              key={movie.id}
              movie={movie}
              removeFromFavorites={removeFromFavorites}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p>Нет фильмов в избранном</p>
      )}
    </div>
  );
};

export default Favorite;