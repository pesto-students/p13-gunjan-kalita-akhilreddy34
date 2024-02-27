const { default: mongoose } = require("mongoose");
const { MONGOOSE_URI } = require("../utils/constants");
mongoose
  .connect(MONGOOSE_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
