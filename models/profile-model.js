const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const profileSchema = new mongoose.Schema({
  username: {
    type: String
  },
  encryptedPassword: {
    type: String
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  maritalstatus: {
    type: String,
    required: [true, 'Marital status is required']
  },
  kids: {
    type: String,
    required: [true, 'Marital status is required']
  },
  zipcode: {
    type: Number,
    required: [true, 'Zipcode is required']
  },
  newtoneigborhood: {
    type: String,
  },
  photoUrl: {
    type: String, default: '/images/love-560783_640.jpg'
  },
  tellusmore: {
    type: String,
  },
  //we are going to refer to the owner of the room below, since rooms
  // will be thier own collection and owners will be own collection.
  //but the collections should refer to eachother.
  // owner: {type: Schema.Types.ObjectId}



},
{
  //2nd arg: additional settings (optional)
  timestamps: true
  //timestamps creates 2 additional fields: createdAt and updatedAt, this second one is updated when log in.
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
