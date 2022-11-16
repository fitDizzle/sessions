const router = require("express").Router();
const listingsController = require("../controllers/listingsController.js");

router.route("/listings").get(listingsController.getAllListings);
router.route("/listings").post(listingsController.createNewListing);
router.route("/listings/:listing_id").get(listingsController.getAllListings);

module.exports = router;