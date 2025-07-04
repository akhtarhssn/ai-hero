import { cn } from '@/lib/utils'
import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = ({ className, text }: { className?: string, text: string }) => {
    return (
        <section className='overflow-x-hidden'>
            <div className={cn('text-5xl lg:text-[120px] lg:leading-[132px] w-[calc(100%+40px)] -ml-5', className)}>
                <Marquee direction='right' speed={200} >{text}</Marquee>
            </div>
        </section>
    )
}

export default MarqueeSection