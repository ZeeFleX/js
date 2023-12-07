import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Events from './components/events/Events';
import ThemeSwitcher from './components/events/ThemeSwitcher/ThemeSwitcher';
import Home from './components/events/Compo/Home';
import About from './components/events/Compo/About';
import Basket from './components/events/Compo/Basket';
import Navigation from './components/events/Compo/Navigation';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [basketMovies, setBasketMovies] = useState([]);

  const addToBaskets = (movie) => {
    setBasketMovies(prevBaskets => [...prevBaskets, movie]);
  };

  const removeFromBaskets = (movieId) => {
    setBasketMovies(prevBaskets => prevBaskets.filter(movie => movie.id !== movieId));
  };

  const handleThemeToggle = (darkMode) => {
    setDarkMode(darkMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <ThemeSwitcher onToggle={handleThemeToggle} />
        <div className="header">
          <h1>Мой сайт</h1>
        </div>
        <Navigation />
        <Routes>
          {/* Добавляем Route для корневого пути */}
          <Route path="" element={<Home isDarkMode={isDarkMode} addToBaskets={addToBaskets} />} />
          <Route path="/home" element={<Home isDarkMode={isDarkMode} addToBaskets={addToBaskets} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/basket" element={<Basket basketMovies={basketMovies} removeFromBaskets={removeFromBaskets} />} />
          <Route path="/events" element={<Events isDarkMode={isDarkMode} addToBaskets={addToBaskets} removeFromBaskets={removeFromBaskets} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;