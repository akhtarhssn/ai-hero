import Image from "next/image"
import MaxWidthContainer from "@/components/MaxWidthContainer"
import ClipText from "../clip-text"

const AboutSection = () => {
    return (
        <section className='relative mt-20 p-5'>
            {/* the eclipses */}
            <div className='w-1/2 h-1/3 rounded-full -rotate-12 bg-[#45BDDE]/50 filter blur-[250px]  absolute -top-10 left-[10%] -z-10' />
            <div className='w-1/4 h-1/3 rounded-full -rotate-12 bg-[#AD91FE] filter blur-[250px]  absolute -top-5 right-[10%] -z-10' />

            <div className="relative w-full min-h-screen">
                <div className="absolute rounded-tl-2xl rounded-tr-2xl rounded-bl-[50px] rounded-br-[110px] bg-[#1F1F1F] -top-10 left-[1.3px] -rotate-2 w-full h-[180px] -z-10" />

                {/* <Content /> */}
                <div className="bg-[#1F1F1F] w-full h-full overflow-hidden p-10 rounded-2xl">
                    <MaxWidthContainer className="flex items-center justify-between w-full h-full">
                        {/* left side */}
                        <div className="w-[45%] h-screen relative">
                            <Image
                                src="/assets/images/3D-model-with-octane-render-volumetri.png"
                                alt="3D-model-with-octane-render-volumetri"
                                width={3000}
                                height={3000}
                                className="inline-block align-middle object-cover w-full h-full absolute top-10"
                                style={{
                                    margin: "0vw 0vw 0vw -15vw"
                                }}
                            />
                        </div>
                        {/* right side */}
                        <div className="w-[55%] ">
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
                    </MaxWidthContainer>
                </div>
            </div>

        </section>
    )
}

export default AboutSection