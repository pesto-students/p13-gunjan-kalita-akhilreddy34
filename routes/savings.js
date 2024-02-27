const express = require("express");
const router = express.Router();
const {
  getSavingsByYearOrMonth,
  createNewUserSavings,
} = require("../controllers/savings");

/** get routes */
router.get("/:userId", getSavingsByYearOrMonth);

/** post routes */
router.post("/", createNewUserSavings);

module.exports = router;
