const router = require("express").Router();
const userController = require("../controllers/userController.js");

router.route("/user").post(userController.createUser);
router.route("/user").get(userController.getUserByCredentials)

module.exports = router;