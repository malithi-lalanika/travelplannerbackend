const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));
//router.use("/schedule", require("./schedule"));
router.use("/apiuser", require("./api"));

module.exports = router;