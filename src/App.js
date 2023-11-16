import React, { useState } from 'react';
import './App.css';
import Events from './components/events/Events';
import ThemeSwitcher from './components/events/ThemeSwitcher/ThemeSwitcher';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleThemeToggle = (darkMode) => {
    setDarkMode(darkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeSwitcher onToggle={handleThemeToggle} />
      <h1>Фильмы в прокате</h1>
      <Events />
    </div>
  );
}

export default App;