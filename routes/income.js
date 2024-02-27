const express = require("express");
const router = express.Router();
const { getIncomeByYearOrMonth } = require("../controllers/income");

/** get routes */
router.get("/:userId", getIncomeByYearOrMonth);

module.exports = router;
