import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./../Pages/Signup";
import Home from './../Pages/Home';
import Userprofile from './../Pages/Userprofile';
import Bookdetails from './../Pages/Bookdetails';
import Dashboard from './../Pages/Dashboard';
import Login from './../Pages/Login';


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
              <Bookdetails />
          }
        />

        <Route
          path="/userprofile"
          element={
              <Userprofile />
          }
        />

       
      </Routes>
    </>
  );
};

export default MainRoutes;
