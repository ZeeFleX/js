import React from 'react';
import './Filters.css'; // Импортируем стили

const PremiereFilter = ({ setPremiere }) => {
  const handleSelect = (e) => {
    setPremiere(e.target.value);
  };

  return (
    <div>
      <label>Премьера: </label>
      <select onChange={handleSelect}>
        <option value="">все</option>
        <option value="true">Да</option>
        <option value="false">Нет</option>
      </select>
    </div>
  );
};

export default PremiereFilter;
