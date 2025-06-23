import { ArrowRight } from 'lucide-react'
import PrimaryButton from '../primary-button'
import Link from 'next/link'

const SpecialSection = () => {
    return (
        <section className='p-3 md:p-5 py-10'>
            <div className="grid grid-cols-11 items-center gap-5 ">
                {/* CARD */}
                <div className="bg-gradient-to-br from-[#45D0BD] to-100% to-[#44B6E9] rounded-3xl pl-12 pt-6 pr-7 pb-20 col-span-4 relative ">
                    <div className="flex items-center gap-3 text-xs justify-end">
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Solutions</span>
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Services</span>
                    </div>
                    <h2 className='text-4xl leading-11 max-w-[376px] w-full text-white font-sora'>API integration to your business model for effective working</h2>
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

                </div>
                {/* CARD */}
                <div className="bg-gradient-to-br from-[#45D0BD] to-100% to-[#44B6E9] rounded-3xl pl-12 pt-6 pr-7 pb-20 col-span-4">
                    <div className="flex items-center gap-3 text-xs justify-end">
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Solutions</span>
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Services</span>
                    </div>
                    <h2 className='text-4xl leading-11 max-w-[376px] w-full text-white font-sora'>API integration to your business model for effective working</h2>
                    <PrimaryButton
                        label='explore more'
                        className='bg-transparent border-b-2 border-white rounded-none text-sm text-nowrap min-w-fit gap-2 px-0 mt-8 text-white py-1'
                    />
                </div>
                {/* CARD */}
                <div className="bg-gradient-to-br from-[#45D0BD] to-100% to-[#44B6E9] rounded-3xl pl-12 pt-6 pr-7 pb-20 col-span-3">
                    <div className="flex items-center gap-3 text-xs justify-end">
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Solutions</span>
                        <span className='py-2 px-3.5 bg-white rounded-full'>AI Services</span>
                    </div>
                    <h2 className='text-4xl leading-11 max-w-[376px] w-full text-white font-sora'>API integration to your business model for effective working</h2>
                    <PrimaryButton
                        label='explore more'
                        className='bg-transparent border-b-2 border-white rounded-none text-sm text-nowrap min-w-fit gap-2 px-0 mt-8 text-white py-1'
                    />
                </div>
            </div>
        </section>
    )
}

export default SpecialSection