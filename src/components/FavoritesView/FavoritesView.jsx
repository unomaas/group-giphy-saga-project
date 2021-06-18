//#region ⬇⬇ All document setup, below:
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import './FavoritesView.css';
//#endregion ⬆⬆ All document setup above.


export default function FavoritesView() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const favoriteResults = useSelector(store => store.searchResults);
  useEffect(() => {
    getFavorites() // load once
  }, []);
  //#endregion ⬆⬆ State variables above. 

  
  //#region ⬇⬇ Event handlers below:
  const getFavorites = () => {
    dispatch({ type: 'GET_FAVORITES' })
  } // End getFavorites
  //#endregion ⬆⬆ Event handles above. 


  return (
    <div>
      <div>
        <h1>Your Favorites:</h1>
      </div>
      <div>
        <ul>
          {/* import FavoritesItem component */}
          {favoriteResults.map((favoriteItem) => {
            return (
              <FavoritesItem key={searchItem.id} searchItem={searchItem} />
            )
          })}
        </ul>
      </div>
    </div>
  ) // end FavoritesView 
}
