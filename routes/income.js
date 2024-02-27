const express = require("express");
const router = express.Router();

const {
  getIncomeByYearOrMonth,
  createNewIncome,
} = require("../controllers/income");

/** get routes */
router.get("/:userId", getIncomeByYearOrMonth);

/** post routes */
router.post("/", createNewIncome);

module.exports = router;
