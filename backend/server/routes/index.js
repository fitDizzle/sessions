const router = require('express').Router();

// router.get("/listings", require("./listingRoute.js"));
// router.get('/listings/:listing_id', require("./listingRoute.js"));
// router.get("/listings/:listing_id/listing", require("./listingRoute.js"));
// router.get("/listings/:listing_id/related", require("./relatedRoute.js"));

router.get("/clubs", require('./clubsRoute.js'));

module.exports = router;