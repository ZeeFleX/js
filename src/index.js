import React, {} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MovieCard from "./components/movie_card/movie_card_component";
import FilterInput from "./components/filterInput/filterInputComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className='content'>
      <div className='row'>
        <div><FilterInput/></div>
        <div><MovieCard/></div>
      </div>
    </div>
)

reportWebVitals();
