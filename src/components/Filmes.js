import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Filmes = ({ title, poster_path, overview, vote_average }) => (
  <div className="catalogo-filmes">
    <img src={IMG_API + poster_path} alt={title} />
    <div className="filmes-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className="filme-over">
      <h2>Sinopse:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Filmes;
