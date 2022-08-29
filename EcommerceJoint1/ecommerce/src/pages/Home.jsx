import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { userRequest, userRequestBank } from "../requestMethods";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";


import { useNavigate } from 'react-router-dom';
import Bank from './Bank'

export default function Home() {

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};
