import logo from './logo.svg';
import './App.css';

import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch
} from 'react-router-dom';
// import {  } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery/dist/jquery';

import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/js/dist/dropdown';





import Home from './pages/home/home'
import Analytics from './pages/analytics/analytics';
import ErrorPage from './pages/error/error_page';

import Header from './components/header/header'
import SideBar from './components/sidebar/sidebar';
import UserList from './pages/userList/userList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import Footer from './components/footer/Footer';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/auth/login/Login';
import NewCategory from './pages/newCategory/NewCategory';
import Category from './pages/category/Category';
import CategoryList from './pages/categoryList/CategoryList';
import MyEditor from './pages/editor/MyEditor';



const App = () => {
    return (
      <Router>
            <div id="layout-wrapper">
              <SideBar />
              <Header/>
              <div className="main-content">

                  <div className="page-content">
                      <div className="container-fluid">
                          <Routes>
                          
                            <Route exact path="/" element={<Home/>} />
                            <Route exact path="/analytics" element={<Analytics/>} />
                            <Route exact path="/users" element={<UserList/>} />,
                            <Route exact path="/user/:userId" element={<User/>} />,
                            <Route exact path="/new-user" element={<NewUser/>} />,
                            <Route exact path="/products" element={<ProductList/>} />,
                            <Route exact path="/product/:productId" element={<Product/>} />,
                            <Route exact path="/new-product" element={<NewProduct/>} />,
                            <Route exact path="/category/:categories" element={<Category/>} />,
                            <Route exact path="/categories" element={<CategoryList/>} />,
                            <Route exact path="/new-category" element={<NewCategory/>} />,
                            <Route exact path="/login" element={<Login/>} />,
                            {/* <Route exact path="/editor" element={<MyEditor/>} />, */}
                            <Route path="*" element={<ErrorPage/>}/>,
                          </Routes>
                      </div>
                  </div>
              </div>
              {/* <Footer/> */}

            </div>
            
            

      </Router>
    );
  
}

export default App;





