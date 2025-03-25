"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { signOut, useSession, } from 'next-auth/react';

export default function Navber() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: sessiondata, status } = useSession();
    console.log(sessiondata)
    const navmenu = () => {
        return (
            <>
                <li><Link href={'/'}>Home</Link></li>

                <li><Link href={'/'}>About</Link></li>
                <li><Link href={'/'}>Services</Link></li>
                <li><Link href={'/'}>Blog</Link></li>
                <li><Link href={'/mybooking'}>My booking</Link></li>



            </>
        )
    }
    return (
        <nav className="bg-white shadow-md font-mono">
            <div className="container mx-auto flex items-center justify-between p-4">

                {/* Left Side (Logo & Mobile Menu) */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md focus:outline-none"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Image src={'/assets/tool.gif'} width={50} height={50} alt='logo' />
                            <span className="text-xl font-bold md:block hidden font-mono">Car <span className='text-amber-700'>Fixer</span> </span>
                        </div>
                    </Link>
                </div>

                {/* Center (Nav Links) */}
                <ul className="hidden lg:flex space-x-6 text-lg font-medium w-[40%] justify-between">
                    {navmenu()}
                </ul>

                {/* Right Side (Icons & Button) */}
                <div className="flex items-center space-x-4">
                    <Search size={22} className="cursor-pointer" />
                    <ShoppingBag size={22} className="cursor-pointer" />

                    {
                        status === 'authenticated' ? <><Link href="/login">
                            <span className='mr-5 text-red-700'>{sessiondata?.user?.name}</span>
                            <button onClick={() => signOut()} className="btn btn-outline text-amber-700">
                                Log out
                            </button>
                        </Link></> : <> <Link href="/login">
                            <button className="btn btn-outline text-amber-700">
                                Login
                            </button>
                        </Link>
                            <Link href="/signup">
                                <button className="btn btn-outline text-amber-700">
                                    Register
                                </button>
                            </Link></>
                    }

                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full">
                    <ul className="flex flex-col space-y-2 p-4">
                        {navmenu()}
                    </ul>
                </div>
            )}
        </nav>
    )
}
