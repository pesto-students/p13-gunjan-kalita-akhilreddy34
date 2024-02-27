const express = require("express");
const router = express.Router();

const {
  createNewUser,
  detailed_income_expenses,
} = require("../controllers/user");

/** post routes */
router.post("/", createNewUser);

/**  get routes */
router.get("/detailedIncomeExpenseReport/:userId", detailed_income_expenses);

module.exports = router;
