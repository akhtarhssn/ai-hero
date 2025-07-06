import Image from "next/image"
import MaxWidthContainer from "@/components/MaxWidthContainer"
import ClipText from "../clip-text"

const AboutSection = () => {
    return (
        <section className='relative mt-20 p-5'>
            {/* the eclipses */}
            <div className='w-1/2 h-1/3 rounded-full -rotate-12 bg-[#45BDDE]/50 filter blur-[250px]  absolute -top-10 left-[10%] -z-10' />
            <div className='w-1/4 h-1/3 rounded-full -rotate-12 bg-[#AD91FE] filter blur-[250px]  absolute -top-5 right-[10%] -z-10' />

            <div className="relative w-full">
                <div className="absolute rounded-tl-2xl rounded-tr-2xl rounded-br-[110px] bg-[#1F1F1F] -top-10 left-[1.3px] -rotate-2 w-full h-[180px] -z-10" />

                {/* <Content /> */}
                <div className="bg-[#1F1F1F] w-full h-full overflow-hidden px-8 pt-20 rounded-bl-2xl rounded-br-2xl relative">
                    <MaxWidthContainer className="flex items-center justify-between w-full h-full px-10">
                        <div className="flex flex-col-reverse lg:flex-row lg:items-center w-[calc(100% + 40px)]">
                            {/* left side */}
                            <div className="w-full lg:w-[45%] flex relative min-h-0.5" >
                                <div className="flex items-end content-end flex-wrap relative w-full p-5">
                                    <div className="w-full text-center relative">
                                        <div className="-ml-[28vw] text-center -mb-5">
                                            <Image
                                                src="/assets/images/3D-model-with-octane-render-volumetri.png"
                                                alt="About Zico"
                                                width={792}
                                                height={1271}
                                                // loading="lazy"
                                                className="inline-block align-middle "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right side */}
                            <div className="w-full lg:w-[55%] ">
                                <div className="">
                                    <h2 className="text-[120px] leading-28 font-bold">
                                        <ClipText text="Neural Networks" />
                                    </h2>
                                    {/* about */}
                                    <div className="mt-10 text-white">
                                        <div className="flex flex-col items-start gap-4">
                                            <span className="text-sm font-sora font-medium">[about]</span>
                                            <span className="font-sora text-6xl leading-[70px] -tracking-[5%]">
                                                Pioneers in artificial intelligence solutions and innovation
                                            </span>
                                        </div>
                                        <div className="mb-14 mt-8">
                                            <p className="font-bold mb-8">
                                                At Zico, we are a leading AI services provider dedicated to delivering innovative solutions that leverage artificial intelligence to transform businesses.
                                            </p>
                                            <p className="font-medium">Our team of experts specializes in cutting-edge AI technologies, offering customized strategies and implementations to help you stay ahead in today’s data-driven world. Unlock the full potential of AI with Zico, your trusted partner in the future of intelligent technology
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MaxWidthContainer>
                </div>
            </div>

        </section>
    )
}

export default AboutSection