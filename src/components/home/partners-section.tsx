import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const PartnersSection = () => {
    return (
        <section className='mt-[150px]'>
            <div className="lg:grid grid-cols-12">
                <div className="relative col-span-3 h-full">
                    <div className="hidden lg:block h-full">
                        <div className="absolute -left-2/3 top-20 bg-[#D3F7DF] w-[570px] h-[409px] rotate-90 blur-[200px]" />
                        <div className="absolute -left-4/5 top-60 bg-[#ad91feb3] w-[593px] h-[309px] rotate-90 blur-[200px]" />
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="max-w-[1100px] ml-10">
                        <h2 className='text-3xl lg:text-[100px] lg:leading-[110px] font-sora'>
                            Tinker with a <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8258C8] to-[#2C84C8]'>Neural Network right here</span> in your browser. Don&apos;t worry, you can&apos;t break it. We Promise.
                        </h2>
                        <div className="mt-10">
                            <Carousel>
                                <CarouselContent>
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                            <div className="">
                                                <Image
                                                    src={`/assets/images/partners-${index + 1}.png`}
                                                    alt={`Partner ${index + 1}`}
                                                    width={600}
                                                    height={600}
                                                    className="max-w-[90px] lg:max-w-[130px] w-full h-full"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection