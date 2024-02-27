const mongoose = require("mongoose");
const Expenses = require("../modals/expenses");

const getExpensesByYearOrMonth = async (req, res) => {
  try {
    const { userId } = req.params;
    const { filterBy, year, month } = req.query;

    if (!userId) return res.status(400).send("userId is invalid");

    const filterCondition = { userId: new mongoose.Types.ObjectId(userId) };

    if (filterBy) {
      if ((filterBy === "year" || filterBy === "month") && +year) {
        filterCondition.$expr = { $eq: [{ $year: "$expense_date" }, +year] };
      }

      if (filterBy === "month" && +month) {
        filterCondition.$expr = {
          $and: [
            filterCondition.$expr,
            { $eq: [{ $month: "$expense_date" }, +month] },
          ],
        };
      }
    }

    const userExpenses = await Expenses.find(filterCondition);
    return res.status(200).send(userExpenses);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createNewUserExpenses = async (req, res) => {
  try {
    const addData = req?.body;

    if (!addData?.userId || !addData?.amount || !addData?.expense_date)
      return res.status(400).send("please provide valid input");

    const newUserExpenses = new Expenses({
      ...addData,
      userId: new mongoose.Types.ObjectId(addData?.userId),
    });

    const createdUserExpenses = await newUserExpenses.save();

    return res.status(200).send(createdUserExpenses);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getExpensesByYearOrMonth,
  createNewUserExpenses,
};
