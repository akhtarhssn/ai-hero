import Link from 'next/link'
import React from 'react'

type SecondaryButtonProps = {
    label?: string;
    url?: string;
    className?: string;
}

const SecondaryButton = ({ label, url, className }: SecondaryButtonProps) => {
    return (
        <Link
            href={url ? url : "#"}
            className={`p-[2px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] group mt-1.5 mr-2.5 mb-1.5 ml-5 ${className}`}
        >
            <span className='px-10 py-3.5 text-black bg-white group-hover:bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] duration-300 rounded-full text-nowrap'>{label}</span>
        </Link>
    )
}

export default SecondaryButton