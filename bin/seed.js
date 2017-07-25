const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

// We have to connect the DB again here
// because seed.js is SEPARATE from app.js.

const Events = require('../models/events-model.js');
const eventsArray = [
  {
    eventName: 'Food Truck Monday',
    eventLocation: 'ArtsPark',
    eventDate: ' 07-31-2017',
    photoUrl: 'public/images/hot-dog-van-1293505_640.jpg',
    eventTime: '6-9 PM',
    zipcode: '30020',
    aboutEvent: 'Stop by the ArtsPark at Young Circle on Monday night. Bring the family. Enjoy the fresh air and have a picnic. Pick and choose from 20+ different trucks. Visit http://burgerbeast.com/arts-park/ for list of trucks.'
    peopleAttending: [],
  },
  {
    eventName: 'Movie Night: Galaxy Quest',
    eventLocation: 'Young Circle (Amphitheatre)',
    eventDate: '7-28-17',
    photoUrl: 'public/images/demonstration-64151_640.jpg',
    eventTime: '8-10 PM',
    zipcode: '30020',
    aboutEvent: 'See a free movie every Friday night, this weeks showing is Galaxy Quest. Lawn seating. Bring a blanket or beach chair'
  },
  {
    eventName: 'Full Moon Drum Circle',
    eventLocation: 'Young Circle',
    eventDate: '7-31-17',
    photoUrl: 'public/images/pedro-lastra-162617.jpg',
    eventTime: '8-10 PM',
    zipcode: '30020',
    aboutEvent: 'Bring a drum or percussion instrument to the ArtsPark and participate in a guided drum circle. All skill levels welcome. Meet at the Palm Court (West Side).'
  },
  {
    eventName: 'Hollywood Beach Cleanup',
    eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
    eventDate: '8-6-17',
    photoUrl: 'public/images/plastic-bottles-388679_640.jpg',
    eventTime: '7-11 AM',
    zipcode: '30020',
    aboutEvent: 'On the second Saturday of the every month from 7:00 a.m. to 11:00 a.m. volunteers meet at Charnow Park to collect litter and cigarette butts from the beach. Volunteers must be at least 8 years of age to participate and children must be accompanied by an adult. Please dress appropriately and wear sunscreen.'
  },
  {
    eventName: 'Dream Car Classic',
    eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
    eventDate: '8-6-17',
    photoUrl: 'public/images/bmw-158703_640.png',
    eventTime: '10-3 PM',
    zipcode: '30020',
    aboutEvent: 'The Downtown Hollywood Dream Car Classic features dozens of classic cars, trucks and other vehicles of interest on display the first Sunday of every month. Attendance is FREE.'
  },
  {
    eventName: 'Second Saturday Farmers Market',
    eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
    eventDate: '7-29-17',
    photoUrl: 'public/images/farmers-market-1329008_640.jpg',
    eventTime: '9-3 PM',
    zipcode: '30020',
    aboutEvent: 'Find beautiful handmade gifts and local organic fruits and vegetables.'
  },
  {
    eventName: 'Shakespeare in the Park',
    eventLocation: 'Young Circle',
    eventDate: '7-29-17',
    photoUrl: 'public/images/romeo-2498582_640.png',
    eventTime: '8:00 - 10:00 PM',
    zipcode: '30020',
    aboutEvent: 'Shakespeare Miami presents much to do about nothing, one of Shakespears best comedies ',
  },
  {
    eventName: 'Second Saturday Artisan Market',
    eventLocation: 'Mooneys Grove Park',
    eventDate: '7-29-17',
    photoUrl: 'public/images/shopping-cart-2291274_640.jpg',
    eventTime: '9-3 PM',
    zipcode: '30020',
    aboutEvent: 'Find beautiful handmade gifts and local organic fruits and vegetables.'
  },
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
