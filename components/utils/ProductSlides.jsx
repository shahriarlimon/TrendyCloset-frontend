
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'
import { productData } from '@/static/data';
import ProductCard from './ProductCard';

const ProductSlides = () => {
    return (
        <div className='w-11/12 mx-auto  h-[90vh] mt-12'>
            <Swiper

                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={
                    {
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        480: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 3, spaceBetween: 15 },
                        1024: { slidesPerView: 4, spaceBetween: 15 },
                        1280: { slidesPerView: 4, spaceBetween: 20 },

                    }
                }


            >
                {
                    productData && productData.map((product, idx) => <SwiperSlide key={idx}><ProductCard product={product} /></SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default ProductSlides;