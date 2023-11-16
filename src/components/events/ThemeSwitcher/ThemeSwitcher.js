import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ onToggle }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };

  return (
    <div className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
      {isDarkMode ? '🌙' : '☀️'}
    </div>
  );
};

export default ThemeSwitcher;
