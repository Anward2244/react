import React from "react";

function Detail({ selected, closeDetail }) {
  return (
    <section className="detail" onClick={closeDetail}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeDetail}>✕</button>

        <div className="detail-header">
          <div>
            <h2>{selected.Title}</h2>
            <span style={{color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
              {selected.Year}
            </span>
          </div>
          <span className="rating-chip">⭐ {selected.imdbRating}</span>
        </div>

        <div className="about">
          <img src={selected.Poster} alt={selected.Title} />
          <div className="text-content">
            <p>{selected.Plot}</p>
            <br />
            <p><strong>Director:</strong> {selected.Director}</p>
            <p><strong>Actors:</strong> {selected.Actors}</p>
            <p><strong>Genre:</strong> {selected.Genre}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;