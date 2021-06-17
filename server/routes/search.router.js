const express = require('express');
const pool = require('../modules/pool');

//bring in axios
const axios = require('axios');

// require dotenv
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {

    console.log(req.query.q)

    axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.query.q}`)
    .then(response => {
        res.send(response.data);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})

module.exports = router;