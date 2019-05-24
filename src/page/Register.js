import React, { Component } from "react";
import axios from "../axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { username, password } = this.state;
    axios.post("/users/regis", { username, password }).then(res => {
      // this.props.history.push("/siswa")
      this.setState({ message: "Selamat Daftar Akun Berhasil" });
      return (window.location = "/login");
    });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        {this.state.message !== "" && (
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        )}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
