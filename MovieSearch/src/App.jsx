import React, { useState } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Detail from "./Components/Detail";
import "./App.css";

function App() {
  const [state, setState] = useState({
    s: "avengers", // Changed default to something with more visual results
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

  const searchInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeDetail = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Mania</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />

        <div className="movie-grid">
          {state.results && state.results.map((e) => (
            <div
              key={e.imdbID}
              className="movie-card"
              onClick={() => openDetail(e.imdbID)}
            >
              <div className="poster-wrapper">
                <img src={e.Poster !== "N/A" ? e.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} alt={e.Title} />
              </div>
              <div className="movie-info">
                <h3>{e.Title}</h3>
                <span>{e.Year}</span>
              </div>
            </div>
          ))}
        </div>

        {typeof state.selected.Title != "undefined" ? (
          <Detail selected={state.selected} closeDetail={closeDetail} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;