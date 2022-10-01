const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllUser).post(controllers.createUser);
router.route("/checkuser").post(controllers.checkLogin);
router.route("/upload").post(controllers.upload).post(controllers.addImage);

module.exports = router;