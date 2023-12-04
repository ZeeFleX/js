import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Events from './components/events/Events';
import ThemeSwitcher from './components/events/ThemeSwitcher/ThemeSwitcher';
import SearchFilter from './components/events/Filters/SearchFilter';
import Home from './components/events/Compo/Home';
import About from './components/events/Compo/About';
import Favorite from './components/events/Compo/Favorite';
import Navigation from './components/events/Compo/Navigation';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addToFavorites = (movie) => {
    setFavoriteMovies(prevFavorites => [...prevFavorites, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavoriteMovies(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
  };

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
        <Routes>
        <Route path="/home" element={<Home
          isDarkMode={isDarkMode}
          addToFavorites={addToFavorites}
          searchQuery={searchQuery}/>}
        />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="/favorite" element={<Favorite favoriteMovies={favoriteMovies} removeFromFavorites={removeFromFavorites} />} />
          <Route
            path="/events"
            element={
              <Events
                searchQuery={searchQuery}
                isDarkMode={isDarkMode}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;