const router = require("express").Router();
const clubsController = require("../controllers/clubsController.js");

router.route("/clubs").get(clubsController.getAllClubs);

module.exports = router;