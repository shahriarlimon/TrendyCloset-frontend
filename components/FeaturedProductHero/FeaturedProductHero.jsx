import Link from 'next/link'
import React from 'react'

const FeaturedProductHero = () => {
    return (
        <div className='w-11/12 mx-auto bg-white flex flex-col 800px:flex-row p-5 mt-12 border shadow-lg'>
            <div className='w-full 800px:w-1/2'>
                <img className='w-full object-cover' src='https://codervent.com/shopingo/demo/shopingo_V1/assets/images/extra-images/promo-large.webp' />
            </div>
            <div className='w-full 800px:w-1/2 p-8'>
                <h1 className='text-2xl font-bold text-gray-800 mb-3'>New Features of Trending Products</h1>
                <p className='text-lg text-gray-700 tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi rem dolorum! Temporibus, quae in provident asperiores error vero eveniet omnis quasi cumque adipisci? Dolor ea perspiciatis fugit consequatur praesentium!</p>
                <div className=' flex flex-col 800px:flex-row mt-4'>
                    <Link href="#" class="m-2 inline-flex items-center justify-center  border border-transparent bg-black px-7 py-3 font-medium text-white hover:bg-gray-700"> Buy Now </Link>
                    <Link href="#" class="m-2 inline-flex items-center justify-center border border-black bg-white px-7 py-3 font-medium text-black shadow hover:bg-black ease-in hover:text-white duration-300"> Learn more </Link>
                </div>
            </div>


        </div>
    )
}

export default FeaturedProductHero
