import AboutSection from "@/components/home/about-section";
import FeatureSection from "@/components/home/feature-section";
import HeroSection from "@/components/home/hero-section";
import MarqueeSection from "@/components/home/marquee";
import PartnersSection from "@/components/home/partners-section";
import ServicesSection from "@/components/home/services-section";

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
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <MarqueeSection />
      <FeatureSection />
      {/* Add more sections as needed */}
    </main>
  );
}
