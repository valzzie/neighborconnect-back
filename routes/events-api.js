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
  EventModel
  .find()
  //to populate the actual items except for email and password.
  .populate("peopleAttending", {email: 0, encryptedPassword: 0, _id:0})
  .exec(
    (err, eventList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(eventList);
  });
});

router.get('/api/events/:myId', (req, res, next) => {
  //returns all events.
  EventModel
  .findById(req.params.myId)
  //to populate the actual items except for email and password.
  .populate("peopleAttending", {email: 0, encryptedPassword: 0, _id:0})
  .exec(
    (err, eventDetailsList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(eventDetailsList);
  });
});


module.exports = router;
