import React, { Component } from 'react';
import 'bootstrap3/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

import Menu from './components/Menu';
import routes from './route.js';


class App extends Component {
  showContentMenus = () => {
    return (routes.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
      );
    }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Switch>
            {this.showContentMenus()}
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
