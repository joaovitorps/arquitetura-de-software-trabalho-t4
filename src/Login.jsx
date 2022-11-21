import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "./playlist_picture_login.png";
import { fazLogin, findUserByEmail } from "./Service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    e.stopPropagation();

    findUserByEmail(email).then((result) => {
      if (result.length !== 0) {
        if (result[0].password === pass) {
          fazLogin(result[0]);
          navigate("/");
        } else {
          alert(
            "Dados não encontrados, por favor verifique sua senha ou crie uma conta"
          );
        }
      } else {
        alert(
          "Dados não encontrados, por favor verifique sua senha ou crie uma conta"
        );
      }
    });
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid" alt="playlist" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Acessar</p>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  E-mail
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Insira seu E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Senha
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Insira sua senha"
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Não possui uma conta?{" "}
                  <a href={`register`} className="link-danger">
                    Registrar
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </div>

        <div>
          <a href="#!" className="text-white me-4">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
