const express = require("express");
const app = express();
const PORT = 5004;
const { router } = require("./routes");
const { logRequestDetails, handle404 } = require("./service");

/** Middleware*/
app.use(express.json());
app.use(logRequestDetails);
app.use("/api", router);
app.use(handle404);

app.listen(PORT, () => {
  console.log(`Express running in port ${PORT}`);
});
