import React, { Component } from "react";
import "../../src/index.css";

class Home extends Component {
  render() {
    const token = localStorage.getItem("token");
    return (
      <div>
        <br />
        <h1 id="edit1">Welcome On Home Page</h1>
        {!token && (
          <p id="edit2">
            <h4>Please Log In To View Data</h4>
          </p>
        )}
         {token && (
          <p id="edit3">
            <h4>Congratulation To View Data</h4>
          </p>
        )}
      </div>
    );
  }
}

export default Home;
