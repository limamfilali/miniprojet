import React , { Component }from 'react';
import Home from './Home';
import Admin from './Admin';
import Etudiant from './Etudiant';
import './App.css';

import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from './Navbar';
class App extends Component {
  render() {
  return (
     <Router>
    <div className="App">
     <Navbar />
     
    <Route exact path='/Home' component={Home} />
    <Route   path='/Admin' component={Admin} />
    <Route   path='/Etudiant' component={Etudiant} />
    </div>  
    </Router>
  );
}
}
export default App;
