import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./../Pages/Signup";
import Home from "./../Pages/Home";
import Dashboard from "./../Pages/Dashboard";
import Login from "./../Pages/Login";
import { BookDetail } from "../Components/BookDetail";
import Cart from "./../Components/Cart";
import { CheckOut } from "../Pages/CheckOut";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />

        <Route path="/book" element={<Dashboard />} />

        <Route path="/book/:id" element={<BookDetail />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
