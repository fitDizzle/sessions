const router = require('express').Router();

//clubs routes
router.get("/clubs", require('./clubsRoute.js'));
router.post("/clubs", require('./clubsRoute.js'));

// listings routes
router.get("/listings", require('./listingRoute.js'));
router.post("/listings", require('./listingRoute.js'));

//message routes
router.get("/messages", require('./messageRoute.js'));
router.post("/messages", require('./messageRoute.js'));

// user routes
router.get("/user", require('./userRoute.js'));
router.post("/user", require('./userRoute.js'));

module.exports = router;