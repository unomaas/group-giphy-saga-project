const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('In Favorites GET');
  // establish query string SQL
  const queryString = `SELECT * FROM "favorites";`;
  // inject queryString into DB
  pool.query(queryString)
  // async has a result
    .then( result => {
      console.log('In .then Favorites, result:', result.rows);
      res.send(result.rows);
    }) // End .then
    // error path
    .catch( err => {
      console.log('Error getting rows from favorites table', err);
      res.sendStatus(500);
    }); // End .catch
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
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
