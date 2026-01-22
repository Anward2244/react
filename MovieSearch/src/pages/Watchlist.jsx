import React, { useState } from "react";
import axios from "axios";
import { useWatchlist } from "../context/WatchlistContext";
import Detail from "../Components/Detail";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [selected, setSelected] = useState({});
  const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

  // Logic to fetch full details when a card is clicked
  const openDetail = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      setSelected(data);
    });
  };

  // Logic to close the modal
  const closeDetail = () => {
    setSelected({});
  };

  return (
    <main>
       <header><h1>My Watchlist</h1></header>
       
       {watchlist.length === 0 ? (
         <p style={{textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem', color: 'var(--text-secondary)'}}>
           No movies saved yet.
         </p>
       ) : (
         <div className="movie-grid">
           {watchlist.map((e) => (
             <div 
               key={e.imdbID} 
               className="movie-card" 
               onClick={() => openDetail(e.imdbID)} /* Added Click Handler */
             >
               {/* Stop Propagation prevents the modal from opening when you click 'Remove' */}
               <button 
                 className="fav-btn active" 
                 onClick={(event) => {
                   event.stopPropagation(); 
                   removeFromWatchlist(e.imdbID);
                 }}
               >
                 ✕
               </button>
               
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

      {/* Render the Detail Modal if a movie is selected */}
      {typeof selected.Title != "undefined" ? (
        <Detail selected={selected} closeDetail={closeDetail} />
      ) : false}
    </main>
  );
};

export default Watchlist;