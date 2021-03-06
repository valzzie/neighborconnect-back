const mongoose = require('mongoose');
const Events = require('../models/events-model.js');
const Profile = require('../models/profile-model.js');

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

// We have to connect the DB again here
// because seed.js is SEPARATE from app.js.

const profilesArray =[
  {
  fullName: "Leo",
  email: "leo@gmail.com",
  encryptedPassword: "leoleo",
  zipcode: "30020",
  photoUrl: "/images/wonho-sung-91804.jpg",
  tellusmore: "I am originally from New York, been living in South Florida for 5 years now.  I love finding hole in the wall places and listening to live music."
},
{
fullName: "Romeo and Juliet",
email: "romeo@gmail.com",
encryptedPassword: "romeoromeo",
zipcode: "30020",
photoUrl: "/images/matheus-f.jpg",
tellusmore: "We are from Minnesota and have recently moved to Florida for my job.   We have 2 doggies and are always looking for new dog friendly places."
},
{
fullName: "Norma and Richard",
email: "norma@gmail.com",
encryptedPassword: "normanorma",
zipcode: "30020",
photoUrl: "/images/toa-heftiba-295065.jpg",
tellusmore: "We have lived in Florida our whole lives.  If anyone is new to the area and sees us around, don't be shy, we would love to share our favorite South Florida spots with you."
},
{
fullName: "Amanda and Jarome",
email: "amanda@gmail.com",
encryptedPassword: "amandaamanda",
zipcode: "30020",
photoUrl: "/images/priscilla-du-preez-105714.jpg",
tellusmore: "We are both born and raised in Florida but have recently moved from Tampa to Miami and are always looking for things to do in the area."
},
{
fullName: "Eric and Mandy",
email: "eric@gmail.com",
encryptedPassword: "ericeric",
zipcode: "30020",
photoUrl: "/images/freestocks-org-227646.jpg",
tellusmore: "We are originally from Edmonton, Canada but have been living in Florida for the past year.  We own a small restaurant in Dania Beach and have a 1 year old and a cat."
},
{
fullName: "Victoria and Roman",
email: "victoria@gmail.com",
encryptedPassword: "victoriavictoria",
zipcode: "30020",
photoUrl: "/images/william-stitt-140890.jpg",
tellusmore: "We have lived in the area our whole lives.  We love going to the beach and doing road trips across Florida.  We are both real estate agents and have 2 gorgeous children."
},
{
fullName: "Chrissy and John",
email: "chrissy@gmail.com",
encryptedPassword: "chrissychrissy",
zipcode: "30020",
photoUrl: "/images/scott-webb-252718.jpg",
tellusmore: "I teach dance and will be graduating from Fresno State soon.  I love camping and volunteering and plan to travel across the United States next year."
},
];

