const express = require('express');
const bcrypt = require('bcrypt');
const ProfileModel = require('../models/profile-model');
const passport = require('passport');
const router  = express.Router();
// to be able to upload images to this route
const multer= require('multer');
// to save user uploaded files in a specific folder
const myUploader = multer({
  //dest is the destination that specifies where to put the uploaded files
  dest: __dirname + '/../public/uploads/'
});

//**********************************************************************
//post for the signup that is sent to Angular, if error respond in JSON
router.post('/api/signup', myUploader.single('profileImage'), (req, res, next) => {

  if(!req.body.signupEmail || !req.body.signupPassword || !req.body.signupZipcode ){

    //check password
    res.status(401).json({message: "Email, password and zipcode are required to sign up!"});
    return;

  }
  if (req.body.signupZipcode.length != 5){

    res.status(401).json({message: "Please enter exactly 5 digits for the zipcode"});
    return;
  }


  //now check email
  ProfileModel.findOne(
    {email: req.body.signupEmail},
    (err,userFromDb) => {
      //want to render JSON if error.  Error 500is a server error.
      if (err) {
        res.status(500).json({message: 'System error with Email' });
        return;
      }

      if (userFromDb) {
        //400 for cient errors (user needs to fix somehting)
        res.status(400).json({message: "Email already exists"});
        return;
      }

      const salt = bcrypt.genSaltSync(10);
      const scrambledPassword = bcrypt.hashSync(req.body.signupPassword, salt);

      let theProfile;

      if (typeof req.file != "undefined"){
        console.log("RE FILE" + req.file);
console.log("_----------------------------------------");
        theProfile = new ProfileModel({

            fullName: req.body.signupFullName,
            email: req.body.signupEmail,
            encryptedPassword: scrambledPassword,
            zipcode: req.body.signupZipcode,
            photoUrl: '/uploads/' + req.file.filename,
            tellusmore: req.body.signupMore,


          });
      }
      else {
        theProfile = new ProfileModel({
            fullName: req.body.signupFullName,
            email: req.body.signupEmail,
            encryptedPassword: scrambledPassword,
            zipcode: req.body.signupZipcode,
            photoUrl: "/images/avatar-1295430_1280.png",
            tellusmore: req.body.signupMore,
            //do I need this????


        // console.log("TheProfileConsole", theProfile);
        // console.log('**************************');
      });
    }

      theProfile.save((err) => {
        if (err){
          res.status(500).json({message: "System error with Profile Save"});
          return;
        }
        //to auto login user after they have signed up*********************
                // req.login(theProfile, (err) => {
                //   if (err){
                //     res.status(500).json({message: "There's a problem with the AutoLogin"});
                //     return;
                //   }
                //   theProfile.encryptedPassword = undefined;
                //   // //Send the users info to Angular.
                //   res.status(200).json(theProfile);
                // });

          res.json({
            message: 'New Profile was created!',
            id: theProfile._id
          });
      });

//
// //removes the encryptedPasword from the object before sending to Angular, due to security risk.
// //this does not remove it from the db.
//
 });
});
//*****************************************************************************
//post for login that is sent to Angular. Diff from before since not redirecting
//using json instead
router.post('/api/login', (req,res,next) => {
  const authenticateFunction =
  passport.authenticate('local', (err, theProfile, extraInfo) => {
    // console.log('the profile ' + theProfile);
    // console.log('info ' + extraInfo);
    //errors prevented me from deciding if login was successful or not
if (err) {
  res.status(500).json({message: 'Unknown login error'});
  return;
}
//if login failed
if(!theProfile){
  //extraInfo object already has all of the feedback messages
  res.status(401).json(extraInfo);
  return;
}

//login is successful
req.login(theProfile, (err) => {
  if (err){
    res.status(500).json({message: "Session save error"});
    return;
  }
  //don't send encryptedPassword to Angular
  theProfile.encryptedPassword = undefined;
  //everything is going well, send the users info to the client.
  res.status(200).json(theProfile);
});
  });
  authenticateFunction(req,res,next);
});
//*****************************************************************************
//post logout that is sent to Angular
router.post('/api/logout', (req,res,next) => {
  req.logout();
  res.status(200).json({message: "Log out successful"});
});

//*****************************************************************************
//get checkifloggedin logic that is sent to Angular so they know if a someone is logged in
//removed the api/checklogin and changed to /checklogin to see if works

router.get('/api/checklogin', (req,res,next) => {
if(!req.user){
  res.status(401).json({message: "Nobody has logged in"});
  return;
}
req.user.encryptedPassword=undefined;
res.status(200).json(req.user);
});
//*****************************************************************************

//I should also add update here in case user wants to make changes to profile.
// GET All Profile listing- backend will need to use these
//was /api/signup but changed to /api/neighbors
router.get('/api/neighbors', (req, res, next) => {

  //returns all of our profiles.
  ProfileModel
  .find()
  .populate("eventsAttending")
  .exec(

    (err, profileList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(profileList);
  });
});

router.get('/api/neighbors/:myId', (req, res, next) => {

  //returns all of our profiles.
  ProfileModel
  .findById(req.params.myId)
  //to populate the actual items associated to id.
.populate("eventsAttending")
.exec(
    (err, specificProfile) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(specificProfile);
  });
});
module.exports = router;
