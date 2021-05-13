import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Painel from './Painel';
import './styles/index.css';



ReactDOM.render(
  (
      <Router>
              <Switch>
                  <Route exact path="/" component={App}/>
                  <Route path="/Painel" component={Painel}/>
              </Switch>
      </Router>
  ),
  document.getElementById('root')
);

