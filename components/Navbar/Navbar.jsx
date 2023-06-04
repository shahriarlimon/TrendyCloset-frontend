"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { GoSearch } from 'react-icons/go';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { categoriesData, navItems } from '../../static/data';
const productData = categoriesData && categoriesData;

const Navbar = ({ activeHeading = 1 }) => {
    const [searchData, setSearchData] = useState(null);
    const [searchTerms, setSearchTerms] = useState("");
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSearchData = (e) => {
        const term = e.target.value;
        setSearchTerms(term);
        const filteredProducts = productData.filter((product) =>
            product?.title?.toLowerCase().includes(term?.toLowerCase())
        );
        setSearchData(filteredProducts);
    }


    return (
        <>
            {/* Desktop Navbar */}
            <nav className='w-full bg-white shadow fixed top-0 z-10 hidden 800px:block'>
                <div className='w-11/12 mx-auto p-5'>
                    <div className=' hidden 800px:flex 800px:h-[50px] justify-between items-center '>
                        <div className='flex items-center'>
                            <div>
                                <Link href={"/"}>
                                    <Image className='object-cover' width={130} height={110} src={"/assets/shoplogo.png"} />
                                </Link>
                            </div>
                            <div className='flex items-center justify-center ml-5 space-x-4 text-[14px] font-[600] uppercase'>
                                {
                                    navItems && navItems.map((item, index) => (<Link className={`${activeHeading === index + 1 ? "text-[#f364ec]  border-b-3 border-b-[#f364ec]" : "text-black"} cursor-pointer tracking-wider`} key={index} href={item?.url}>{item?.title}</Link>))
                                }
                            </div>
                        </div>
                        {/* search bar */}
                        <div className='relative w-1/4'>
                            <input onChange={handleSearchData} className='h-[40px] w-full px-2 border-[#373738] border-[1.5px] rounded-md outline-none' placeholder='Search Product...' />
                            <GoSearch className='absolute cursor-pointer right-2 top-1.5' size={27} />
                            {searchData && searchData.length !== 0 ? (
                                <div className="absolute w-full min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                    {searchData &&
                                        searchData?.map((i, index) => {
                                            return (
                                                <Link key={index} href={`/product/${i?._id}`}>
                                                    <div className="w-full flex items-start py-3">
                                                        <img width={30} height={30}
                                                            src={i?.image_Url}
                                                            alt=""
                                                            className="w-[40px] h-[40px] mr-[10px]"
                                                        />
                                                        <h1>{i?.title}</h1>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                </div>
                            ) : null}

                        </div>
                        <div className='flex items-center justify-center space-x-4'>
                            <Link className='' href={"/cart"}>
                                <div className='relative'>
                                    <AiOutlineShoppingCart size={25} />
                                    <span className='bg-red-500 rounded-full w-4 h-4 text-white absolute top-0 right-0 left-4 bottom-3 p-0 m-0  font-sans text-[12px] leading-tight text-center'>2</span>
                                </div>
                            </Link>
                            <div className='relative'>
                                <Link href={"/wishlist"}>
                                    <AiOutlineHeart size={25} />
                                    <span className='bg-[#5add8c] rounded-full w-4 h-4 text-white absolute top-0 right-0 left-4 bottom-3 p-0 m-0  font-sans text-[12px] leading-tight text-center '>3</span>
                                </Link>
                            </div>
                            <Link href={"/login"}>
                                <VscAccount size={25} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* phone navbar */}
            <nav
                className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
                    }
      w-full h-[70px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden px-3`}
            >
                <div className='w-full flex items-center justify-between'>
                    <div>
                        <BiMenuAltLeft onClick={() => setOpen(true)} size={35} />
                    </div>
                    <div>
                        <Link href="/">
                            <Image
                                alt='logo'
                                width={78}
                                height={75}
                                className='mb-3 cursor-pointer object-cover'
                                src={"/assets/shoplogo.png"} />

                        </Link>
                    </div>
                    <div>
                        <div className='relative'>
                            <AiOutlineShoppingCart size={30} />
                            <span className='absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center'>2</span>
                        </div>
                    </div>
                </div>
                {/* mobile header sidebar */}
                {
                    open && (<div className='fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0 '>
                        <div className=' fixed w-[60%] bg-white top-0 left-0  h-screen z-10 overflow-y-scroll'>
                            <div className='flex justify-between items-center'>
                                <div className='relative mr-[15px]'>
                                    <AiOutlineHeart size={30} className='cursor-pointer mt-3 ml-3' />
                                    <span className='absolute right-0 top-1.5 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center'>2</span>
                                </div>
                                <div>
                                    <RxCross1 onClick={() => setOpen(false)} className='cursor-pointer mr-3' size={25} />
                                </div>
                            </div>

                            <div className='my-8 w-[92%] m-auto h-[40px] relative'>
                                <input onChange={handleSearchData} className='h-[40px] w-full px-2 outline-none rounded-md  border-[#373738] border-[1.5px]' type='text' placeholder='Search Product....' />
                                <GoSearch
                                    size={30}
                                    className="absolute right-2 top-1.5 cursor-pointer"
                                />
                                {searchData && searchData.length !== 0 ? (
                                    <div className="absolute w-full min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                        {searchData &&
                                            searchData?.map((i, index) => {
                                                return (
                                                    <Link key={index} href={`/product/${i?._id}`}>
                                                        <div className="w-full flex items-start py-3">
                                                            <img width={30} height={30}
                                                                src={i?.image_Url}
                                                                alt=""
                                                                className="w-[40px] h-[40px] mr-[10px]"
                                                            />
                                                            <h1>{i?.title}</h1>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                    </div>
                                ) : null}

                            </div>
                            <div className=' flex flex-col px-5 space-y-4 text-[14px] font-[600] uppercase'>
                                {
                                    navItems && navItems.map((item, index) => (<Link className={`${activeHeading === index + 1 ? "text-[#f364ec]  border-b-3 border-b-[#f364ec]" : "text-black"} cursor-pointer tracking-wider`} key={index} href={item?.url}>{item?.title}</Link>))
                                }
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className='flex px-5'>
                                <Link href={"/login"}>
                                    <VscAccount size={25} />
                                </Link>
                                <div className='ml-3'>
                                    <button className='text-black tracking-wider'>Sign In</button>
                                </div>
                                <div className='ml-3'>
                                    <button className='text-black tracking-wider'>Log In</button>
                                </div>
                            </div>

                        </div>

                    </div>)
                }
            </nav>
        </>
    )
}

export default Navbar
