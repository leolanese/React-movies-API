import React from "react";

function Result({ result, openMovie }) {
  return (
    <div className="result" onClick={() => openMovie(result.imdbID)}>
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
