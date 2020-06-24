/*home controller*/
module.exports.homeList = (req, res) => {
	res.render('locations-list', {title: 'Homepage'});
};

/*location info controller*/
module.exports.locationInfo = (req, res) => {
	res.render('locations-info', {title: 'Location info'});
};

/*add review page*/
module.exports.addReview = (req, res) => {
	res.render('locations-review-form', {title: 'Add review'});
};