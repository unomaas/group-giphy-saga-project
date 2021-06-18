const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('In Favorites GET');
  // establish query string SQL
  const queryString = `SELECT "favorites".id, "favorites".gif_url, "category".name 
                       FROM "favorites"
                       LEFT JOIN "category"
                       ON "favorites".category_id = "category".id;`;
  // inject queryString into DB
  pool.query(queryString)
  // async has a result
    .then( result => {
      console.log(result);
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
  
  // gifToFavorite is the body of the request
  // should be the gif url
  const gifToFavorite = req.body.images?.original.url

  console.log('THIS IS THE GIF URL TO FAVORITE', gifToFavorite)

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
  const categoryToAdd = Number(req.body.category);

  // target id to update
  const targetId = Number(req.params.favId);

  console.log(targetId);
  console.log(categoryToAdd);

  // SQL query to update favorites table
  const queryString = `UPDATE "favorites" SET "category_id" = $1
                       WHERE "id" = $2;`;
  
  // inject update to DB
  pool.query(queryString, [categoryToAdd, targetId])

  // async has result (updated)
  .then( response => {
    console.log(response.rowCount);
    res.sendStatus(204);
  })

  // catch for errors
  .catch( err => {
    console.error(`Problem updating table ${err}`);
  });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
