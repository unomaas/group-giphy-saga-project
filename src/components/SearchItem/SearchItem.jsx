import React from 'react';
import './SearchItem.css';

// bring in dispatch 
import {useDispatch} from 'react-redux';

export default function SearchItem({ searchItem }) {

  // use as dispatch
  const dispatch = useDispatch();

  const addToFavorites = () => {
    console.log('In addToFavorites, url is:', searchItem.images.original.url);
    dispatch({ type: 'ADD_TO_FAVORITES', payload: searchItem })
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
