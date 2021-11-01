import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books.js';
import Categories from './components/Categories.js';
import Header from './components/Header.js';

const Nav = () => (
        <Router>
          <div>
            <Header/>
        <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/Categories" component={Categories} />
        </Switch>
        </div>
      </Router>
);
export default Nav;