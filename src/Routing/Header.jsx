import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav-link">
                users
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
