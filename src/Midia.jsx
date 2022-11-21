import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { fetchMidia, updateMidia, createMidia } from "./Service";

export default function Midia() {
  const [midia, setMidia] = useState({});

  const [novaMidia, setNovaMidia] = useState({});

  const { midiaId } = useParams();

  let navigate = useNavigate();

  function buscaMidia(midiaId) {
    fetchMidia(midiaId).then((result) => setMidia(result));
  }

  function atualizarMidia(midia) {
    updateMidia(midia)
      .then((result) => {
        setMidia(result);
        alert("Mídia atualizada com sucesso!");
      })
      .catch((e) => {
        console.log(e);
        alert("Erro ao atualizar a mídia!");
      });
  }

  function criarMidia(novaMidia) {
    createMidia(novaMidia)
      .then(() => {
        alert("Mídia criada com sucesso!");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        alert("Erro ao criar a mídia!");
      });
  }

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (midiaId) {
      atualizarMidia(midia);
    } else {
      criarMidia(novaMidia);
    }
  }

  useEffect(() => {
    if (midiaId) {
      buscaMidia(midiaId);
    }
  }, [midiaId]);

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={(e) => handleClick(e)}>
          <div className="row mb-3">
            <div className="col ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nome da mídia
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Nome"
                aria-describedby="emailHelp"
                defaultValue={midia.name || ""}
                onChange={(e) => {
                  midiaId
                    ? (midia.name = e.target.value)
                    : setNovaMidia({ ...novaMidia, name: e.target.value });
                }}
              />
            </div>
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tipo da mídia
              </label>
              <select
                className="form-select"
                id="exampleInputPassword1"
                placeholder="Tipo"
                aria-label="Default select example"
                defaultValue={midia.type || ""}
                onChange={(e) => {
                  midiaId
                    ? (midia.type = e.target.value)
                    : setNovaMidia({ ...novaMidia, type: e.target.value });
                }}
              >
                <option value="Livro">Livro</option>
                <option value="Vídeo">Vídeo</option>
                <option value="Podcast">Podcast</option>
                <option value="Música">Música</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Descrição
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  defaultValue={midia.desc || ""}
                  onChange={(e) => {
                    midiaId
                      ? (midia.desc = e.target.value)
                      : setNovaMidia({ ...novaMidia, desc: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => navigate("/")}
          >
            Voltar
          </button>
          <button
            type="submit"
            className={`btn btn-${midiaId ? "primary" : "success"}`}
          >
            {midiaId ? "Atualizar" : "Criar"}
          </button>
        </form>
      </div>
    </>
  );
}
