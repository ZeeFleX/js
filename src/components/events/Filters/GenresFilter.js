import React from 'react';
import "./Filters.css";

const GenresFilter = ({ setGenre }) => {
  const allGenres = [
    'Комедия', 'Спектакль', 'Музыка', 'Опера', 'Мюзикл', 'Фэнтези', 'Приключения', 'Драма', 'История', 'Биография',
    'Ужасы', 'Детектив', 'Боевик', 'Триллер', 'Фантастика', 'Мультфильм', 'Криминал', 'Балет', 'Лекция', 'Семейный',
    'Мелодрама', 'Спорт'
  ];

  const sortedGenres = allGenres.slice().sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }));

  const handleSelect = (e) => {
    const genre = e.target.value.toLowerCase();
    setGenre(genre);
  };

  return (
    <div>
      <label>Жанры: </label>
      <select onChange={handleSelect}>
        <option value="">Все жанры</option>
        {sortedGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenresFilter;