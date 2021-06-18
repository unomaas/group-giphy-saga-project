import React from 'react';
import './SearchItem.css';

export default function SearchItem({ searchItem }) {

  const addToFavorites = () => {
    console.log('In addToFavorites, url is:', searchItem.url);
    dispatch({ type: 'ADD_TO_FAVORITES', payload: searchItem.url })
  }

  return (
    <div className="SearchItem-wrapper">

      <div className="SearchItem-GIF">
        <img src={searchItem.images?.original.url} />
      </div>

      <div className="SearchItem-Fav">
        <button onClick={addToFavorites}>
          Favorite?
        </button>
      </div>

    </div>
  ) // End return
} // End SearchItem
