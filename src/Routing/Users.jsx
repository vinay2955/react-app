import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Users() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users/internal" className="nav-link">
              Internal User
            </Link>
          </li>
          <li>
            <Link to="/users/external" className="nav-link">
              external User
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
