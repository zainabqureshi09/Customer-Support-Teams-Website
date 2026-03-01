import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import CompanyIntro from "@/components/CompanyIntro";
import ServicesSection from "@/components/ServicesSection";
import StrategicAdvantage from "@/components/StrategicAdvantage";
import FocusSection from "@/components/FocusSection";
import MultilingualTalent from "@/components/MultilingualTalent";
import ProcessSection from "@/components/ProcessSection";
import QualityPerformance from "@/components/QualityPerformance";
import VisionMission from "@/components/VisionMission";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <CompanyIntro />
        <ServicesSection />
        <StrategicAdvantage />
        <FocusSection />
        <MultilingualTalent />
        <ProcessSection />
        <QualityPerformance />
        <VisionMission />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
