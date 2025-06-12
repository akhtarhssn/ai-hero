import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PrimaryButton from '../primary-button'

const ServicesSection = () => {
    return (
        <section className='mt-[150px] mb-[50px] lg:mb-[150px] max-w-[1380px] mx-auto px-5 lg:px-0'>
            {/* section heading */}
            <div className='flex flex-col lg:flex-row lg:items-end justify-between'>
                <div className='flex flex-col lg:w-[50%] mb-4'>
                    <p className='text-sm '>[ services ]</p>
                    <h2 className='text-3xl lg:text-6xl lg:leading-16 text-[#111] font-sora mt-5 tracking-tighter'>Special neural features for your services</h2>
                </div>
                <div className='lg:flex items-center justify-between lg:w-[40%]'>
                    <p>We have all the services to help your business</p>
                    <PrimaryButton
                        label='explore more'
                        className='bg-transparent border border-[#45D0BD] text-black text-sm text-nowrap w-fit gap-2 px mt-4'
                    />
                </div>
            </div>

            {/* service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-2 mt-5 lg:mt-10">
                {/* card */}
                <div
                    className='rounded-2xl w-full h-full relative min-h-[590px] flex items-end'
                    style={{
                        backgroundImage: 'url(/assets/images/service-1.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="pr-[75px] pb-[44px] pl-[40px] rounded-2xl text-white flex flex-col items-end">
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#45D0BD] to-[#44B6E9] rounded-2xl -z-10' />
                        <div className='z-50'>
                            <h4 className='font-sora text-2xl leading-9 tracking-tighter'>Neural Network Development</h4>
                            <p>Custom design and development of neural network architectures tailored to your specific business needs.</p>
                        </div>
                    </div>

                    {/* action button */}
                    <div className='absolute -bottom-3 -right-0 w-fit h-fit p-3 bg-white rounded-tl-2xl'>
                        <div className='flex justify-end relative'>
                            <Link href="#" className="flex items-center justify-between w-fit bg-black p-4 text-white rounded-xl group capitalize z-50">
                                <div className='max-h-6 overflow-hidden'>
                                    <div className='flex flex-col gap-4 translate-y-1 group-hover:-translate-y-7 translate-x-0.5 group-hover:translate-x-8 duration-300'>
                                        <ArrowRight size={18} className='-rotate-45' strokeWidth={1.3} />
                                        <ArrowRight size={18} className='-rotate-45 -translate-x-8' strokeWidth={1.3} />
                                    </div>
                                </div>
                            </Link>
                            { /* inverted corner */}
                            <div
                                className='absolute -top-10 -right-3 w-7 h-7 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />
                            <div
                                className='absolute bottom-0 -left-10 w-7 h-7 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />


                        </div>
                    </div>
                </div>
                <div
                    className='rounded-2xl w-full h-full relative min-h-[590px] flex items-start'
                    style={{
                        backgroundImage: 'url(/assets/images/Dots.png)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="pr-[75px] pt-[44px] pl-[40px] rounded-2xl text-white flex flex-col items-end">
                        <div className='absolute top-0 left-0 w-full h-full bg-[#AC8DE0] rounded-2xl -z-10' />
                        <div className='z-50'>
                            <h4 className='font-sora text-2xl leading-9 tracking-tighter'>Training
                                & Optimization</h4>
                            <p>Custom design and development of neural network architectures tailored to your specific business needs.</p>
                        </div>
                    </div>
                    {/* action button */}
                    <div className='absolute -bottom-3 -right-0 w-fit h-fit p-3 bg-white rounded-tl-2xl'>
                        <div className='flex justify-end relative'>
                            <Link href="#" className="flex items-center justify-between w-fit bg-black p-4 text-white rounded-xl group capitalize z-50">
                                <div className='max-h-6 overflow-hidden'>
                                    <div className='flex flex-col gap-4 translate-y-1 group-hover:-translate-y-7 translate-x-0.5 group-hover:translate-x-8 duration-300'>
                                        <ArrowRight size={18} className='-rotate-45' strokeWidth={1.3} />
                                        <ArrowRight size={18} className='-rotate-45 -translate-x-8' strokeWidth={1.3} />
                                    </div>
                                </div>
                            </Link>
                            { /* inverted corner */}
                            <div
                                className='absolute -top-10 -right-3 w-7 h-7 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />
                            <div
                                className='absolute bottom-0 -left-10 w-7 h-7 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />


                        </div>
                    </div>
                </div>
                <div
                    className='rounded-2xl w-full h-full relative min-h-[590px] flex items-end'
                    style={{
                        backgroundImage: 'url(/assets/images/service-1.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="pr-[75px] pb-[44px] pl-[40px] rounded-2xl text-white flex flex-col items-end">
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#45D0BD] to-[#44B6E9] rounded-2xl -z-10' />
                        <div className='z-50'>
                            <h4 className='font-sora text-2xl leading-9 tracking-tighter'>Neural Network Development</h4>
                            <p>Custom design and development of neural network architectures tailored to your specific business needs.</p>
                        </div>
                    </div>
                    {/* action button */}
                    <div className='absolute -bottom-3 -right-0 w-fit h-fit p-3 bg-white rounded-tl-2xl'>
                        <div className='flex justify-end relative'>
                            <Link href="#" className="flex items-center justify-between w-fit bg-black p-4 text-white rounded-xl group capitalize z-50">
                                <div className='max-h-6 overflow-hidden'>
                                    <div className='flex flex-col gap-4 translate-y-1 group-hover:-translate-y-7 translate-x-0.5 group-hover:translate-x-8 duration-300'>
                                        <ArrowRight size={18} className='-rotate-45' strokeWidth={1.3} />
                                        <ArrowRight size={18} className='-rotate-45 -translate-x-8' strokeWidth={1.3} />
                                    </div>
                                </div>
                            </Link>
                            { /* inverted corner */}
                            <div
                                className='absolute -top-10 -right-3 w-7 h-7 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />
                            <div
                                className='absolute bottom-0 -left-10 w-7 h-7 rounded-br-3xl z-10 bg-transparent'
                                style={{
                                    boxShadow: '0.5rem 0.5rem white'
                                }}
                            />


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection