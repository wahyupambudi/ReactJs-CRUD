import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const token = localStorage.getItem("token");
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          React Express CRUD
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
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/siswa">
                Siswa
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            {!token && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </li>
            )}

            {token && (
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                <button className="btn btn-danger">Logout</button>
                </Link>
              </li>
            )}</ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
