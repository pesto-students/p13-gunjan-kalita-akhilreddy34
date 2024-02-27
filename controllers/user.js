const mongoose = require("mongoose");
const User = require("../modals/user");
const Income = require("../modals/income");

const createNewUser = async (req, res) => {
  try {
    const addData = req?.body;

    if (!addData?.name || !addData?.email)
      return res.status(400).send("please provide valid input");

    const newUser = new User({
      name: addData?.name,
      email: addData?.email,
    });

    const createdUser = await newUser.save();

    return res.status(200).send(createdUser);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const detailed_income_expenses = async (req, res) => {
  try {
    const { userId } = req.params;
    const { filterBy, year, month } = req.query;

    if (!userId) return res.status(400).send("userId is invalid");
    // Step 1: Match Stage
    let matchStage = {
      $match: { userId: new mongoose.Types.ObjectId(userId) },
    };

    // Optional filter by year and month
    if (filterBy === "year" && +year) {
      matchStage["$match"]["$expr"] = {
        $eq: [{ $year: "$income_date" }, +year],
      };
    } else if (filterBy === "month" && +year && +month) {
      matchStage["$match"]["$expr"] = {
        $and: [
          { $eq: [{ $year: "$income_date" }, +year] },
          { $eq: [{ $month: "$income_date" }, +month] },
        ],
      };
    }

    // Step 2: Lookup Stage
    let lookupStage = {
      $lookup: {
        from: "expenses",
        let: { userId: "$userId", incomeDate: "$income_date" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$userId", "$$userId"] },
                  {
                    $eq: [
                      { $year: "$expense_date" },
                      { $year: "$$incomeDate" },
                    ],
                  },
                  {
                    $eq: [
                      { $month: "$expense_date" },
                      { $month: "$$incomeDate" },
                    ],
                  },
                ],
              },
            },
          },
          {
            $group: {
              _id: null,
              total_expenses: { $sum: "$amount" },
            },
          },
        ],
        as: "expenses",
      },
    };

    // Step 3: Project Stage
    let projectStage = {
      $project: {
        _id: 0,
        year: { $year: "$income_date" },
        month: { $month: "$income_date" },
        income: { $sum: "$amount" },
        expenses: {
          $ifNull: [{ $arrayElemAt: ["$expenses.total_expenses", 0] }, 0],
        }, // Fetch the total_expenses from the lookup result
        savings: {
          $subtract: [
            { $sum: "$amount" },
            { $ifNull: [{ $arrayElemAt: ["$expenses.total_expenses", 0] }, 0] },
          ],
        },
      },
    };

    // Now, perform aggregation
    const results = await Income.aggregate([
      matchStage,
      lookupStage,
      projectStage,
    ]);

    return res.status(200).send(results);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  createNewUser,
  detailed_income_expenses,
};
