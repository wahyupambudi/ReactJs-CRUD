import React from "react";
import Home from "../page/Home";
import SiswaIndex from "../page/siswa/Index";
import SiswaCreate from "../page/siswa/Create";
import SiswaEdit from "../page/siswa/Edit";
import Login from "../page/Login";
import { Route } from "react-router-dom";

const ContainerRoute = () => {
  return (
    <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/Login" exact component={Login} />
      <Route path="/siswa" exact component={SiswaIndex} />
      <Route path="/siswa/create" exact component={SiswaCreate} />
      <Route path="/siswa/edit/:id" exact component={SiswaEdit} />
    </div>
  );
};

export default ContainerRoute;
