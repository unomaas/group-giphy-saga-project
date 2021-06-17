import React from 'react';
import Header from '../Header/Header';
import SearchView from '../SearchView/SearchView';
import SearchItem from '../SearchItem/SearchItem';
import FavoritesView from '../FavoritesView/FavoritesView';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function App(props) {
  return (
    <div>
      <Header />
      <h1>Giphy Search!</h1>
    </div>
  );
}

export default App;
