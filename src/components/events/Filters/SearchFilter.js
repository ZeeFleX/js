import React, { useState, useEffect } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 50;

      setIsHidden(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`SearchFilter ${isHidden ? 'hidden' : ''}`}>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} 
          placeholder="Поиск..."
          className="search-input"
        />
        <button
          onClick={handleSearch}
          className={`search-button ${isHidden ? 'small' : ''}`}
        >
          Искать
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;