const express = require("express");
const app = express();
const DB_CONNECTION = require("./config/DB");
const assetsRouter = require("./routes/assests");
const userRouter = require("./routes/user");
const incomeRouter = require("./routes/income");
const savingsRouter = require("./routes/savings");
const expenseRouter = require("./routes/expenses");

/** middlewares */
app.use(express.json());
app.use("/assets", assetsRouter);
app.use("/users", userRouter);
app.use("/income", incomeRouter);
app.use("/savings", savingsRouter);
app.use("/expenses", expenseRouter);

const PORT = 5009;

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
