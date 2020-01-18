import React, { useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Movie from "./components/Movie";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  // Please, remember to create your own free key
  const request = "http://www.omdbapi.com/?apikey=xxxxxxxx";
  const search = e => {
    if (e.key === "Enter") {
      axios(request + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        console.table(results);

        setState(prevState => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = id => {
    axios(request + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeMovie = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Movie selected={state.selected} closeMovie={closeMovie} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
