const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  amount: {
    type: Number,
    required: true,
  },
  income_date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  assetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "assets",
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
});

module.exports = mongoose.model("income", incomeSchema);
