const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { UserRouter } = require("./routes/user.route");
const { BookRouter } = require("./routes/Book.route");
const { Authenticate } = require("./middleware/Authenticate");
const { UserBookedRouter } = require("./routes/Userbooked.route");


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome home ");
});


app.use(UserRouter);
app.use(BookRouter)
app.use(Authenticate)
app.use(UserBookedRouter)


app.listen(8000, async (req, res) => {
  try {
    await connection;
    console.log("connected to database");
  } catch (err) {
    console.log("comething went wrong in connected");
    console.log(err);
  }
  console.log("listening on port 8000");
});
