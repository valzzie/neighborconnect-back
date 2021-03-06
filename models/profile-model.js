const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = new Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  encryptedPassword: {type: String, required: true},
  zipcode: {type: String,required: true},
  photoUrl: {type: String, default: '/assets/images/avatar-1295430_1280.png'},
  tellusmore: {type: String},

// you need ref to use populate()
//ref is the string name of the model that the ID refers to, so this one refers to EventsModel hence Events.
  eventsAttending: [ {type: Schema.Types.ObjectId,ref: 'Events'} ]
  },

//closes profileSchema
{
  //2nd arg: additional settings (optional)
  timestamps: true
  //timestamps creates 2 additional fields: createdAt and updatedAt, this second one is updated when log in.
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
