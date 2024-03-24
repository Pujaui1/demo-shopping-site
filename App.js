import React from 'react';
import './App.css';

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Loginform from './component/Loginform/Loginform';
import Dashboard from './component/Dashboard/Dashboard';
import { Production } from './component/Production/Production';
import Sidebar from './component/Shared/Sidebar';
import Home from './component/Shared/Home';
import Header from './component/Shared/Header';
import Foter from './component/Shared/Foter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Categories } from './component/Categories/Categories';
import { Setting } from './component/Setting/Setting';
import ProductDetails from './component/Production/ProductDetails';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/dashboard"
            element={
              <>
                <Header />
                <div className='grid-container'>
                  <Sidebar />
                 <Dashboard/>
                </div>
                <Foter/>
              </>
            } />


            <Route path="/product" exact element={
              <>
              <Header/>
              <div className='grid-container'>
                <Sidebar/>
                <Production/>
              </div>
              <Foter/>
              </>
            }/>
            <Route path="/productDetails" exact element={
              <>
              <Header/>
              <div className='grid-container'>
                <Sidebar/>
                <ProductDetails/>
              </div>
              <Foter/>
              </>
            }/>


         <Route path="/categories" exact element={
              <>
              <Header/>
              <div className='grid-container'>
                <Sidebar/>
                <Categories/>
              </div>
              <Foter/>
              </>
            }/>



      <Route path="/setting" exact element={
              <>
              <Header/>
              <div className='grid-container'>
                <Sidebar/>
                <Setting/>
              </div>
              <Foter/>
              </>
            }/>
            
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
