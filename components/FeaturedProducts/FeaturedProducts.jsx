"use client"
import React from 'react'
import ProductSlides from '../utils/ProductSlides'

const FeaturedProducts = () => {

    return (
        <div className='mt-12 h-screen'>
            <h2 className='text-3xl font-bold text-center'>Featured Products</h2>
            <p className='text-center tracking-wider text-gray-700 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere earum eius dolor, quas aliquid sequi.</p>
            <ProductSlides />

        </div>
    )
}

export default FeaturedProducts
