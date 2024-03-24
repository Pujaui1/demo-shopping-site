import React, { useState } from 'react'
import '../Dashboard/dashboard.css'
import ProductCard from './ProductCard'



export const Production = () => {
   
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h5>Product</h5>
            </div>
            <ProductCard/>
           
        </main>
    )
}
