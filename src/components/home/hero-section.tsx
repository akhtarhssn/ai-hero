import PrimaryButton from '../primary-button'

const HeroSection = () => {
    return (
        <section className='pt-[13%] pb-[4%] bg-[#ECF0F4] rounded-tl-3xl rounded-tr-3xl'>
            {/* container */}
            <div className='container max-w-[1580px] mx-auto px-10'>
                {/* content */}
                <div className='md:flex items-center justify-between'>
                    {/* left side */}
                    <div className='lg:w-[70%] z-50'>
                        <h1 className='text-5xl md:text-7xl lg:text-[100px] mb-4 font-sora tracking-[-0.03em]'>
                            Unlocking the potential of
                            <span className='bg-clip-text bg-gradient-to-tr from-[#8258C8] to-[#2C84C8] text-transparent'> Neural Networks </span>
                            features
                        </h1>

                    </div>
                    {/* right side */}
                    <div className='lg:w-[30%] z-50'>
                        <p className='leading-[30px] text-[#333]'>
                            Neural networks are a class of machine learning algorithms that are inspired by the structure and function of the human brain.
                        </p>
                        <div className='mt-7'>
                            <PrimaryButton label="Discover" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection