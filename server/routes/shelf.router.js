const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  console.log ('/shelf GET')
  let queryString = `SELECT * FROM "item"`;
  pool.query( queryString ).then ( (results)=>{
    res.send( results.rows );
  }).catch( ( err )=>{
    console.log( err )
    res.send(500); 
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
 router.post('/', (req, res) => {
  const queryText = `INSERT INTO item ("description", "image_url", "user_id") VALUES ($1, $2, $3)`;
  pool.query( queryText, [ req.body.description, req.body.image_url, req.user.id ] )
    .then( results => {
      res.sendStatus( 201 );
    }).catch( err => {
      console.log( err );
      res.sendStatus( 500 );
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM item WHERE "id" = $1`;
  pool.query( queryText, [ req.params.id] )
    .then( results => {
      res.sendStatus( 200 );
    }).catch( err => {
      console.log( err );
      res.sendStatus( 500 );
    })
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
