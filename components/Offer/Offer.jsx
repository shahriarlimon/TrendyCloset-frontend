import React from 'react';
import { BsTruck, BsMinecart } from 'react-icons/bs';
import { MdOutlinePayment } from 'react-icons/md'

const Offer = () => {
    return (
        <div className='w-full bg-white p-8'>
            <h1 className='text-3xl text-center text-black font-semibold '>What We Offer!</h1>
            <p className='text-center mt-1 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sequi neque dolore!</p>
            <div className='w-11/12 mx-auto'>
                <div className='flex flex-col items-center justify-center space-y-5 800px:space-y-0 800px:grid 800px:grid-cols-4 800px:gap-10 mt-8 800px:mt-16'>
                    <div className='flex flex-col items-center w-56 h-56 bg-white shadow-md border-b-2 border-b-blue-500 p-5'>
                        <div><BsTruck className="text-blue-500 text-center" size={40} /></div>
                        <h1 className='text-xl text-center font-semibold mt-3'>Free Delivery</h1>
                        <p className='text-gray-600 text-sm tracking-wide mt-2 text-center'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>

                    </div>
                    <div className='flex flex-col items-center w-56 h-56 bg-white shadow-lg border-b-2 border-b-red-700 p-5'>
                        <div><MdOutlinePayment className="text-red-700 text-center" size={40} /></div>
                        <h1 className='text-xl text-center font-semibold mt-3'>Secure Payment</h1>
                        <p className='text-gray-600 text-sm tracking-wide mt-2 text-center'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>

                    </div>
                    <div className='flex flex-col items-center w-56 h-56 bg-white shadow-lg border-b-2 border-b-green-700 p-5'>
                        <div><BsMinecart className="text-green-700 text-center" size={40} /></div>
                        <h1 className='text-xl text-center font-semibold mt-3'>Free Return</h1>
                        <p className='text-gray-600 text-sm tracking-wide mt-2 text-center'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>

                    </div>
                    <div className='flex flex-col items-center w-56 h-56 bg-white shadow-lg border-b-2 border-b-yellow-500 p-5'>
                        <div><BsTruck className="text-yellow-500 text-center" size={40} /></div>
                        <h1 className='text-xl text-center font-semibold mt-3'>24/7 Support</h1>
                        <p className='text-gray-600 text-sm tracking-wide mt-2 text-center'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Offer
