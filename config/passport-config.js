//set this up once i know if we are using passport-config to log users in or not.
//we are configuring passport in this file to avoid making app.js to big of a file.
// console.log('***********************');//will see in terminal if i connected it correctly.  Do at beginning.
const passport= require('passport');
const bcrypt= require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const ProfileModel= require('../models/profile-model.js');
//serializeUser: controls what goes int the bowl aka: session.
//(save only the user's db ID in the bowl)- this happens ONLY when you log in
passport.serializeUser((userFromDb,next)=> {
  //null refers to no error isnce we are handlling errors is another spot.
  next(null,userFromDb._id);
});


//deserializeUser: controls what you get when you look in the bowl, aka session.
//(use the ID in the bowl to retrieve the users info)- happens every time you visit the site after logging in.
passport.deserializeUser((idFromBowl,next)=> {
  ProfileModel.findById(
    idFromBowl,
    (err,userFromDb) => {
      if (err) {
        next(err);
        return;
      }
      next(null,userFromDb);
    });
});

//STRATEGIES below aka: different ways we can log into our app******************diff ways we can log into our app
//Strategy 1:  setup passport-local(logging in with a username and a password from a form, the OG way).

passport.use(new LocalStrategy(
  { //1st arg-> settings object
    usernameField: 'loginEmail',
    passwordField: 'loginPassword'
  },
  (theEmail,thePassword,next) => {
     //2nd arg: callback that is called when a user tries to login

    //Logic to consider: Is ther already an account with the provided username in the db?
    ProfileModel.findOne(
      {email:theEmail},
      (err,userFromDb) => {
        // console.log("loginEmail" + theEmail);
        console.log("user********************" );
        if(err) {
        next(err);
        return;
      }
      // console.log("loginnnnnnnnEmai" + loginEmail);

      //if the username doesn't exist in the db then the userFromDB will be empty and login will fail.
      if(userFromDb === null){
        //in passport, if you call next with false in 2nd position that means login failed.
        next(null,false, { message: 'Incorrect email' });
        return;
      }
      //If username does exist is the password correct?
      //checks the passord given to password saved if doesn't match it fails.
      if(bcrypt.compareSync(thePassword, userFromDb.encryptedPassword) === false){
        next(null,false, { message: 'Incorrect password' });
        return;
      }
      // console.log('hi');
      //if the new password and stored password match then they can login.s
      next(null,userFromDb);
    }
    );
  }
));
//everything above will always need re: serialized and deserialized users
