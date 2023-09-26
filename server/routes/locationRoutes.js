const express = require("express");
const { getLocations } = require("../controller/locationController");

const router = express.Router();

router.route("/").get(getLocations);

module.exports = router;
