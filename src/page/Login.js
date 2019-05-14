import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
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
    e.preventDefault();

    const { username, password } = this.state;
    axios
      .post("https://expres789.herokuapp.com/users/login", { username, password })
      .then(res => {
        console.log(res.data.data.token);
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        this.props.history.push("/")
      })
      .catch(err => {
        console.log(err);
        this.setState({ message: "Pastikan Username & Password Benar" });
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.state.message !== "" && (
          <div class="alert alert-danger" role="alert">
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

export default Login;
