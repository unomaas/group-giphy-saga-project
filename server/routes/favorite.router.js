const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

  // establish query string SQL
  const queryString = `SELECT * FROM "favorites"`

  // inject queryString into DB
  pool.query(queryString)

  // async has a result
  .then( result => {
    res.sendStatus(result.rows);
  })

  // error path
  .catch( err => {
    console.log('Error getting rows from favorites table', err);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  
  // gifToFavorite is the body of the request
  // should be the gif url
  const gifToFavorite = req.body

  // SQL Insert statement
  const queryString = `INSERT INTO "favorites" ("gif_url") 
                       VALUES ($1);`

  // inject query string into database
  pool.query(queryString, [gifToFavorite])
  
  // async call garners result (OK)
  .then( () => {
    res.sendStatus(201);
  })

  // catch for error
  .catch( err => {
    console.error(`There was a problem adding to favorites ${err}`);
    res.sendStatus(500);
  })

});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
