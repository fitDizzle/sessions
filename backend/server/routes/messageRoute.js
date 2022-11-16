const router = require("express").Router();
const messagesController = require("../controllers/messagesController.js");

router.route("/messages").post(messagesController.createNewMessage);
router.route("/messages/:user_id").get(messagesController.getMessagesByUser);
router.route("/messages/:listing_id").get(messagesController.getMessagesByListing);

module.exports = router;