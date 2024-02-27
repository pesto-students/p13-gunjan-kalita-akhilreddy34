const express = require("express");
const app = express();
const { PORT } = require("./utils/constants");
const mongoose = require("./config/DB");
const assestRouter = require("./routes/assests");
const userRouter = require("./routes/user");
const incomeRoutes = require("./routes/income");
const savingsRouter = require("./routes/savings");
const expenseRouter = require("./routes/expenses");

app.use(express.json());
app.use("/assets", assestRouter);
app.use("/user", userRouter);
app.use("/income", incomeRoutes);
app.use("/savings", savingsRouter);
app.use("/expenses", expenseRouter);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