const eventsArray = [
  {
    eventName: 'Food Truck Monday',
    eventLocation: 'ArtsPark',
    eventDate: ' 08-07-2017',
    photoUrl: '/images/hot-dog-van-1293505_640.jpg',
    eventTime: '6-9 PM',
    zipcode: '30020',
    aboutEvent: 'Stop by the ArtsPark at Young Circle on Monday night. Bring the family. Enjoy the fresh air and have a picnic. Pick and choose from 20+ different trucks. Visit http://burgerbeast.com/arts-park/ for list of trucks.'

  },
  {
    eventName: 'Movie Night: Galaxy Quest',
    eventLocation: 'Young Circle (Amphitheatre)',
    eventDate: '08-04-17',
    photoUrl: '/images/demonstration-64151_640.jpg',
    eventTime: '8-10 PM',
    zipcode: '30020',
    aboutEvent: 'See a free movie every Friday night, this weeks showing is Galaxy Quest. Lawn seating. Bring a blanket or beach chair'
  },
  {
    eventName: 'Full Moon Drum Circle',
    eventLocation: 'Young Circle',
    eventDate: '08-03-17',
    photoUrl: '/images/pedro-lastra-162617.jpg',
    eventTime: '8-10 PM',
    zipcode: '30020',
    aboutEvent: 'Bring a drum or percussion instrument to the ArtsPark and participate in a guided drum circle. All skill levels welcome. Meet at the Palm Court (West Side).'
  },
  {
    eventName: 'Hollywood Beach Cleanup',
    eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
    eventDate: '8-6-17',
    photoUrl: '/images/plastic-bottles-388679_640.jpg',
    eventTime: '7-11 AM',
    zipcode: '30020',
    aboutEvent: 'On the second Saturday of the every month from 7:00 a.m. to 11:00 a.m. volunteers meet at Charnow Park to collect litter and cigarette butts from the beach.  Please dress appropriately and wear sunscreen.'
  },
  {
    eventName: 'Dream Car Classic',
    eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
    eventDate: '8-6-17',
    photoUrl: '/images/bmw-158703_640.png',
    eventTime: '10-3 PM',
    zipcode: '30020',
    aboutEvent: 'The Downtown Hollywood Dream Car Classic features dozens of classic cars, trucks and other vehicles of interest on display the first Sunday of every month. Attendance is FREE.'
  },
  {
    eventName: 'Second Saturday Farmers Market',
    eventLocation: 'Hollywood Boulevard between 19th & 20th Avenue',
    eventDate: '08-12-17',
    photoUrl: '/images/farmers-market-1329008_640.jpg',
    eventTime: '9-3 PM',
    zipcode: '30020',
    aboutEvent: 'Find beautiful handmade gifts and local organic fruits and vegetables.'
  },
  {
    eventName: 'Shakespeare in the Park',
    eventLocation: 'Young Circle',
    eventDate: '08-05-17',
    photoUrl: '/images/ballet-at-sunset-2450506_640.jpg',
    eventTime: '8:00 - 10:00 PM',
    zipcode: '30020',
    aboutEvent: 'Shakespeare Miami presents much to do about nothing, one of Shakespears best comedies.  Bring a blanket or a chair and your family and friends to this event. ',
  },

];

Profile.create(
  profilesArray,            // 1st argument -> array of product info objects

  (err, profileResults) => {   // 2nd argument -> callback!
    if (err) {
      console.log('OMG! Profile database error.', err);
      return;
    }
    const Leo= profileResults[0];
    const RomeoandJuliet= profileResults[1];
    const NormaandRickard= profileResults[2];
    const AmandaandJarome= profileResults[3];
    const EricandMandy= profileResults[4];
    const VictoriaandRoman= profileResults[5];
    const ChrissyandJohn= profileResults[6];

    const FoodTruckMonday= eventsArray[0];
    const MovieNight= eventsArray[1];
    const DrumCircle= eventsArray[2];
    const BeachCleanup= eventsArray[3];
    const CarShow= eventsArray[4];
    const FarmersMarket= eventsArray[5];
    const Shakespeare= eventsArray[6];

    FoodTruckMonday.peopleAttending=[Leo.id,RomeoandJuliet.id,NormaandRickard.id];
    MovieNight.peopleAttending= [AmandaandJarome.id,VictoriaandRoman.id,ChrissyandJohn.id];
    DrumCircle.peopleAttending= [AmandaandJarome.id,EricandMandy.id,VictoriaandRoman.id];
    BeachCleanup.peopleAttending= [Leo.id,RomeoandJuliet.id,NormaandRickard.id];
    CarShow.peopleAttending= [ChrissyandJohn.id, VictoriaandRoman.id];
    FarmersMarket.peopleAttending= [Leo.id,RomeoandJuliet.id,NormaandRickard.id,EricandMandy.id, ChrissyandJohn.id];
    Shakespeare.peopleAttending= [RomeoandJuliet.id,AmandaandJarome.id,VictoriaandRoman.id,EricandMandy.id];

    profileResults.forEach((oneProfile) => {
      console.log('New Profile! ' + oneProfile.fullName);
    });

    Events.create(
      eventsArray,            // 1st argument -> array of product info objects

      (err, eventResults) => {   // 2nd argument -> callback!
        if (err) {
          console.log('OMG! Event database error.', err);
          return;
        }

        eventResults.forEach((oneEvent) => {
          console.log('New Event! ' + oneEvent.eventName);
        });
      }

    );

  }


);
