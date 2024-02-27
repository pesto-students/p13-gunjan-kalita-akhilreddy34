const express = require("express");
const router = express.Router();
const { getSavingsByYearOrMonth } = require("../controllers/savings");

/** get routes */
router.get("/:userId", getSavingsByYearOrMonth);

module.exports = router;
