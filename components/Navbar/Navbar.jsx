import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';

const Navbar = () => {
    return (
        <nav className='w-full bg-white shadow fixed top-0 z-10'>
            <div className='w-11/12 mx-auto p-5'>
                <div className=' hidden 800px:flex 800px:h-[50px] justify-between '>
                    <div className='flex items-center'>
                        <div>
                            <Link href={"/"}>
                                <Image className='object-cover' width={130} height={110} src={"/assets/shoplogo.png"} />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center ml-5 space-x-5 text-[14px] font-[600] uppercase'>
                            <Link href={"/"}>Home</Link>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className=" m-1">Category</label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <Link href={"/products"}>Products</Link>
                            <Link href={"/"}>About</Link>
                            <Link href={"/"}>Faq</Link>
                        </div>
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
    )
}

export default Navbar
