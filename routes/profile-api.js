var express = require('express');
const ProfileModel= require('../models/profile-model.js');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport= require('passport');
// to be able to upload images to this route
const multer= require('multer');
// to save user uploaded files in a specific folder
const myUploader = multer({
  //dest is the destination that specifies where to put the uploaded files
  dest: __dirname + '/../public/uploads/'
});


/* GET Profile listing* Dont think i need this since i don't
want to display all Profiles/
router.get('/profiles', (req, res, next) => {
  //returns all of our profiles.
  ProfileModel.find((err, profileList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(profileList);
  });
});

/* CREATE a new Profile and add to DB. */
router.post('/profiles',
myUploader.single('photoUrl'),
(req, res, next) => {
  let theProfile;
  if (typeof req.file != "undefined"){
    //added username and pswd but no checks and balances, will do that in angular
    theProfile = new ProfileModel({
      username: req.body.username,
      encryptedPassword: req.body.encryptedPassword,
    name: req.body.name,
    maritalstatus: req.body.maritalstatus,
    kids: req.body.kids,
    zipcode: req.body.zipcode,
    newtoneigborhood: req.body.newtoneigborhood,
    photoUrl: '/uploads/' + req.file.filename,
    tellusmore: req.body.tellusmore,

  });
} else {

    theProfile = new ProfileModel({
    name: req.body.name,
    maritalstatus: req.body.maritalstatus,
    kids: req.body.kids,
    zipcode: req.body.zipcode,
    newtoneigborhood: req.body.newtoneigborhood,
    photoUrl: "/images/love-560783_640.jpg",
    tellusmore: req.body.tellusmore,

  });
  console.log("TheProfileConsole", theProfile);
  console.log('**************************');
}
console.log("TheProfileConsole", theProfile);
console.log('**************************');
  theProfile.save((err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'New Profile was created!',
      id: theProfile._id
    });
  });
});

module.exports = router;
