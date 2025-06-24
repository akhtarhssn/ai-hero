import { ArrowRight } from 'lucide-react'
import PrimaryButton from '../primary-button'
import Link from 'next/link'
import Image from 'next/image'

const SpecialSection = () => {
    return (
        <section className='p-3 md:p-5 py-10'>
            <div className="lg:grid grid-cols-11 items-center gap-5 space-y-10 lg:space-y-0">
                {/* CARD */}
                <div className="w-full h-full bg-gradient-to-br from-[#45D0BD] to-100% to-[#44B6E9] rounded-3xl pl-12 pt-6 pr-7 pb-20 col-span-4 relative">
                    <div className="flex items-center gap-3 text-xs justify-end">
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Solutions</span>
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Services</span>
                    </div>
                    <h2 className='text-4xl leading-11 max-w-[376px] w-full text-white font-sora z-50'>API integration to your business model for effective working</h2>
                    <PrimaryButton
                        label='explore more'
                        className='bg-transparent border-b-2 border-white rounded-none text-nowrap min-w-fit gap-2 px-0 mt-8 text-white py-1'
                    />

                    {/* action button */}
                    <Link href="#" className='absolute -bottom-3 -right-0 w-fit h-fit p-3 bg-white rounded-tl-3xl group'>
                        <div className='flex justify-end relative'>
                            <div className="flex items-center justify-between w-fit bg-black p-4 text-white rounded-xl capitalize z-50">
                                <div className='max-h-6 overflow-hidden'>
                                    <div className='flex flex-col gap-4 translate-y-1 group-hover:-translate-y-8 translate-x-0.5 group-hover:translate-x-[34px] duration-300'>
                                        <ArrowRight size={18} className='-rotate-45' strokeWidth={1.3} />
                                        <ArrowRight size={18} className='-rotate-45 -translate-x-8' strokeWidth={1.3} />
                                    </div>
                                </div>
                            </div>
                            { /* inverted corner */}
                            <div
                                className='absolute -top-12 -right-3 size-9 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />
                            <div
                                className='absolute bottom-0 -left-12 size-9 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />


                        </div>
                    </Link>

                    {/* bg-image */}
                    <div className='absolute bottom-0 right-10 size-72 z-10 opacity-60'
                        style={{
                            backgroundImage: 'url(/assets/images/bg-icon.png)',
                            backgroundSize: 'cover',
                        }}
                    />

                </div>
                {/* CARD */}
                <div className="w-full h-full  rounded-3xl pl-12 pt-6 pr-7 pb-20 col-span-4 text-white relative -z-10"
                    style={{
                        backgroundImage: 'url(/assets/images/slider-bg-3.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className='absolute left-0 top-0 bg-gradient-to-br from-[#8258C8] to-100% to-[#2C84C8] w-full h-full rounded-3xl -z-10 opacity-70' />
                    <div className="z-50">
                        <div className="flex items-center gap-3 text-xs justify-end">
                            <button className='bg-white p-2 text-black rounded-full'>
                                <ArrowRight size={18} className='-rotate-45' strokeWidth={1.3} />
                            </button>
                        </div>
                        <h2 className='text-2xl max-w-[380px] w-full font-sora'>Accompanying documentation for all services and products</h2>
                        <p className='mt-4 max-w-[355px] w-full'>Explore limitless possibilities with our intelligent solutions. Embrace the power of artificial intelligence today</p>
                        <div className="flex items-center">

                        </div>
                    </div>

                    {/* bg-overlay */}
                    <div className='absolute inset-0 top-0 left-0 w-full h-full bg-[#C4C4C4] opacity-30 rounded-3xl -z-20' />
                </div>
                {/* CARD */}
                <div className=" w-full h-full bg-[#AC8DE0] rounded-3xl pl-12 pr-7 pt-16 pb-20 col-span-3 text-white relative -z-10">
                    <h2 className='text-2xl max-w-[380px] w-full font-sora'>Technical support for the entire service life</h2>
                    <p className='mt-4 max-w-[355px] w-full'>Explore limitless possibilities with our intelligent solutions. Embrace the power of artificial intelligence today</p>
                    <Image src='/assets/images/phone.png' alt="phone icon" width={300} height={300} className='size-16 mt-8 ' />
                    {/* bg image */}
                    <div
                        className='absolute bottom-0 right-0 w-[300px] h-[300px] -z-10 opacity-70'
                        style={{
                            backgroundImage: 'url(/assets/images/Dots.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default SpecialSection