import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
// import { Link } from 'react-router';

import './App.scss';
import ReposList from './components/ReposList';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        {/* clicking the header will redirect back to home page */}
          <Link className="backToHomeButton" to="/">
            <header className="App-header">
              <h1 className="App-title">Welcome to Github Repos Viewer App</h1>
            </header>
          </Link>
          <NavLink to="/list/" exact >
            View Repos List
          </NavLink>
          <Route path="/list" component={ReposList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
