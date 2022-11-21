import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  let user = JSON.parse(localStorage.getItem("auth"));

  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

  if (!user) {
    return navigate("/login");
  }

  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="d-flex justify-content-between mx-2">
        <div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>UniTunes</div>
        <div>
          <button
            className="btn d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user.name}
          </button>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <button
                type="button"
                className="dropdown-item"
                href="#"
                onClick={() => handleLogout()}
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
