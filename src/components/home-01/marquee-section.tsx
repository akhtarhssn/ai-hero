import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = () => {
    return (
        <div className="py-20">
            <div className='bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] p-7 -rotate-2 text-5xl font-semibold font-sora text-white'>
                <Marquee speed={100} >
                    / Join ChatGPT in shaping the future of technology for whole world.
                </Marquee>
            </div>
        </div>
    )
}

export default MarqueeSection