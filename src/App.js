import "./App.css";

import { useEffect, useState } from "react";
import Filmes from "./components/Filmes";

const REQ_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5678f8da1b28a307121ddcad57f837fc";

const BUSCA_API =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=";

function App() {
  const [filmes, setFilmes] = useState([]);

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

  return (
    <>
      <header>
        <h4>Central de Filmes</h4>
      </header>

      <div className="filme-container">
        {filmes.length > 0 &&
          filmes.map((filmeAux) => <Filmes key={filmeAux.id} {...filmeAux} />)}
      </div>
    </>
  );
}

export default App;
