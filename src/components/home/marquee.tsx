import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = () => {
    return (
        <section>
            <div className='text-5xl lg:text-[120px] lg:leading-[132px]'>
                <Marquee speed={200} >/ Neural Networks in shaping the future of technology. / Neural Networks in shaping the future of technology. </Marquee>
            </div>
        </section>
    )
}

export default MarqueeSection