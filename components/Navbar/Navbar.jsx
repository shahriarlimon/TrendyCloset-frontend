import Link from 'next/link'
import React from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc'

const Navbar = () => {
    return (
        <nav className='w-full bg-blue h-[80px] p-8 shadow fixed top-0 z-10'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div>
                        <Link href={"/"}>
                            <h1 className='text-3xl'> TrendyCloset</h1>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center ml-5 space-x-3'>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Category</Link>
                        <Link href={"/"}>Shop</Link>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Faq</Link>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <Link href={"/cart"}>
                        <AiOutlineShoppingCart size={20} />
                    </Link>
                    <Link href={"/wishlist"}>
                        <AiOutlineHeart size={20} />
                    </Link>
                    <Link href={"/login"}>
                        <VscAccount size={20} />
                    </Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
