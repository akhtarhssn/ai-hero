import { cn } from '@/lib/utils'
import React from 'react'
import Navbar from '@/components/shared/Header/navbar'

type Props = {
    children?: React.ReactNode
    className?: string
}

const Header = ({
    children,
    className = '',
}: Props) => {
    return (
        <header
            className={cn("lg:absolute top-5 left-5 bg-white rounded-3xl z-50", className)}
            style={{
                width: 'calc(100% - 40px)',
            }}
        >
            <Navbar />
            {children}
        </header>
    )
}

export default Header