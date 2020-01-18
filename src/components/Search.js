import React from "react";

function Search({ handleInput, search }) {
  return (
    <section className="movie-wrapper">
      <input
        type="text"
        placeholder="Movie"
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
