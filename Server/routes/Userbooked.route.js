
const express = require("express");

const { Authenticate } = require("../middleware/Authenticate");
const { UserBookedModel } = require("../models/UserBooked.model");
const UserBookedRouter = express.Router();



UserBookedRouter.patch("/book/edit/:prodId", Authenticate, async (req, res) => {
    const prodId = req.params.prodId;
    const userId = req.body.userId;
    const payload = req.body;
    try {
      const Booksdata = await UserBookedModel.findOne({ _id: prodId });
      if (userId !== Booksdata.userId) {
        res.send("you are not authorized");
      } else {
        const Appoinmnet = await UserBookedModel.findByIdAndUpdate(
          { _id: prodId },
          payload
        );
        res.send({ msg: "data updated sucessfully" });
      }
    } catch (err) {
      console.log(err);
      res.send({ msg: "Something went wrongs" });
    }
  });
  
  // ------------- Delete req ------------ //
  
  UserBookedRouter.delete("/book/delete/:prodId", Authenticate, async (req, res) => {
    const prodId = req.params.prodId;
    const userId = req.body.userId;
  
    try {
      const Booksdata = await UserBookedModel.findOne({ _id: prodId });
      if (userId !== Booksdata.userId) {
        res.send("you are not authorized");
      } else {
        await UserBookedModel.findOneAndDelete({ _id: prodId });
        res.send({ msg: "post Deleted sucessfully" });
      }
    } catch (err) {
      console.log(err);
      res.send({ msg: "Something went wrongs" });
    }
  });
  
  
  
  