import React, { useEffect } from 'react';

function Movie({ selected, closeMovie }) {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        console.log('BACK');
        closeMovie();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>

        <p className="data">
          Rating: {selected.imdbRating}
          <br />
          Language: {selected.Language}
          <br />
          Actors: {selected.Actors}
          <br />
          Awards: {selected.Awards}
          <br />
          Released: {selected.Released}
          <br />
        </p>

        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>

        <button className="close" onClick={closeMovie}>
          Back
        </button>
      </div>
    </section>
  );
}

export default Movie;
