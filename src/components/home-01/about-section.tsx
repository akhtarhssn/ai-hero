import React from 'react'
import MaxWidthContainer from '../MaxWidthContainer'
import PrimaryButton from '../primary-button'
import Image from 'next/image'

const AboutSectionHomeOne = () => {
    return (
        <section className='px-3 md:px-5 pt-20 pb-16'>
            <MaxWidthContainer>
                <div className='lg:grid grid-cols-2 items-center justify-between gap-10 space-y-10 lg:space-y-0'>
                    <div className="">
                        <span>[ about ]</span>
                        <h2 className='text-6xl font-sora leading-16 -tracking-[5%] mt-5'>Explore limitless possibilities with our intelligent solutions</h2>

                        <div className="sm:flex items-end gap-10 mt-10">
                            <p className='text-9xl font-bold text-outline '>270k</p>
                            <div className='text-3xl sm:text-xl font-medium flex flex-col mt-6 sm:mt-0'>
                                <span>AI Solutions</span>
                                <span>for our clients</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 text-[#333333]">
                        <p>
                            AIERO is a leading AI agency committed to transforming businesses through cutting-edge artificial intelligence solutions. We specialize in delivering tailored AI strategies that drive innovation, optimize processes, and unlock new opportunities for growth.
                        </p>
                        <p>
                            With a team of experts in machine learning, data science, and advanced analytics, we help companies harness the power of AI to solve complex challenges and gain a competitive edge. From predictive analytics and intelligent automation to natural language processing and computer vision, AIERO empowers organizations to thrive in the digital age with intelligent, scalable, and sustainable solutions.
                        </p>
                        <PrimaryButton
                            label='explore more'
                            className='bg-transparent border border-[#45D0BD] text-black text-sm text-nowrap w-fit gap-2 px mt-4'
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 mt-16">
                    {/* card */}
                    <div className="flex flex-col w-full h-full">
                        <Image src="/assets/icons/ai-icon.png" alt='AI Technology' width={64} height={64} className='size-16' />
                        <h3 className='text-xl font-sora font-medium text-[#111] mt-6 mb-3'>AI Technology</h3>
                        <p className='text-[#333] leading-[30px] text-[15px]'>Emphasize the expertise and knowledge of your team in developing and implementing neural networks</p>
                    </div>

                    {/* card */}
                    <div className="flex flex-col w-full h-full">
                        <Image src="/assets/icons/benned-bengeles-icon.png" alt='Tailored solutions' width={64} height={64} className='size-16' />
                        <h3 className='text-xl font-sora font-medium text-[#111] mt-6 mb-3'>Tailored solutions</h3>
                        <p className='text-[#333] leading-[30px] text-[15px]'>Mention your ability to customize solutions based on specific business requirements</p>
                    </div>

                    {/* card */}
                    <div className="flex flex-col w-full h-full">
                        <Image src="/assets/icons/bengeles-icon.png" alt='Cutting-edge technology' width={64} height={64} className='size-16' />
                        <h3 className='text-xl font-sora font-medium text-[#111] mt-6 mb-3'>Cutting-edge technology</h3>
                        <p className='text-[#333] leading-[30px] text-[15px]'>Highlight your use of the latest tools and techniques in neural network development</p>
                    </div>

                    {/* card */}
                    <div className="flex flex-col w-full h-full">
                        <Image src="/assets/icons/circle-shape-icon.png" alt='Modern development' width={64} height={64} className='size-16' />
                        <h3 className='text-xl font-sora font-medium text-[#111] mt-6 mb-3'>Modern development</h3>
                        <p className='text-[#333] leading-[30px] text-[15px]'>Showcase successful case studies or client testimonials that demonstrate the effectiveness of your services</p>
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    )
}

export default AboutSectionHomeOne