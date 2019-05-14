import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContainerRoute from "./components/ContainerRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <ContainerRoute />
        </div>
      </Router>
    );
  }
}

export default App;
