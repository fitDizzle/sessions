const router = require("express").Router();
const productController = require("../controllers/listingController.js");

router.route("/listings/:listing_id/").get(listingController.getListingById);

module.exports = router;