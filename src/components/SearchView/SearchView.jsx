//#region ⬇⬇ All document setup, below:
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SearchView.css';
import SearchItem from '../SearchItem/SearchItem';
import { Button } from '@material-ui/core';

//#endregion ⬆⬆ All document setup above.


export default function SearchView() {
  //#region ⬇⬇ State variables below:
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();
  // ⬇ Importing searchResults reducer:
  const searchResults = useSelector(store => store.searchResults);
  //#endregion ⬆⬆ State variables above. 

  //#region ⬇⬇ Event handlers below:
  // ⬇ searchGiphy:
  const searchGiphy = event => {
    event.preventDefault();
    console.log(`In searchGiphy, query: ${query}`);
    dispatch({
      type: 'SEARCH_BY_KEYWORD',
      payload: query
    });
  } // End searchGiphy

  // ⬇ handleSearchQuery:
  const handleSearchQuery = event => {
    event.preventDefault();
    setQuery(event.target.value)
  } // End handleSearchQuery
  //#endregion ⬆⬆ Event handles above. 


  console.log('searchResults is:', searchResults);
  // ⬇ Rendering:
  return (
    <div className="SearchView-wrapper">

      <form onSubmit={(event) => searchGiphy(event)} >
        <label htmlFor="keyword">
          Search for GIF's:
        </label> &nbsp;
        <input
          id="keyword"
          placeholder="Keyword?"
          type="text"
          onChange={(event) => handleSearchQuery(event)}
        /> &nbsp;
        <Button type="submit">  
          Submit
        </Button>
      </form>

      <div className="SearchView-results">
        <p>Results:</p>
        <ul className="FavoritesView-ul">
          {searchResults.map((searchItem) => {
            return (
              <SearchItem key={searchItem.id} searchItem={searchItem} />
            )
          })}
        </ul>
      </div>

    </div>
  ) // End return
} // End SearchView
