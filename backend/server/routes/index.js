const router = require('express').Router();

router.get("/listings", require("./listingRoute.js"));
router.get('/listings/:listing_id', require("./listingRoute.js"));
router.get("/listings/:listing_id/listing", require("./listingRoute.js"));
router.get("/listings/:listing_id/related", require("./relatedRoute.js"));

module.exports = router;