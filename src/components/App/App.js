import React from 'react';
import Header from '../Header/Header';
import SearchView from '../SearchView/SearchView';
import FavoritesView from '../FavoritesView/FavoritesView';
import { Route, HashRouter as Router } from 'react-router-dom';

function App() {
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
