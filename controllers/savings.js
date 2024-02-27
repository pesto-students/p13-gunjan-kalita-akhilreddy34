const mongoose = require("mongoose");
const Savings = require("../modals/savings");
const getSavingsByYearOrMonth = async (req, res) => {
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

    const userSavings = await Savings.find(filterCondition);
    return res.status(200).send(userSavings);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createNewUserSavings = async (req, res) => {
  try {
    const addData = req?.body;

    if (!addData?.userId || !addData?.amount || !addData?.saving_date)
      return res.status(400).send("please provide valid input");

    const newUserSavings = new Savings({
      ...addData,
      userId: new mongoose.Types.ObjectId(addData?.userId),
    });

    const createdUserSavings = await newUserSavings.save();

    return res.status(200).send(createdUserSavings);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getSavingsByYearOrMonth,
  createNewUserSavings,
};
