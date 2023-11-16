import React, {useContext, createContext, useState} from "react";

export const MyContext = createContext('')

function FilterInput() {
  const [title, setMovieTitle] = useState('');
  const changeUserInputHandler = event => {
    setMovieTitle(event.target.value)

  }

  console.log(useContext(MyContext));

  return (
    <MyContext.Provider value={title}>
      <div>
        <input type="text" value={title} onChange={changeUserInputHandler} placeholder='Название фильма'/>
      </div>
    </MyContext.Provider>
  )
}

export default FilterInput;
