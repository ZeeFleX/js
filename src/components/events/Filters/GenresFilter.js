import React, { useState } from 'react';
import './Filters.css';

const GenresFilter = ({ setGenres }) => {
  const allGenres = [
    'комедия', 'спектакль', 'музыка', 'опера', 'мюзикл', 'фэнтези', 'приключения', 'драма', 'история', 'биография',
    'ужасы', 'детектив', 'боевик', 'триллер', 'фантастика', 'мультфильм', 'криминал', 'балет', 'лекция', 'семейный',
    'мелодрама', 'спорт'
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSelect = (e) => {
    const selectedGenre = e.target.value;

    // Проверяем, выбран ли уже жанр
    if (!selectedGenres.includes(selectedGenre)) {
      setSelectedGenres([...selectedGenres, selectedGenre]);
    }
  };

  const handleRemove = (removedGenre) => {
    // Фильтруем выбранные жанры, убирая удаленный жанр
    const updatedGenres = selectedGenres.filter(genre => genre !== removedGenre);
    setSelectedGenres(updatedGenres);
  };

  return (
    <div>
      <label>Жанры:</label>
      <select onChange={handleSelect}>
        <option value="">все жанры</option>
        {allGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <div className="selected-genres">
        {selectedGenres.map((genre) => (
          <div key={genre} className="selected-genre">
            {genre}
            <button onClick={() => handleRemove(genre)}>&times;</button>
          </div>
        ))}
      </div>
    </div>
  )};

export default GenresFilter;