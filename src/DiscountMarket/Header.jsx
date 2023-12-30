// Header.jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src="/images/download.png"
          alt="Logo"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Daily-Deals">
              Daily-Deals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/New Releases">
              New-Releases
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact us">
              Help&Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
