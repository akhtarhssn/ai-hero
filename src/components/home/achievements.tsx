import MaxWidthContainer from '@/components/MaxWidthContainer'
import { TriangleRight } from 'lucide-react'
import Image from 'next/image'
import ClipText from '../clip-text'

const blockChainItems = [
    "Synthesis of specialized compounds and reagents",
    "Tailored solutions for specific research needs",
    "Advanced data analysis services",
    "Comprehensive interpretation and reporting"
]

const virtualItems = [
    "Virtual reality simulations for training",
    'Scale-up services for commercial production',
    "Hands-on training for laboratory techniques",
    "Quality control and assurance services"
]

const aiItems = [
    "AI-driven data analysis and interpretation",
    "Machine learning model development",
    "Predictive analytics for research outcomes",
    "Custom AI solutions for specific research needs"
]

const AchievementSection = () => {
    return (
        <>
            <section className='my-36'>
                <MaxWidthContainer>
                    <div className="flex w-full">
                        <div className="w-[calc(100% + 20px)] font-manrope">
                            <div className='flex w-full'>
                                <div className="w-[60%] flex flex-col gap-4">
                                    <span className='text-sm font-medium text-gray-700'>[ achievement ]</span>
                                    <h2 className='text-4xl lg:text-6xl text-gray-800 leading-[70px] -tracking-[3px] font-sora'>Notable accomplishments and key milestone</h2>
                                </div>
                            </div>
                            {/* cards */}
                            <div className="mt-9">
                                <div className="flex w-[calc(100% + 20px)] h-full -m-2.5">
                                    <div className="w-full">
                                        <div className="min-[1120px]:flex items-center p-2.5 -m-2.5 w-[calc(100% + 20px)]">
                                            {/* card 1 */}
                                            <div className="min-[1120px]:w-[46%] w-full bg-black h-full rounded-3xl">
                                                <div className="py-12 px-16 rounded-3xl h-full text-white m-2.5">
                                                    <div>
                                                        <h2 className="text-[80px] leading-28 font-bold">
                                                            <ClipText text="$75 million" className='text-black' />
                                                        </h2>
                                                        <span className='capitalize leading-12 font-sans font-semibold'>revenue growth</span>
                                                        <p>Generated over $50 million in additional revenue for our clients</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* card 2 */}
                                            <div className="min-[1120px]:w-[27%] w-full h-full rounded-3xl relative group overflow-hidden">
                                                <div className="py-12 px-12 rounded-3xl h-full m-2.5">
                                                    {/* <div className="absolute inset-0 top-0 -left-[100%] group-hover:left-0 h-full w-full bg-gray-900 duration-700 rounded-3xl" /> */}
                                                    <div className=''>
                                                        <h2 className="text-[80px] font-bold">
                                                            <ClipText className='text-white ' text="97%" />
                                                        </h2>
                                                        <span className='capitalize font-sans font-semibold text-[#111]'>Client Satisfaction</span>
                                                        <p className='text-[#333] font-medium mt-3'>97% client satisfaction rate across all marketing campaigns.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* card 3 */}
                                            <div className="min-[1120px]:w-[27%] w-full h-full rounded-3xl relative group overflow-hidden">
                                                <div className="py-12 pl-12 rounded-3xl h-full m-2.5">
                                                    {/* <div className="absolute inset-0 top-0 -left-[100%] group-hover:left-0 h-full w-full bg-gray-900 duration-700 rounded-3xl" /> */}
                                                    <div className=''>
                                                        <h2 className="text-[80px] font-bold">
                                                            <ClipText className='text-white ' text="2,000+" />
                                                        </h2>
                                                        <span className='capitalize font-sans font-semibold text-[#111]'>Conversion Rate</span>
                                                        <p className='text-[#333] font-medium mt-3'>Successfully managed and executed 2,000+ marketing campaigns.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthContainer>
            </section>

            {/* service options */}
            <section className='my-36'>
                <MaxWidthContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-5 flex flex-col gap-4">
                            <Image
                                width={800}
                                height={800}
                                src="/assets/icons/blockchain-icon.svg"
                                alt='blockchain technology icon'
                                className='size-20'
                            />

                            <h2 className='text-4xl capitalize leading-11 text-gray-800 font-sora'>Blockchain Technology</h2>
                            <ul className="flex flex-col gap-3.5 text-[#333] font-manrope font-medium">
                                {
                                    blockChainItems.map((item, index) => (
                                        <li key={index} className='flex items-center gap-4 '>
                                            <span> <TriangleRight size={8} fill='#333' /> </span>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="p-5 flex flex-col gap-4">
                            <Image
                                width={800}
                                height={800}
                                src="/assets/icons/virtual.svg"
                                alt='virtual technology icon'
                                className='size-20'
                            />

                            <h2 className='text-4xl capitalize leading-11 text-gray-800 font-sora'>virtual augmented reality</h2>
                            <ul className="flex flex-col gap-3.5 text-[#333] font-manrope font-medium">
                                {
                                    virtualItems.map((item, index) => (
                                        <li key={index} className='flex items-center gap-4 '>
                                            <span> <TriangleRight size={8} fill='#333' /> </span>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div className="p-5 flex flex-col gap-4">
                            <Image
                                width={800}
                                height={800}
                                src="/assets/icons/ai.svg"
                                alt='ai technology icon'
                                className='size-20'
                            />

                            <h2 className='text-4xl capitalize leading-11 text-gray-800 font-sora'>artificial intelligence advancements</h2>
                            <ul className="flex flex-col gap-3.5 text-[#333] font-manrope font-medium">
                                {
                                    aiItems.map((item, index) => (
                                        <li key={index} className='flex items-center gap-4 '>
                                            <span> <TriangleRight size={8} fill='#333' /> </span>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                    </div>
                </MaxWidthContainer>
            </section>
        </>
    )
}

export default AchievementSection