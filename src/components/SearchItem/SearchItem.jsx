import React from 'react';
import './SearchItem.css';
import { Button } from '@material-ui/core';


// bring in dispatch 
import { useDispatch } from 'react-redux';

export default function SearchItem({ searchItem }) {

  // use as dispatch
  const dispatch = useDispatch();

  const addToFavorites = () => {
    console.log('In addToFavorites, url is:', searchItem.images.original.url);
    dispatch({ type: 'ADD_TO_FAVORITES', payload: searchItem })
  }

  return (
    <li className="SearchItem-GIF">
      <img src={searchItem.images?.original.url} />
      <Button onClick={addToFavorites}>
        Favorite?
      </Button>
    </li>
  ) // End return
} // End SearchItem
