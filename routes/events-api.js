//uncomment when ready to use it

const express = require('express');
const EventModel= require('../models/events-model.js');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport= require('passport');
const multer= require('multer');
// to save user uploaded files in a specific folder
const myUploader = multer({
  //dest is the destination that specifies where to put the uploaded files
  dest: __dirname + '/../public/uploads/'
});


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
