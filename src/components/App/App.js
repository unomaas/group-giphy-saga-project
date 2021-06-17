import React from 'react';
import SearchView from '../SearchView/SearchView';
import SearchItem from '../SearchItem/SearchItem';
import FavoritesView from '../FavoritesView/FavoritesView';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchView />
    </div>
  );
}

export default App;
