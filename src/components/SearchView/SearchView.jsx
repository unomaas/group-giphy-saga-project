import React, {useState} from 'react'

// import dispatch
import {useDispatch} from 'react-redux'

export default function SearchView() {

  const [query, setQuery] = useState('')

  // access to dispatch
  const dispatch = useDispatch();

  const searchGiphy = event => {

    event.preventDefault();

    console.log(`submit search query ${query}`);

    dispatch({
      type: 'SEARCH_BY_KEYWORD',
      payload: query
    });
  }

  const handleSearchQuery = event => {
    event.preventDefault();

    setQuery(event.target.value)
  }

  console.log(query);
  return (
    <div>
      <form onSubmit={(event) => searchGiphy(event)} >
        <label htmlFor="keyword" >Search by Keyword
          <input id="keyword" placeholder="Search GIF by keyword" type="text" onChange={(event) => handleSearchQuery(event)} />
        </label>
          <input type="submit" />
      </form>
    </div>
  )
}
