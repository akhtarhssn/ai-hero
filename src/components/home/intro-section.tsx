import { CirclePlay } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const IntroSection = () => {
    return (
        <section className='bg-[#ECF0F4] pr-5 pl-5 pb-5 pt-20 lg:pt-0'>
            <div
                className='rounded-3xl relative'
                style={{
                    backgroundImage: 'url(/assets/images/abstract-gradient-glass-min.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* content */}
                <div className='flex w-full'>

                    <div className='flex items-center justify-between z-50 w-full '>
                        {/* left content */}
                        <div className='w-1/2 z-50 p-3 pt-16 pl-24'>
                            <div className='mr-[43%] mb-[21%] max-w-[400px]'>
                                <h3 className='text-[40px] leading-[40px] text-white'>Elevate your business with our innovative solutions</h3>
                            </div>

                            {/* text */}
                            <div className='text-[13vw] min-[1740px]:text-[14vw] min-[1880px]:text-[13vw] leading-[263px] text-[#ecf0f4] tracking-[-0.07em] -mb-7 font-vamos'>Zico</div>
                        </div>

                        {/* right content */}
                        <div
                            className='w-1/2 z-50 h-full relative flex'
                        >
                            <div className='w-full h-full z-50 flex flex-col justify-end items-end content-end'
                                style={{
                                    backgroundImage: 'url(/assets/images/Dots.png)',
                                    backgroundPosition: '50% 75%',
                                    backgroundRepeat: 'no-repeat',
                                    // backgroundColor: 'rgba(255, 0, 0, 0.3)'
                                }}
                            >
                                {/* <Image
                                    src="/assets/images/Dots.png"
                                    alt='about image bg'
                                    width={500}
                                    height={500}
                                    className='w-[360px] h-[360px] z-50 absolute top-20 right-40'
                                /> */}
                                <p className='text-lg leading-6 text-white font-medium max-w-[180px] mb-16 pr-10'>Creative solutions for your business</p>

                                <Link
                                    href="#"
                                    className='group relative'
                                >
                                    <div className='bg-[#ECF0F4] rounded-tl-3xl pt-8 pr-24 pb-6 pl-16 w-fit flex items-center gap-4 max-h-[86px] overflow-hidden'>
                                        <CirclePlay size={30} strokeWidth={1.3} className='group-hover:fill-neutral-700 group-hover:text-white duration-300' />
                                        <div className='max-h-[23px] overflow-hidden'>
                                            <div className='flex flex-col items-center gap-5 group-hover:-translate-y-[45px] duration-300 '>
                                                <span>Watch Video</span>
                                                <span>Watch Video</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* inverted corner */}
                                    <div
                                        className='absolute -top-7 right-0 w-7 h-7 bg-transparent rounded-br-3xl z-10'
                                        style={{
                                            boxShadow: '0.5rem 0.5rem #ECF0F4'
                                        }}
                                    />
                                    <div
                                        className='absolute bottom-0 -left-7 w-7 h-7 bg-transparent rounded-br-3xl z-10'
                                        style={{
                                            boxShadow: '0.5rem 0.5rem #ECF0F4'
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* background overlay */}
                    <div className='absolute inset-0 top-0 bg-gradient-to-r from-[#8258C8] to-[#2C84C8] opacity-60 rounded-3xl  z-0 ' />
                </div>

                {/* bg-image */}
                <Image
                    src="/assets/images/hero-bg.svg"
                    alt='background image'
                    width={1904}
                    height={977}
                    className='absolute -top-50 z-0 w-full h-full'
                />
            </div>
        </section>
    )
}

export default IntroSection