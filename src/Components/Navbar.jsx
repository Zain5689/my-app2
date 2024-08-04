import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar" style={{ background: "#eee" }}>
        <div className="container">
          <Link className="navbar-brand fs-2 text-danger" to="/#">
            MOVEIS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/#">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
