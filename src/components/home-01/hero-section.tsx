import React from 'react'
import PrimaryButton from '../primary-button'
import MaxWidthContainer from '../MaxWidthContainer'
import { ArrowRight, Video, X } from 'lucide-react'
import Link from 'next/link'

const HeroSectionHomeOne = () => {
    return (
        <section className='p-3 md:p-5 pb-[4%]'>
            <div
                className='w-full h-full pt-[30%] xl:pt-[13%] rounded-3xl relative p-5 -z-10'
                style={{
                    backgroundImage: 'url(/assets/images/slider-bg-2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                {/* bg */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8258C8] to-[#2C84C8] -z-10 opacity-60 rounded-3xl" />


                <MaxWidthContainer className=''>
                    <div className="max-w-[650px] md:max-w-[800px] lg:max-w-[980px] text-white pr-14 lg:pr-0">
                        <h1 className='font-sora text-[32px] sm:text-5xl md:text-6xl lg:text-[80px] xl:leading-[90px] -tracking-[2.45px]'>Transforming business with next-generation AI solutions and innovation</h1>
                        <p className='max-w-[850px] w-full mt-5'>
                            We are a leading AI solutions provider, dedicated to helping businesses harness the power of artificial intelligence to drive innovation, efficiency, and growth. Our team of experts specializes in developing cutting-edge AI technologies that transform industries and empower organizations to thrive in the digital age.
                        </p>
                        <div className='mt-10'>
                            <PrimaryButton label="Discover" />
                        </div>
                    </div>
                </MaxWidthContainer>

                {/* bottom right popup */}
                <div className="bg-white p-4 rounded-2xl w-fit md:ml-auto flex gap-5 sm:gap-14 items-center relative mt-10 md:mt-0">
                    <div className="w-[150px] sm:w-[190px] h-[120px] sm:h-[140px] rounded-2xl bg-[#849DD9] flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white">
                            <Video />
                            <span className='text-sm'>Watch reels</span>
                        </div>
                    </div>
                    <div className='pr-5 sm:pr-12'>
                        <h4 className='font-sora text-2xl sm:text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#45D0BD] to-100% to-[#44B6E9]'>350+</h4>
                        <p className='flex flex-col mt-2 sm:mt-4 text-sm sm:text-base'>
                            <span>Creative Specialist </span>
                            <span> in our team</span>
                        </p>
                    </div>
                    <button className="absolute -top-3 -right-3 bg-white border text-black border-gray-400 rounded-full p-1 cursor-pointer">
                        <X size={15} />
                    </button>
                </div>

                {/* Slider buttons */}
                <div className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-tl-3xl rounded-bl-3xl'>
                    <div className='relative w-full h-full p-6'>
                        <div className="flex flex-col gap-8 items-center ">

                            <Link href="#" className="flex items-center justify-between w-fit rounded-xl group capitalize z-50">
                                <div className='max-h-8 overflow-hidden '>
                                    <div className='flex flex-col gap-4 -translate-y-9 group-hover:translate-y-1 translate-x-8 group-hover:translate-x-0.5 duration-500 '>
                                        <ArrowRight className='rotate-135' />
                                        <ArrowRight className='rotate-135 -translate-x-8' />
                                    </div>
                                </div>
                            </Link>
                            <Link href="#" className="flex items-center justify-between w-fit rounded-xl group capitalize z-50">
                                <div className='max-h-8 overflow-hidden'>
                                    <div className='flex flex-col gap-4 translate-y-1 group-hover:-translate-y-9 translate-x-0.5 group-hover:translate-x-8 duration-500'>
                                        <ArrowRight className='-rotate-45' />
                                        <ArrowRight className='-rotate-45 -translate-x-8' />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* inverted top corner */}
                        <div
                            className='absolute -top-7 right-0 rotate-180 size-7 bg-transparent rounded-tl-3xl z-10'
                            style={{
                                boxShadow: '-0.5rem -0.5rem #ffffff'
                            }}
                        />
                        <div
                            className='absolute -bottom-7 right-0 rotate-180 size-7 bg-transparent rounded-bl-3xl z-10'
                            style={{
                                boxShadow: '-0.5rem 0.5rem #ffffff'
                            }}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSectionHomeOne