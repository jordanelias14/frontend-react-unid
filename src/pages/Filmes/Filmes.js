import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w500/";
const IMG_GENERIC =
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80";

const setClassificacao = (vote) => {
  if (vote >= 7) {
    return "verde";
  } else if (vote >= 5) {
    return "laranja";
  } else {
    return "vermelho";
  }
};

class Filmes extends React.Component {
  render() {
    return (
      <div className="catalogo-filmes">
        <img
          src={
            this.props.poster_path
              ? IMG_API + this.props.poster_path
              : IMG_GENERIC
          }
          alt={this.props.title}
        />
        <div className="filmes-info">
          <h3 className="shadow-Date">
            Estreia: <br></br>
            {this.props.release_date}
          </h3>
          <span
            className={`shadow ${setClassificacao(this.props.vote_average)}`}
          >
            {this.props.vote_average}
          </span>
        </div>

        <div className="filme-over">
          <h2>Sinopse:</h2>
          <p>{this.props.overview}</p>
        </div>
      </div>
    );
  }
}

export default Filmes;
