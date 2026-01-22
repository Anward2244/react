import React from "react";
import { useWatchlist } from "../context/WatchlistContext";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <main>
       <header><h1>My Watchlist</h1></header>
       {watchlist.length === 0 ? <p style={{textAlign: 'center'}}>No movies saved yet.</p> : (
         <div className="movie-grid">
           {watchlist.map((e) => (
             <div key={e.imdbID} className="movie-card">
               <button className="fav-btn active" onClick={() => removeFromWatchlist(e.imdbID)}>✕</button>
               <div className="poster-wrapper">
                 <img src={e.Poster} alt={e.Title} />
               </div>
               <div className="movie-info">
                 <h3>{e.Title}</h3>
                 <span>{e.Year}</span>
               </div>
             </div>
           ))}
         </div>
       )}
    </main>
  );
};

export default Watchlist;