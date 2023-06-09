import { productData } from '@/static/data'
import React from 'react'
import ProductCard from '../utils/ProductCard'

const LatestProducts = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-3xl font-bold text-center'>Latest Products</h2>
            <p className='text-center tracking-wider text-gray-700 mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere earum eius dolor, quas aliquid sequi.</p>
            <div className='flex items-center justify-center mt-5'>
                <div class="max-w-screen-md mx-auto">
                    <div class="bg-white py-2 px-3">
                        <nav class="flex flex-wrap gap-4">
                            <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-pink-600 hover:text-pink-600 uppercase tracking-wider"> New Arrival </a>

                            <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-pink-600 hover:text-pink-600 uppercase tracking-wider"> Best Seller </a>

                            <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent border-b-pink-600 py-2 px-3 text-sm font-semibold text-pink-600 transition-all duration-200 ease-in-out uppercase tracking-wider"> Tranding </a>

                            <a href="#" class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-pink-600 hover:text-pink-600 uppercase tracking-wider"> Special Offer </a>


                        </nav>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[25px] mb-12'>
                {
                    productData && productData?.map((product, idx) => <ProductCard product={product} key={idx} />)
                }

            </div>



        </div>
    )

}

export default LatestProducts
