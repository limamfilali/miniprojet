import React, { Component } from "react";

import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Admin from './Admin'
import Home from './Home'
import Etudiant from './Etudiant'
class Navbar extends Component {
render() {
  return (
    <div>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                  <div className="container">
  <Link className="navbar-brand" to="/Home">Est Essaouira</Link >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link  className="nav-link" to="/Home">Home <span class="sr-only">(current)</span></Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/Admin">Admin</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/Etudiant">Etudiant</Link >
      </li>
    </ul>
   
  </div>
  </div>
</nav>
                
    </div>
    );
  }
}

export default Navbar;
