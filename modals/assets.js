const mongoose = require("mongoose");
const { enumForAssestType } = require("../utils/constants");

const assetsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  assetType: {
    type: String,
    enum: enumForAssestType,
    validate: {
      validator: function (value) {
        return this.schema.path("assetType").enumValues.includes(value);
      },
      message:
        "Invalid status value. Must be one of:Equity, Fixed Income, Alternatives",
    },
  },
  assetName: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
});

module.exports = mongoose.model("assets", assetsSchema);
