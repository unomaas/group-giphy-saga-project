import React from 'react';
import './SearchItem.css';

export default function SearchItem({ searchItem }) {
  return (
    <div className="SearchItem-wrapper">

      <div className="SearchItem-GIF">
        {/* <img src={searchItem?.data?.data?.[49]?.images?.original.url} /> */}
      </div>

      <div className="SearchItem-Fav">
        <button>
          Favorite?
        </button>
      </div>

    </div>
  ) // End return
} // End SearchItem
