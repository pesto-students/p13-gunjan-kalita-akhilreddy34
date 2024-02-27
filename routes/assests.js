const express = require("express");
const router = express.Router();
const {
  getAllAssetsOfSingleUser,
  editAsset,
  deleteAsset,
  createNewAsset,
} = require("../controllers/assets");

/** get request */
router.get("/:id", getAllAssetsOfSingleUser);

/** put routes */
router.put("/:assetId", editAsset);

/** delete routes */
router.delete("/:assetId", deleteAsset);

/** post request */
router.post("/", createNewAsset);

module.exports = router;
