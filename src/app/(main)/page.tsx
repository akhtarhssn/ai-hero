import IntroSection from "@/components/home/intro-section";
import FeatureSection from "@/components/home/feature-section";
import HeroSection from "@/components/home/hero-section";
import MarqueeSection from "@/components/home/marquee";
import PartnersSection from "@/components/home/partners-section";
import ServicesSection from "@/components/home/services-section";
import AboutSection from "@/components/home/about-section";

export default function Home() {
  return (
    <main
    // className="min-h-screen bg-[#ECF0F4]"
    // style={{
    //   backgroundImage: 'url(/assets/images/hero-bg.svg)',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    // }}
    >
      <HeroSection />
      <IntroSection />
      <PartnersSection />
      <ServicesSection />
      <MarqueeSection text="/ Neural Networks in shaping the future of technology. / Neural Networks in shaping the future of technology. " />
      <FeatureSection />
      <AboutSection />
      {/* Add more sections as needed */}
    </main>
  );
}
