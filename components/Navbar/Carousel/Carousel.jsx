"use client";
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
let count = 0;
let slideInterval;
const banner1 = "/assets/banner.png"
const banner2 = "/assets/banner1.png"
const banner3 = "/assets/banner3.png"

const featuredProducts = [
    banner1,
    banner2,
    banner3

];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };
    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 5000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };
    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    return (
        <div ref={slideRef} className="w-full select-none relative overflow-hidden">
            <div className='bg-red-200'>
                <div className={`aspect-w-16 aspect-h-9 flex items-center justify-end`}>
                    <img className='object-cover mt-16' src={featuredProducts[currentIndex]} alt="" />
                </div>
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <AiOutlineVerticalRight size={30} />
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <AiOutlineVerticalLeft size={30} />
                </button>
            </div>
        </div>
    )
}

export default Carousel
