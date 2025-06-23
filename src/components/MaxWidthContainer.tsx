import { cn } from '@/lib/utils'
import React from 'react'

type MaxWidthContainerProps = {
    children: React.ReactNode
    className?: string
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
    return (
        <div className={cn("max-w-[1340px] mx-auto", className)}>{children}</div>
    )
}

export default MaxWidthContainer
