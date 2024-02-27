const express = require("express");
const router = express.Router();
const {
  getExpensesByYearOrMonth,
  createNewUserExpenses,
} = require("../controllers/expenses");

/** get routes */
router.get("/:userId", getExpensesByYearOrMonth);

/** post routes */
router.post("/", createNewUserExpenses);

module.exports = router;
