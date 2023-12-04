import React from 'react';
import './Filters.css';

const GenresFilter = ({ setGenre }) => {
  const allGenres = [
    'комедия', 'спектакль', 'музыка', 'опера', 'мюзикл', 'фэнтези', 'приключения', 'драма', 'история', 'биография',
    'ужасы', 'детектив', 'боевик', 'триллер', 'фантастика', 'мультфильм', 'криминал', 'балет', 'лекция', 'семейный',
    'мелодрама', 'спорт'
  ];

  const handleSelect = (e) => {
    const genre = e.target.value;
    setGenre(genre);
  };

  return (
    <div>
      <label>Жанры: </label>
      <select onChange={handleSelect}>
        <option value="">все жанры</option>
        {allGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenresFilter;