import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./../Pages/Signup";
import Home from './../Pages/Home';
import Dashboard from './../Pages/Dashboard';
import Login from './../Pages/Login';
import { BookDetail } from "../Components/BookDetail";


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />

        <Route
          path="/book"
          element={
            <Dashboard />
          }
        />

        <Route
          path="/book/:id"
          element={
              <BookDetail />
          }
        />

        

       
      </Routes>
    </>
  );
};

export default MainRoutes;
