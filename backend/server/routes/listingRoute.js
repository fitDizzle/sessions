const router = require("express").Router();
const listingsController = require("../controllers/listingsController.js");

router.route("/listings").post(listingsController.createNewListing);
router.route("/listings").get(listingsController.getAllListings);

module.exports = router;