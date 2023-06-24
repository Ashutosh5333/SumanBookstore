const express = require("express");
const { BookModel } = require("../models/Book.model");
const { Authenticate } = require("../middleware/Authenticate");
const BookRouter = express.Router();

BookRouter.get("/allbooks", async (req, res) => {
  let { sortBy } = req.query;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const newdata = await BookModel.find().skip(skip).limit(limit);
    res.json(newdata);
  } catch (err) {
    console.log(err);
  }
});

BookRouter.get("/books", Authenticate, async (req, res) => {
  const userId = req.body.userId;
  try {
    const AllBooks = await BookModel.find({
      userId: userId,
    }).populate("bookedby", ["name", "email"]);
    res.send(AllBooks);
  } catch (err) {
    res.send(err);
  }
});


BookRouter.post("/book/create",  async (req, res) => {
  const payload = req.body;
  try {
    const bookdata = await BookModel.create(payload);
    await bookdata.save();
    res.send({ msg: " book Added  Successfully" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});




module.exports = { BookRouter };
