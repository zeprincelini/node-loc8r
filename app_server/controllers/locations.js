/*home controller*/
module.exports.homeList = (req, res) => {
	res.render('locations-list', {title: 'Loc8r - find a place to work with wifi',
    pageHeader:{
        title: 'Loc8r',
        strapline: 'Find a place to work with wifi!'
    },
    locations: [{
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
     },{
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m'
     },{
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        distance: '250m'
     }],
     sidebar: `Looking for wifi and a seat? Loc8r helps you find places to work when out and about. 
                 Perhaps with coffee, cake or a pint? 
                 Let Loc8r help you find the place you're looking for.`
   });
  };

/*location info controller*/
module.exports.locationInfo = (req, res) => {
	res.render('locations-info', {title: 'Location info',
    pageHeader: 'Starcups',
    locations:{
        ratings: 3,
        address: '125 High Street, Reading, RG6 1PS'
    },
    opening: 'Opening hours',
    openingTimes: [{
        days: 'Monday - Friday',
        time: '7.00am - 7.00pm',
        closed: 'false'
       },
        {
         days: 'Saturday',
         time: '8.00am - 5.00pm',
         closed: 'false'  
        },{
        days: 'Sunday',
        closed: 'true'
        }
    ],
    facility:{
        title: 'Facilities',
        facilities: ['Hot drinks','Food', 'Premium wifi']
    },
    reviewsTitle: 'Customer reviews',
    reviews: [{
            name: 'Simon Holmes',
            review: "What a great place. I can't say enough good things about.",
            date: '22 June 2020',
            ratings: 2
        },{
            name: 'Charlie Chaplin',
            review: "It was okay. Coffee wasn't great, but the wifi was fast.",
            date: '2 February 2020',
            ratings: 3
        }
       ],
     aside: {
         textOne: "Simon's cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
         textTwo: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
     }
    });
};

/*add review page*/
module.exports.addReview = (req, res) => {
	res.render('locations-review-form', {title: 'Add review'});
};