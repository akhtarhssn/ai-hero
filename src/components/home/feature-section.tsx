import AiTechnologyIcon from "../icons/ai-technology-icon"

const FeatureSection = () => {
    return (
        <section className='my-[150px] max-w-[1380px] mx-auto px-5 lg:px-0'>
            {/* section heading */}
            <div className='flex items-end justify-between'>
                <div className='flex flex-col lg:w-[50%] '>
                    <p className='text-sm '>[ features ]</p>
                    <h2 className='text-3xl lg:text-6xl lg:leading-16 text-[#111] font-sora mt-5 tracking-tighter'>The unique selling points & advantages of our service</h2>
                </div>
            </div>

            {/* feature content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 mt-10">

                <div className="flex flex-col">
                    <span className="size-6">
                        <AiTechnologyIcon />
                    </span>
                    <h4 className="text-xl font-medium mt-3 text-[#111111]">AI Technology</h4>
                    <p className="mt-2">Emphasize the expertise and knowledge of your team in developing and implementing neural networks</p>
                </div>

                <div className="flex flex-col">
                    <span className="size-6">
                        <AiTechnologyIcon />
                    </span>
                    <h4 className="text-xl font-medium mt-3 text-[#111111]">Tailored solutions</h4>
                    <p className="mt-2">Mention your ability to customize solutions based on specific business requirements</p>
                </div>

                <div className="flex flex-col">
                    <span className="size-6">
                        <AiTechnologyIcon />
                    </span>
                    <h4 className="text-xl font-medium mt-3 text-[#111111]">Cutting-edge technology</h4>
                    <p className="mt-2">Highlight your use of the latest tools and techniques in neural network development</p>
                </div>

                <div className="flex flex-col">
                    <span className="size-6">
                        <AiTechnologyIcon />
                    </span>
                    <h4 className="text-xl font-medium mt-3 text-[#111111]">Modern development</h4>
                    <p className="mt-2">Showcase successful case studies or client testimonials that demonstrate the effectiveness of your services</p>
                </div>

            </div>
        </section>
    )
}

export default FeatureSection