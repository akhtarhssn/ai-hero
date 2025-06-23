import HeaderTwo from '@/components/shared/Header/header-two'
import React from 'react'

const LayoutHome01 = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {/* header */}
            <HeaderTwo />
            {children}
        </>
    )
}

export default LayoutHome01