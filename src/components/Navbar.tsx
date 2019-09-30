import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbrandIcon = styled.img`
  height: 35px !important;
  width: 35px !important;
  max-height: 100% !important;
  max-width: 100% !important;
`;

const Navbar: React.FunctionComponent = () => {
  const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <NavbrandIcon
            alt="Rick Sanchez"
            src="https://img.icons8.com/color/50/000000/rick-sanchez.png"
          />
          <NavbrandIcon
            alt="Morty Smith"
            src="https://img.icons8.com/color/48/000000/morty-smith.png"
          />
        </a>
        <a
          onClick={toggleNavbar}
          role="button"
          className={`navbar-burger burger ${isNavbarOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbar"
        className={`navbar-menu ${isNavbarOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <Link to="/characters" className="navbar-item has-text-weight-bold">
            Characters
          </Link>
          <Link
            to="/wtf"
            className="navbar-item has-text-primary has-text-weight-bold"
          >
            WTF?
          </Link>
          {/* <Link to="/" className="navbar-item">
            Locations
          </Link>
          <Link to="/" className="navbar-item">
            Episodes
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
