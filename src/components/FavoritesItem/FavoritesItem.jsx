import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';


export default function FavoritesItem({ favoriteItem }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    console.log('In FavoritesItem handleSubmit, category:', category);
    const objectToSend = {
        id: favoriteItem.id,
        category: category
    }
    dispatch({
      type: 'ADD_CATEGORY',
      payload: objectToSend
    }); // End dispatch
    console.log('Payload is:', objectToSend);
  }

  return (
    <li className="FavoritesItem-li">

      <img src={favoriteItem.gif_url} />

      <p>Category: {favoriteItem.name} </p>

      <form onSubmit={handleSubmit}>
        <TextField
          required
          select
          defaultValue=""
          onChange={event => setCategory(event.target.value)}
          helperText="Required"
        >
          <MenuItem value='1'>Funny</MenuItem>
          <MenuItem value='2'>Cohort</MenuItem>
          <MenuItem value='3'>Cartoon</MenuItem>
          <MenuItem value='4'>NSFW</MenuItem>
          <MenuItem value='5'>Meme</MenuItem>
        </TextField>
        <Button type="submit">
          Submit Category
        </Button>
      </form>

    </li>
  )
}
