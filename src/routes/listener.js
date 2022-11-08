const express = require("express");

const { stake, unStake } = require("../controllers/events");

const router = express.Router();

router.get("/stake", stake);
router.get("/unstake", unStake);

module.exports = router;
