const express = require('express');
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


//GET All Profile listing- backend will need to use these
router.get('api/neighbors', (req, res, next) => {
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
//this is already covered in the signup in authroutes /signup since a profile is part of a signup
// router.post('api/profiles',
// myUploader.single('photoUrl'),
// (req, res, next) => {
//   let theProfile;
//   if (typeof req.file != "undefined"){
//     //added username and pswd but no checks and balances, will do that in angular
//     theProfile = new ProfileModel({
//       fullName: req.body.signupFullName,
//       email: req.body.signupEmail,
//       encryptedPassword: scrambledPassword,
//       zipcode: req.body.signupZipcode,
//       photoUrl: '/uploads/' + req.file.filename,
//       tellusmore: req.body.signupMore
//   });
// } else {
//
//     theProfile = new ProfileModel({
//       fullName: req.body.signupFullName,
//       email: req.body.signupEmail,
//       encryptedPassword: scrambledPassword,
//       zipcode: req.body.signupZipcode,
//       photoUrl: "/images/avatar-1295430_1280.png",
//       tellusmore: req.body.signupMore
//   });
//   // console.log("TheProfileConsole", theProfile);
//   // console.log('**************************');
// }
// console.log("TheProfileConsole", theProfile);
// console.log('**************************');
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

module.exports = router;
