import React from 'react';
import './Pages.css';
import EventCard from '../EventCard/EventCard';
import SearchFilter from '../Filters/SearchFilter'; // Добавлен импорт компонента поиска

const Basket = ({ basketMovies, removeFromBaskets }) => {
  // Состояние для поискового запроса
  const [searchQuery, setSearchQuery] = React.useState('');

  // Функция для фильтрации избранных фильмов по поисковому запросу
  const filteredBasketMovies = basketMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container basket">
      <h2>Корзина</h2>
      
      {/* Компонент поиска для фильтрации избранных фильмов */}
      <SearchFilter setSearchQuery={setSearchQuery} />
      
      {filteredBasketMovies.length > 0 ? (
        <div className="movie-list">
          {filteredBasketMovies.map((movie) => (
            <EventCard
              key={movie.id}
              movie={movie}
              removeFromBaskets={removeFromBaskets}
              isBasket={true}
            />
          ))}
        </div>
      ) : (
        <p>Нет фильмов в корзине</p>
      )}
    </div>
  );
};

export default Basket;