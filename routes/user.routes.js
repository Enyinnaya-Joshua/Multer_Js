const express = require("express");
const { getUser, createUser } = require("../controller/user.controller");
const uploader = require("../db/multer");

const router = express.Router();

router.route("/users").get(getUser);
router.route("/register").post(uploader, createUser);

module.exports = router;
