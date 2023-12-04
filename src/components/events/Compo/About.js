import React from 'react';
import './Pages.css';

const About = ({ isDarkMode }) => {
  return (
    <div className={`container about ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>О нас</h2>
      <p>Nothing.</p>
    </div>
  );
};

export default About;