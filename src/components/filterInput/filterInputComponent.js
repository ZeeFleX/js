import React, {useState, createContext} from "react";
import MovieCard from "../movie_card/movie_card_component";

export const UserInput = createContext('')

function FilterInput() {

  const [userInput, setMovieTitle] = useState('');
  const changeUserInputHandler = event => {
    setMovieTitle(event.target.value)

  }

  return (
    <UserInput.Provider value={userInput}>
      <div>
        <input type="text" value={userInput} onChange={changeUserInputHandler} placeholder='Название фильма'/>
      </div>
      <div><MovieCard/></div>
    </UserInput.Provider>
  )
}

export default FilterInput;
