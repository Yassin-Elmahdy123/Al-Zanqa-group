import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ cartCount = 3 }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <h2>Book Store</h2>
      </Link>

      <div className="navbar__links">
        <Link to="/login" className="navbar__link">Login</Link>
        <Link to="/signup" className="navbar__link">Signup</Link>

        <Link to="/cart" className="navbar__cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="navbar__cart-icon"
          >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
          </svg>

          <span className="navbar__cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
