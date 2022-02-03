import react from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show container">
          <ul className = "links">
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
