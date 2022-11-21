import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  const [midias, setMidias] = useState([]);

  const [midiasFiltradas, setMidiasFiltradas] = useState([]);

  function fetchMidias() {
    fetch("http://localhost:8000/midias").then((res) =>
      res.json().then((result) => {
        setMidias(result);
        setMidiasFiltradas(result);
      })
    );
  }

  function deleteMidia(midia) {
    if (
      window.confirm(
        "Você realmente deseja remover a mídia: " + midia.name + "?"
      )
    ) {
      fetch(`http://localhost:8000/midias/${midia.id}`, {
        method: "DELETE",
      }).then(() => fetchMidias());
    }
  }

  function filtrarMidias(busca) {
    setMidiasFiltradas(
      midias.filter(({ name }) =>
        name.toLowerCase().includes(busca.toLowerCase())
      )
    );
  }

  useEffect(() => {
    fetchMidias();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid pb-3">
        <div className="row">
          <div className="col">
            <Link className="btn btn-success mb-2" to={"/create"}>
              <i className="fa fa-plus me-1" aria-hidden="true"></i>Nova Mídia
            </Link>
          </div>
          <div className="col-11">
            <input
              type="search"
              className="form-control"
              placeholder="Procurar..."
              aria-label="Procurar"
              onChange={(e) => filtrarMidias(e.target.value)}
            />
          </div>
        </div>
        {midias.length === 0 ? (
          <div className="d-grid gap-3">
            <div className="bg-light border rounded-3 py-3 text-center">
              Sem items
            </div>
          </div>
        ) : (
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="">
                <th>Nome</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th className="text-center" width="7%">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
              {midiasFiltradas.map((midia) => (
                <tr key={midia.id}>
                  <td>{midia.name}</td>
                  <td>{midia.type}</td>
                  <td>{midia.desc}</td>
                  <td className="text-center">
                    <Link
                      className="btn btn-primary me-2"
                      to={"/edit/" + midia.id}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>

                    <Link
                      className="btn btn-danger"
                      onClick={() => deleteMidia(midia)}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
