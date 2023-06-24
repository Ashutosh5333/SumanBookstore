const express = require("express");
const { BookModel } = require("../models/Book.model");
const { Authenticate } = require("../middleware/Authenticate");
const BookRouter = express.Router();

BookRouter.get("/allbooks", async (req, res) => {

  try {
    const newdata = await BookModel.find()
    res.json(newdata);
  } catch (err) {
    console.log(err);
  }
});

// ----------  Single books detail

BookRouter.get("/allbooks/:bookid", async (req, res) => {
  const bookid = req.params.bookid;
  try {
    const newdata = await BookModel.findOne({_id:bookid})
    res.json(newdata);
  } catch (err) {
    console.log(err);
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
