require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
/*FILES*/
const connectDB = require("../src/db/connect.db");
const userRouter = require("../src/routes/user.routes");
const taskRouter = require("../src/routes/task.routes");
const authUser = require("../src/middleware/auth.middleware");
/*MIDDLEWARE*/
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}
/*ROUTE*/
app.use("/api/user", userRouter);
app.use("/api/task", authUser, taskRouter);

/* server with mongo db connection , if  our mongoose connection failed then it will give us error  */
const PORT = process.env.PORT || 5000;
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();

module.exports = app;
