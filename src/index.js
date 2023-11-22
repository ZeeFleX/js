import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FilterInput from "./components/filterInput/filterInputComponent";
import FilterCategoryCheckboxComponent from "./components/filterCategoryCheckbox/filterCategoryCheckbox.component";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const userSelectedGenres = createContext('');

root.render(
    <div className='content m-3'>
      <div className='row'>
        <div className="col-10 mt-3">
          <div><FilterInput/></div>
        </div>
        <div className="col-2 mt-3">
          <FilterCategoryCheckboxComponent/>
        </div>
      </div>
    </div>
)

reportWebVitals();
