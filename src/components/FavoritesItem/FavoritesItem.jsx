import React from 'react'

export default function FavoritesItem({ favoriteItem }) {
  return (
    <li className="FavoritesItem-li">
      <img src={favoriteItem.gif_url} /> 
      <button>Funny</button>
      <button>Cohort</button>
      <button>Cartoon</button>
      <button>NSFW</button>
      <button>Meme</button>
      <button>Delete</button>
    </li>
  )
}
