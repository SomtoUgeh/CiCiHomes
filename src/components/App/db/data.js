export const houseData = [
  {
    id: '2dferf34fwfemtgmotg',
    mainAddress: '23 Ikoyi st, Ikoyi Lagos',
    address: 'Ikeja',
    cost: '300,000',
    bathroom: 3,
    name: 'Skylight Apartments',
    shortDescription: 'This is a cool home',
    homeType: 'Apartment',
    totalRooms: 3,
    earliestMoveIn: '',
    availableLease: '2 Years',
    services: true,
    images: [
      'buildings-downtown-manhattan-nyc_925x-min.jpg',
      'dark-min.jpg',
      'dirk-sebregts-110695-unsplash-min.jpg',
      'jace-afsoon-267410-unsplash-min.jpg',
      'mateusz-majewski-659603-unsplash-min.jpg',
      'patrick-robert-doyle-1322314-unsplash-min.jpg'
    ],
    exteriorQualities: [
      'clean apartment',
      'Electrical and Mechanical maintenance',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Generator Maintenance',
      'Sewage Evacuation',
      'Security'
    ],
    interiorQualities: [
      'Good',
      'Painting',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Cleaning',
      'Electricity'
    ]
  },
  {
    id: '2dferf34fwfemtgmo23',
    name: 'MoonShot Apartments',
    address: '23 Ajah st, Ajah Lagos',
    cost: '500,000',
    bathroom: 5,
    shortDescription: 'This is a nice home',
    homeType: 'Flats',
    totalRooms: 5,
    earliestMoveIn: 'January 2019',
    availableLease: '4 Years',
    services: true,
    images: [
      'buildings-downtown-manhattan-nyc_925x-min.jpg',
      'dark-min.jpg',
      'dirk-sebregts-110695-unsplash-min.jpg',
      'jace-afsoon-267410-unsplash-min.jpg',
      'mateusz-majewski-659603-unsplash-min.jpg',
      'patrick-robert-doyle-1322314-unsplash-min.jpg'
    ],
    exteriorQualities: [
      'clean apartment',
      'Electrical and Mechanical maintenance',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Generator Maintenance',
      'Sewage Evacuation',
      'Security'
    ],
    interiorQualities: [
      'Good',
      'Painting',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Cleaning',
      'Electricity'
    ]
  },
  {
    id: '2dferf34fwfemtgmo12',
    name: 'Sparse Apartments',
    address: '23 mushin st, mushin Lagos',
    cost: '200,000',
    bathroom: 4,
    shortDescription: 'This is a beautiful home',
    homeType: 'Good',
    totalRooms: 4,
    earliestMoveIn: 'March 2019',
    availableLease: '5 Years',
    services: false,
    images: [
      'buildings-downtown-manhattan-nyc_925x-min.jpg',
      'dark-min.jpg',
      'dirk-sebregts-110695-unsplash-min.jpg',
      'jace-afsoon-267410-unsplash-min.jpg',
      'mateusz-majewski-659603-unsplash-min.jpg',
      'patrick-robert-doyle-1322314-unsplash-min.jpg'
    ],
    exteriorQualities: [
      'good apartment',
      'Electrical and Mechanical maintenance',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Generator Maintenance',
      'Sewage Evacuation',
      'Security'
    ],
    interiorQualities: [
      'Good',
      'Painting',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Cleaning',
      'Electricity'
    ]
  },
  {
    id: '2dferf34fwfemtgmo50',
    name: 'Gardens Apartments',
    address: '23 VI st, Victoria Island Lagos',
    cost: '600,000',
    bathroom: 6,
    shortDescription: 'This is a mad home',
    homeType: 'Luxury apartments',
    totalRooms: 4,
    earliestMoveIn: 'January 2019',
    availableLease: '4 Years',
    services: true,
    images: [
      'buildings-downtown-manhattan-nyc_925x-min.jpg',
      'dark-min.jpg',
      'dirk-sebregts-110695-unsplash-min.jpg',
      'jace-afsoon-267410-unsplash-min.jpg',
      'mateusz-majewski-659603-unsplash-min.jpg',
      'patrick-robert-doyle-1322314-unsplash-min.jpg'
    ],
    exteriorQualities: [
      'clean apartment',
      'Electrical and Mechanical maintenance',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Generator Maintenance',
      'Sewage Evacuation',
      'Security'
    ],
    interiorQualities: [
      'Good',
      'Painting',
      'Fire Safety Installation and maintenance',
      'Fumigation',
      'Cleaning',
      'Electricity'
    ]
  }
];

// Type Checking for houseData
// typeof id === String;
// typeof name === String;
// typeof shortDescription === String;
// typeof homeType === String;
// typeof totalRooms === Number;
// typeof earliestMoveIn === String;
// typeof availableLease === String;
// typeof services === Boolean;
// typeof images === Array;
// typeof exteriorQualities === Array;
// typeof interiorQualities === Array;

export const userData = [
  {
    name: 'Lily Peter',
    id: '235r4353653435tt',
    address: '23 Ikoyi St, Ikoyi',
    email: 'lily@gmail.com',
    phone: '08135110477',
    newUser: false,
    registeredUser: true,
    isSignedIn: false,
    houses: {
      0: '23r3fgrdgrybhdrgryrhsyhsg',
      1: 'egt356tgryh56e534getgegt',
      2: '23435ftyg465g34tg346g',
      3: '24r35g4fgeg4ergfte5tftg4eftge'
    }
  }
];

// Type Checking for userData
// typeof name === String;
// typeof id === String;
// typeof address === String;
// typeof email === String;
// typeof phone === String;
// typeof newUser === Boolean;
// typeof registeredUser === Boolean;
// typeof isSignedIn === Boolean;
// typeof houses === Object;
