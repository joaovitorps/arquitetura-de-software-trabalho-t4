import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "./playlist_picture_login.png";
import { createUser, fazLogin, findUserByEmail } from "./Service";

export default function Register() {
  let navigate = useNavigate();
  let [nome, setNome] = useState("");
  let [email, setEmail] = useState("");
  let [senha, setSenha] = useState("");
  let [confirmaSenha, setConfirmaSenha] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (senha === confirmaSenha) {
      let userData = {
        name: nome,
        mail: email,
        password: senha,
      };
      createUser(userData).then((result) => {
        fazLogin(result);
        navigate("/");
      });
    } else {
      alert("Senhas não são iguais");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid" alt="playlist" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleRegister}>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Registrar</p>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="formNome">
                  Nome
                </label>
                <input
                  type="text"
                  id="formNome"
                  className="form-control form-control-lg"
                  placeholder="Insira seu Nome"
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
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
                <label className="form-label" htmlFor="formSenha">
                  Senha
                </label>
                <input
                  type="password"
                  id="formSenha"
                  className="form-control form-control-lg"
                  placeholder="Insira sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="formConfirmaSenha">
                  Confirmação da Senha
                </label>
                <input
                  type="password"
                  id="formConfirmaSenha"
                  className="form-control form-control-lg"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  required
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Registrar
                </button>
                <Link to={`home`}></Link>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Já possui uma conta?{" "}
                  <a href={`/login`} className="link-danger">
                    Fazer login
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
