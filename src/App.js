import React, { useState } from 'react';
import './App.css';
import Events from './components/events/Events';
import ThemeSwitcher from './components/events/ThemeSwitcher/ThemeSwitcher';
import GenresFilter from './components/events/Filters/GenresFilter';
import PremiereFilter from './components/events/Filters/PremiereFilter';
import SearchFilter from './components/events/Filters/SearchFilter';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [selectedGenres, setGenres] = useState('');
  const [selectedPremiere, setPremiere] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleThemeToggle = (darkMode) => {
    setDarkMode(darkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeSwitcher onToggle={handleThemeToggle} />
      <div className="header">
        <h1>Фильмы в прокате</h1>
        <SearchFilter setSearchQuery={setSearchQuery} />
      </div>
      <div className="filters-container">
        <GenresFilter setGenres={setGenres} />
        <PremiereFilter setPremiere={setPremiere} />
      </div>
      <Events selectedGenres={selectedGenres} selectedPremiere={selectedPremiere} searchQuery={searchQuery} />
    </div>
  );
}

export default App;