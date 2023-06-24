const express = require("express");

const { Authenticate } = require("../middleware/Authenticate");
const { UserBookedModel } = require("../models/UserBooked.model");
const UserBookedRouter = express.Router();

UserBookedRouter.get("/mycart", Authenticate, async (req, res) => {
  const userId = req.body.userId;
  try {
    const MYCart = await UserBookedModel.find({
      userId: userId,
    }).populate("bookedby", ["name", "email"]);
    res.send(MYCart);
  } catch (err) {
    res.send(err);
  }
});

UserBookedRouter.post("/cart", Authenticate, async (req, res) => {
  const payload = req.body;
  const userId = req.body.userId;
  try {
    const CartAdded = await UserBookedModel.create({
      ...payload,
      bookedby: userId,
    });
    await CartAdded.save();
    res.send({ msg: "Cart Added Succesfully" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

UserBookedRouter.patch("/cart/edit/:prodId", Authenticate, async (req, res) => {
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

UserBookedRouter.delete(
  "/cart/delete/:prodId",
  Authenticate,
  async (req, res) => {
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
  }
);

module.exports = { UserBookedRouter };
