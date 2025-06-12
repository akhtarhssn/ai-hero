import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PrimaryButton = ({ label, url, className, size }: { label: string, url?: string, className?: string, size?: number }) => {
    return (
        <Link href={url ? url : "#"} className={cn('flex items-center justify-between min-w-[180px] max-h-[60px] w-fit bg-[#EF6464] px-7 py-4 text-white rounded-xl group capitalize', className)}>
            {label}
            <div className='max-h-6 overflow-hidden'>
                <div className='flex flex-col gap-4 group-hover:-translate-y-10 group-hover:translate-x-4 duration-300'>
                    <ArrowRight size={size} className='-rotate-45' strokeWidth={1.3} />
                    <ArrowRight size={size} className='-rotate-45 -translate-x-4' strokeWidth={1.3} />
                </div>
            </div>
        </Link>
    )
}

export default PrimaryButton   