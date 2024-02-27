const mongoose = require("mongoose");
const Income = require("../modals/income");
const getIncomeByYearOrMonth = async (req, res) => {
  try {
    const { userId } = req.params;
    const { filterBy, year, month } = req.query;

    if (!userId) return res.status(400).send("userId is invalid");

    const filterCondition = { userId: new mongoose.Types.ObjectId(userId) };

    if (filterBy) {
      if ((filterBy === "year" || filterBy === "month") && +year) {
        filterCondition.$expr = { $eq: [{ $year: "$income_date" }, +year] };
      }

      if (filterBy === "month" && +month) {
        filterCondition.$expr = {
          $and: [
            filterCondition.$expr,
            { $eq: [{ $month: "$income_date" }, +month] },
          ],
        };
      }
    }

    const userIncomes = await Income.find(filterCondition);

    return res.status(200).send(userIncomes);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createNewIncome = async (req, res) => {
  try {
    const { assetId, userId, amount, income_date } = req?.body;
    if (!assetId || !userId || !amount || !income_date)
      return res.status(400).send("Input is invalid");

    const newIncome = new Income({
      assetId: new mongoose.Types.ObjectId(assetId),
      userId: new mongoose.Types.ObjectId(userId),
      amount,
      income_date,
    });

    await newIncome.save();
    return res.status(200).send(true);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  getIncomeByYearOrMonth,
  createNewIncome,
};
