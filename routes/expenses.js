const express = require("express");
const router = express.Router();
const { getExpensesByYearOrMonth } = require("../controllers/expenses");

router.get("/:userId", getExpensesByYearOrMonth);

module.exports = router;
