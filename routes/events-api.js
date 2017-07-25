//uncomment when ready to use it

const express = require('express');
const EventModel= require('../models/events-model.js');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport= require('passport');

//GET event listings
// console.log("Im in / events routes");
router.get('/api/events', (req, res, next) => {
  //returns all events.
  EventModel.find((err, eventList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(eventList);
  });
});


module.exports = router;
