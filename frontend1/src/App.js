import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import FillForm from './components/FillForm'
import ViewData from './components/ViewData'

function App() {
  return (
    <div>
      <Router>
        <Navbar /><br />
          <div className="container">
            <Route path="/" exact component={FillForm}/>
            <Route path="/add" exact component={FillForm}/>
            <Route path="/view" exact component={ViewData}/>
            
          </div>
      </Router>
    </div>
  );
}

export default App;
