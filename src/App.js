import { React, useEffect, useState } from "react";
import Filmes from "./pages/Filmes/Filmes";

const REQ_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5678f8da1b28a307121ddcad57f837fc";

const BUSCA_API =
  "https://api.themoviedb.org/3/search/movie?api_key=5678f8da1b28a307121ddcad57f837fc&query=";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [buscador, setBuscador] = useState("");

  useEffect(() => {
    getFilmes(REQ_API);
  }, []);

  const getFilmes = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setFilmes(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (buscador) {
      getFilmes(BUSCA_API + buscador);
      setBuscador("");
    }
  };

  const handleOnChange = (e) => {
    setBuscador(e.target.value);
  };

  return (
    <>
      <header>
        <a href="http://localhost:3000/">
          <p className="title">Central de Filmes</p>
        </a>
        <form className="form" onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Buscar Filme"
            value={buscador}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>

      <div className="filme-container">
        {filmes.length > 0 &&
          filmes.map((filmeAux) => (
            <Filmes idFilme={filmeAux.id} {...filmeAux} />
          ))}
      </div>
      <footer>
        <p>Direitos reservados</p>
      </footer>
    </>
  );
}

export default App;
