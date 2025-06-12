"use client"

import { Component, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathname = usePathname()

    return (
        <nav className=''>
            {/* sticky Navbar */}
            <div
                className=' flex items-center justify-between '
            >
                {/* left info block */}
                <div className='flex items-center gap-2 m-5'>
                    {/* Quick action button */}
                    <div className='group w-14 h-full cursor-pointer flex items-center justify-center'>
                        <Component size={30} strokeWidth={1.3} className='rotate-45 group-hover:fill-black transition-colors duration-500' />
                    </div>
                    {/* Logo */}
                    <div className='mx-[34px] my-4 hidden xl:block'>
                        <Link href='/' className='text-3xl font-light font-vamos'>
                            zico
                        </Link>
                    </div>
                </div>
                {/* menu Items */}
                <div className='w-full hidden lg:block'>
                    <ul className='flex items-center justify-center '>
                        {menuItems.map((item) => (
                            <li key={item.name} className={`${pathname === item.link ? 'bg-black text-white' : 'hover:bg-[#f0f2f4]'} rounded-lg text-sm font-medium uppercase h-10 group overflow-hidden`}>
                                <Link href={item.link} className='px-6 py-2.5 relative w-full flex flex-col gap-10 group-hover:-translate-y-[60px] transition duration-300 overflow-hidden'>
                                    <span className=''>{item.name}</span>
                                    <span className=''>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* CTA Button */}
                <div className='flex items-center gap-6 m-5'>
                    <Search size={20} />
                    <Link
                        href='#'
                        className='p-[2px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] group mt-1.5 mr-2.5 mb-1.5 ml-5'
                    >
                        <p className='px-10 py-3.5 text-black bg-white group-hover:bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] duration-300 rounded-full text-nowrap'>Get in Touch</p>
                    </Link>
                </div>
            </div>

            {/* scroll Navbar */}

        </nav>
    )
}

export default Navbar

export const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Pages', link: '/pages' },
    { name: 'Services', link: '/services' },
    { name: 'Shop', link: '/shop' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
]