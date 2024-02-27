const DB_CONNECTION = require("../config/DB");

const createNewUser = async (req, res) => {
  try {
    const addData = req?.body;

    if (!addData?.name || !addData?.email)
      return res.status(400).send("please provide valid input");
    const query = `INSERT INTO users (name,email)  VALUES ('${addData.name}', '${addData.email}')`;

    DB_CONNECTION.query(query, (error, result) => {
      if (error) throw error;
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const detailed_income_expenses = async (req, res) => {
  try {
    const { userId } = req.params;
    const { filterBy, year, month } = req.query;

    if (!userId) return res.status(400).send("userId is invalid");

    /** if filters are not present then send details for all years and months */
    let query = `SELECT YEAR(I.income_date) AS year,MONTH(I.income_date) AS month,SUM(I.amount) AS total_income,SUM(E.amount) AS total_expenses,SUM(I.amount) - COALESCE(SUM(E.amount), 0) AS savings FROM income AS I LEFT JOIN expenses AS E ON I.userId = E.userId AND YEAR(I.income_date) = YEAR(E.expense_date) AND MONTH(I.income_date) = MONTH(E.expense_date) WHERE I.userId = ${+userId} GROUP BY YEAR(I.income_date), MONTH(I.income_date)`;
    if (filterBy === "year" && year) {
      query = query + ` HAVING year = ${+year}`;
    } else if (filterBy === "month" && year && month) {
      query = query + ` HAVING year = ${+year}  AND month = ${+month};`;
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
  createNewUser,
  detailed_income_expenses,
};
