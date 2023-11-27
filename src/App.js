import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Events from './components/events/Events';
import ThemeSwitcher from './components/events/ThemeSwitcher/ThemeSwitcher';
import GenresFilter from './components/events/Filters/GenresFilter';
import PremiereFilter from './components/events/Filters/PremiereFilter';
import SearchFilter from './components/events/Filters/SearchFilter';
import Home from './components/events/Compo/Home';
import About from './components/events/Compo/About';
import Favorite from './components/events/Compo/Favorite';
import Navigation from './components/events/Compo/Navigation';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [selectedGenres, setGenres] = useState('');
  const [selectedPremiere, setPremiere] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleThemeToggle = (darkMode) => {
    setDarkMode(darkMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <ThemeSwitcher onToggle={handleThemeToggle} />
        <div className="header">
          <h1>Фильмы в прокате</h1>
          <SearchFilter setSearchQuery={setSearchQuery} />
        </div>
        <Navigation />
        <div className="filters-container">
          <GenresFilter setGenres={setGenres} />
          <PremiereFilter setPremiere={setPremiere} />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/events" element={<Events selectedGenres={selectedGenres} selectedPremiere={selectedPremiere} searchQuery={searchQuery} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;