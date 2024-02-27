const DB_CONNECTION = require("../config/DB");

const getExpensesByYearOrMonth = (req, res) => {
  try {
    const { userId } = req.params;
    const { filterBy, year, month } = req.query;

    if (!userId) return res.status(400).send("userId is invalid");

    let query = `select * from expenses where userId=${+userId}`;

    if (filterBy) {
      let filter = ``;
      if ((filterBy === "year" || filterBy === "month") && +year)
        filter = filter + ` AND YEAR(expense_date) = ${+year}`;
      if (filterBy === "month" && +month)
        filter = filter + ` AND MONTH(expense_date) =${+month}`;
      query = query + filter;
    }

    DB_CONNECTION.query(query, (error, result) => {
      if (error) return res.status(500).send(error);
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  getExpensesByYearOrMonth,
};
