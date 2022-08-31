import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Bank from './pages/Bank';
import Balance from './pages/Balance';
import Register from './pages/Register';
import BankInfoAdd from './pages/BankInfoAdd';
import Product from "./pages/Product";
import OOrders from "./pages/testOrders";
import ProductList from "./pages/ProductList";
import OrdersProfile from "./pages/ordersProfile";
import UpdateProfile from "./pages/updateProfile";

import { userRequest, userRequestBank } from "./requestMethods";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from './pages/Cart';
import Success from "./pages/Success";
import axios from "axios";
axios.defaults.withCredentials = true;



const App = () => {
  // return <Home/>;
  // return <Login/>
  // return <Bank/>
  // return <Register/>
  // const user = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) => state.user.currentUser);



  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />   
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route  path="/register" element={user ? <Navigate to="/"/> : <Register/>}/> */}
      {/* <Route  path="/register" element={<Register/>}/> */}
      <Route  path="/logout" element={<Logout/>}/>
      <Route  path="/products/:category" element={<ProductList/>}/>
      <Route  path="/producttts/:id" element={<Product/>}/>
      
      {/* <Route  path="/products" element={<ProductList/>}/> */}
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/success" element={<Success/>}/>
      <Route  path="/banking" element={<Bank/>}/>
      <Route  path="/info_bank" element={<BankInfoAdd/>}/>
      <Route  path="/authBank" element={<BankInfoAdd/>}/>
      <Route  path="/orders" element={<OrdersProfile/>}/>
      <Route  path="/profile" element={<UpdateProfile/>}/>
      <Route  path="/balance" element={<Balance/>}/>
      {/* <Route  path="/test" element={<OOrders/>}/> */}

      </Routes>
    </Router>
  );
};

export default App;