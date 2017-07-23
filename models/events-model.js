const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema({
  eventName: {type: String, required: true},
  eventLocation: {type: String, required: true},
  eventDate: {type: Date, required: true},
  eventTime: {type: String, required: true},
  zipcode: {type: Number,required: [true, 'Zipcode is required']},
  photoUrl: {type: String, default: '/images/avatar-1295430_1280.png'},
  aboutEvent: {type: String,},
  peopleAttending: {type: [Schema.Types.ObjectID]},
    //ref must be here in order for the get to get all camel Owners to work.
    //you need ref to use populate()  //ref is the string name of the model that the ID refers to, so this one refers to UserModel hence User.
  ref: 'Profile'
},//closes profileShcema
{
  //2nd arg: additional settings (optional)
  timestamps: true
  //timestamps creates 2 additional fields: createdAt and updatedAt, this second one is updated when log in.
});

const EventsModel = mongoose.model('Event', EventSchema);

module.exports = EventsModel;
