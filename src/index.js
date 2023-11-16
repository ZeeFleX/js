import React, {} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FilterInput from "./components/filterInput/filterInputComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div className='content'>
      <div className='row'>
        <div><FilterInput/></div>
      </div>
    </div>
)

reportWebVitals();
