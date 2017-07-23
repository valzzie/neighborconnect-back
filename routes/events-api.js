const express = require('express');
const EventModel= require('../models/events-model.js');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport= require('passport');

//GET event listings
router.get('/events', (req, res, next) => {
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
