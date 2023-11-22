import Movie_card_data from "../movie_card_data/movie_card_data";

function FilterCategoryCheckboxComponent() {
  const genres = [];
  Movie_card_data().forEach(function (item) {
    item.genres.forEach(function (element) {
      genres.push(element.genre.Name);
    });
  });

  const uniqueGenres = [...new Set(genres)];
  const selectedGenres = [];

  const filterButtonHandler = (evt) => {
    evt.preventDefault();
    document.querySelectorAll('.form-check').forEach(function (item) {
      if (item.querySelector('.form-check-input').checked === true) {
        selectedGenres.push(item.querySelector('.form-check-label').innerHTML)
      }
    })
  }

  return (
    <form action="">
      {uniqueGenres.map(item =>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {item}
          </label>
        </div>
      )}
      <button className='btn btn-info m-3' type="button" onClick={filterButtonHandler}>Фильтрануть</button>
    </form>
  )
}

export default FilterCategoryCheckboxComponent;