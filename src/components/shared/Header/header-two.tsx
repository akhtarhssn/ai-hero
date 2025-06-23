"use client"


import { cn } from '@/lib/utils'
import { Component, Search, UserRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderTwo = ({ className }: { className?: string }) => {

    const pathname = usePathname()

    return (
        <header
            className={cn("absolute z-50 w-full mx-auto", className)}
        >
            <nav className=''>
                {/* sticky Navbar */}
                <div
                    className=' flex items-center justify-between p-3 md:px-5'
                >
                    {/* left info block */}
                    <div className='flex items-center gap-2 text-black bg-white rounded-br-[25px] relative py-3'>
                        {/* inverted top corner */}
                        <div
                            className='absolute top-2 -right-7 rotate-180 size-7 bg-transparent rounded-br-3xl z-10'
                            style={{
                                boxShadow: '0.5rem 0.5rem #ffffff'
                            }}
                        />
                        {/* inverted bottom corner */}
                        <div
                            className='absolute -bottom-7 left-0 rotate-180 size-7 bg-[#A28EC6] rounded-br-3xl z-10'
                            style={{
                                boxShadow: '0.5rem 0.5rem #ffffff'
                            }}
                        />
                        {/* Quick action button */}
                        <div className='group w-14 h-full cursor-pointer flex items-center justify-center'>
                            <Component size={30} strokeWidth={1.3} className='rotate-45 group-hover:fill-black transition-colors duration-500' />
                        </div>
                        {/* Logo */}
                        <div className='mr-4 sm:mx-[34px] sm:py-2 block'>
                            <Link href='/' className='text-2xl sm:text-3xl font-light font-vamos'>
                                zico
                            </Link>
                        </div>
                    </div>
                    {/* menu Items */}
                    <div className='w-full hidden xl:block py-3'>
                        <ul className='flex items-center justify-center '>
                            {menuItems.map((item) => (
                                <li key={item.name} className={`${pathname === item.link ? 'bg-black' : 'hover:bg-[#111]'} rounded-lg text-sm font-medium uppercase h-10 group overflow-hidden text-white`}>
                                    <Link href={item.link} className='px-6 py-2.5 relative w-full flex flex-col gap-10 group-hover:-translate-y-[60px] transition duration-500 overflow-hidden'>
                                        <span className=''>{item.name}</span>
                                        <span className=''>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* CTA Button */}
                    <div className='hidden sm:flex items-center gap-8 text-white whitespace-nowrap pr-5 py-3'>
                        <div className='flex items-center gap-4'>
                            <Search size={20} />
                            <div className='flex items-center gap-2 font-medium uppercase cursor-pointer'>
                                <UserRound />
                                log in
                            </div>
                        </div>
                        <Link
                            href='#'
                            className='rounded-full flex items-center justify-center border-2 border-[#45D0BD] group'
                        >
                            <p className='px-10 py-3 text-white group-hover:bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] duration-300 rounded-full text-nowrap'>Get in Touch</p>
                        </Link>
                    </div>
                </div>

                {/* scroll Navbar */}

            </nav>
        </header>
    )
}

export default HeaderTwo



export const menuItems = [
    { name: 'Home', link: '/home-01' },
    { name: 'Pages', link: '/pages' },
    { name: 'Services', link: '/services' },
    { name: 'Shop', link: '/shop' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' },
]