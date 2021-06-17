import React from 'react';
import Header from '../Header/Header';
import SearchView from '../SearchView/SearchView';
import SearchItem from '../SearchItem/SearchItem';
import FavoritesView from '../FavoritesView/FavoritesView';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import { Route, HashRouter as Router } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div>

        <Header />

        <Route path='/' exact>
          <SearchView />
        </Route>

        <Route path='/favorites'>
          <FavoritesView />
        </Route>
      </div>
    </Router>
  );
}

export default App;
