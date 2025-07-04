import AboutSectionHomeOne from '@/components/home-01/about-section'
import HeroSectionHomeOne from '@/components/home-01/hero-section'
import SpecialSection from '@/components/home-01/special-section'
import MarqueeSection from '@/components/home/marquee'
import PartnersSection from '@/components/home/partners-section'
import React from 'react'

const HomePage01 = () => {
  return (
    <main>
      <HeroSectionHomeOne />
      <SpecialSection />
      <AboutSectionHomeOne />
      <PartnersSection className='mt-10' />
      <MarqueeSection text='/ Join ChatGPT in shaping the future of technology for whole world.' className='bg-gradient-to-br from-[#45D0BD] to-[#44B6E9] p-7 -rotate-2 mt-20 mb-10 text-white text-4xl lg:text-7xl lg:leading-[132px] font-semibold' />
    </main>
  )
}

export default HomePage01