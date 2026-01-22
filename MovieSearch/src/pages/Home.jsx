import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Components/Search";
import Detail from "../Components/Detail";
import { useWatchlist } from "../context/WatchlistContext";

const Home = () => {
  const [state, setState] = useState({ s: "Avengers", results: [], selected: {} });
  const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  // Load default movies (Avengers) on startup
  useEffect(() => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      if(data.Search) setState(prev => ({ ...prev, results: data.Search }));
    });
  }, []);

  const searchInput = (e) => {
    let s = e.target.value;
    setState((prevState) => ({ ...prevState, s: s }));
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search || [];
        setState((prevState) => ({ ...prevState, results: results }));
      });
    }
  };

  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      setState((prevState) => ({ ...prevState, selected: data }));
    });
  };

  const closeDetail = () => {
    setState((prevState) => ({ ...prevState, selected: {} }));
  };

  const toggleHeart = (e, movie) => {
    e.stopPropagation();
    if (isInWatchlist(movie.imdbID)) {
      removeFromWatchlist(movie.imdbID);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <main>
      <header><h1>Movie Mania</h1></header>
      <Search searchInput={searchInput} search={search} />

      <div className="movie-grid">
        {state.results && state.results.map((e) => (
          <div key={e.imdbID} className="movie-card" onClick={() => openDetail(e.imdbID)}>
            <button 
              className={`fav-btn ${isInWatchlist(e.imdbID) ? 'active' : ''}`}
              onClick={(event) => toggleHeart(event, e)}
            >
              ♥
            </button>
            <div className="poster-wrapper">
              <img src={e.Poster !== "N/A" ? e.Poster : "https://via.placeholder.com/300x450"} alt={e.Title} />
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
      ) : false}
    </main>
  );
};

export default Home;