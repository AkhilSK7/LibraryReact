import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand fs-2 fw-bold text-primary" href="#">
          LIBRARY
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse ms-5 fs-4 fw-bold"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ">
              <Link to="/" style={{ textDecoration: "none" }}>
                <a class="nav-link " href="#">
                  Home
                </a>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/view" style={{ textDecoration: "none" }}>
                <a class="nav-link" href="#">
                  View
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/add" style={{ textDecoration: "none" }}>
                <a class="nav-link" href="#">
                  Add
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Logout
              </a>
            </li>

            <li class="nav-item">
              <Link to="/register" style={{ textDecoration: "none" }}>
                <a class="nav-link" href="#">
                  Register
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <a class="nav-link" href="#">
                  Login
                </a>
              </Link>
            </li>
          </ul>

          <div class="d-flex ms-auto my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <Link to="/search">
              <button
                class="btn btn-outline-success my-2 my-sm-0 ms-2"
                type="submit"
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
