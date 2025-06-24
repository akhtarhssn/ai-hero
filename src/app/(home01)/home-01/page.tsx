import AboutSectionHomeOne from '@/components/home-01/about-section'
import HeroSectionHomeOne from '@/components/home-01/hero-section'
import SpecialSection from '@/components/home-01/special-section'
import PartnersSection from '@/components/home/partners-section'
import React from 'react'

const HomePage01 = () => {
  return (
    <main>
      <HeroSectionHomeOne />
      <SpecialSection />
      <AboutSectionHomeOne />
      <PartnersSection className='mt-10' />
    </main>
  )
}

export default HomePage01