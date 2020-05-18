import React from "react";
import {
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Header from './Layout/Header'
import Footer from './Layout/Footer'

import Home from './Home'
import Users from './Users'
import About from './About'

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

