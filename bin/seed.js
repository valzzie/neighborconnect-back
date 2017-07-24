const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

// We have to connect the DB again here
// because seed.js is SEPARATE from app.js.

const Events = require('../models/events-model.js');
const eventsArray = [
  {
eventName: 'Shakespeare in the Park',
eventLocation: 'Young Circle',
eventDate: 07-29-2017,
photoUrl: 'public/images/romeo-2498582_640.png',
eventTime: 8-10 PM,
zipcode: 30020,
aboutEvent: "Shakespeare Miami presents The Merchant of Venice. Admission FREE. Lawn seating. Bring a beach chair or blanket. Shakespearemiami.com",
      // peopleAttending: []
  },
  {
    eventName: 'Food Truck Monday',
    eventLocation: 'ArtsPark',
    eventDate: 07-31-2017,
    photoUrl: 'public/images/hot-dog-van-1293505_640.jpg',
    eventTime: 6-9 PM,
    zipcode: 30020,
    aboutEvent: "Stop by the ArtsPark at Young Circle on Monday night. Bring the family. Enjoy the fresh air and have a picnic. Pick and choose from 20+ different trucks. Visit http://burgerbeast.com/arts-park/ for list of trucks.",

  },
  {
    eventName: 'Movie Night: Galaxy Quest',
    eventLocation: 'Young Circle (Amphitheatre)',
    eventDate: 07-28-2017,
    photoUrl: 'public/images/demonstration-64151_640.jpg',
    eventTime: 8-10 PM,
    zipcode: 30020,
    aboutEvent: "See a free movie every Friday night, this weeks showing is Galaxy Quest. Lawn seating. Bring a blanket or beach chair.",

},
{
eventName: 'Full Moon Drum Circle',
eventLocation: 'Young Circle',
eventDate: 07-31-2017,
photoUrl: 'public/images/pedro-lastra-162617.jpg',
eventTime: 8-10 PM,
zipcode: 30020,
aboutEvent: "Bring a drum or percussion instrument to the ArtsPark and participate in a guided drum circle. All skill levels welcome. Meet at the Palm Court (West Side).",

},
{eventName: 'Hollywood Beach CleanUp',
eventLocation: 'Charnow Park between Garfield Street and Connecticut Street',
eventDate: 08-12-2017,
photoUrl: 'public/images/plastic-bottles-388679_640.jpg',
eventTime: 7-11 PM,
zipcode: 30020,
aboutEvent: "On the second Saturday of the every month from 7:00 a.m. to 11:00 a.m. volunteers meet at Charnow Park to collect litter and cigarette butts from the beach. Volunteers must be at least 8 years of age to participate and children must be accompanied by an adult. Please dress appropriately and wear sunscreen.",

},
{eventName: 'Dream Car Classic',
eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
eventDate: 08-06-2017,
photoUrl: 'public/images/bmw-158703_640.png',
eventTime: 10-3 PM,
zipcode: 30020,
aboutEvent: "The Downtown Hollywood Dream Car Classic features dozens of classic cars, trucks and other vehicles of interest on display the first Sunday of every month. Attendance is FREE.",

},
{eventName: 'Second Saturdays Farmers Market ',
eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
eventDate: 07-29-2017,
photoUrl: 'public/images/farmers-market-1329008_640.jpg',
eventTime: 9 AM - 3 PM,
zipcode: 30020,
aboutEvent: "Find beautiful handmade gifts and local organic fruits and vegetables",
},
{eventName: 'Second Saturdays Artisan Market ',
eventLocation: 'Mooneys Grove Park',
eventDate: 07-29-2017,
photoUrl: 'public/images/shopping-cart-2291274_640.jpg',
eventTime: 9 AM - 3 PM,
zipcode: 93235,
aboutEvent: "Find beautiful handmade gifts and foods",
}
];
Event.create(
  eventsArray,            // 1st argument -> array of product info objects

  (err, eventResults) => {   // 2nd argument -> callback!
    if (err) {
      console.log('OMG! Database error.');
      return;
    }

    eventResults.forEach((oneEvent) => {
      console.log('New Event! ' + oneEvent.eventName);
    });
  }
);
