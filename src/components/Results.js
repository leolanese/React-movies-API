import React from "react";

import Result from "./Result";
import Movie from "./Movie";

function Results({ results, openMovie }) {
  return (
    <section className="results">

      { !!results ? (
        results.map(result => (
          <Result key={result.imdbID} result={result} openMovie={openMovie} />
        ))) : (
          <div className="no-movie">No movie found with that search</div>
        )}
    </section>
  );
}

export default Results;
