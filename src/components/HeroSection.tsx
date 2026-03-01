import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import ShinyText from "./reactbits/ShinyText";
import DecryptedText from "./reactbits/DecryptedText";
import CircularText from "./reactbits/CircularText";
import Particles from "./reactbits/Particles";
import { ArrowRight, Globe2, BarChart3, ShieldCheck } from "lucide-react";

const languages = [
  { label: "English", top: "15%", left: "10%", delay: "0s" },
  { label: "Bahasa Malaysia", top: "28%", right: "8%", delay: "1s" },
  { label: "Mandarin", top: "58%", left: "8%", delay: "2s" },
  { label: "Korean", top: "20%", right: "20%", delay: "0.5s" },
  { label: "Indonesian", bottom: "30%", right: "12%", delay: "1.5s" },
  { label: "Filipino", bottom: "25%", left: "15%", delay: "2.5s" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-start overflow-hidden bg-background pt-32 sm:pt-40 lg:pt-48 transition-colors duration-500">
      {/* Background Elements */}
      <Particles 
        particleCount={60}
        particleColor="#38bdf8"
        particleSize={1.2}
        particleSpeed={0.15}
      />
      
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-10 grayscale brightness-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Elegant Language Accents */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none z-10">
        {languages.map((lang) => (
          <span
            key={lang.label}
            className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] border border-border bg-card/20 backdrop-blur-sm text-muted-foreground/40 rounded-sm absolute animate-float"
            style={{
              top: lang.top,
              left: lang.left,
              right: lang.right,
              bottom: lang.bottom,
              animationDelay: lang.delay,
            }}
          >
            {lang.label}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="section-container relative z-20 w-full">
        <div className="max-w-5xl">
          {/* Heading - Re-engineered for maximum responsiveness */}
          <div className="mb-8 lg:mb-12 animate-fade-up">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-display font-black leading-[1.1] sm:leading-[0.95] tracking-[-0.04em] text-foreground">
              Building <br className="sm:hidden" /> High-Performance <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary animate-gradient bg-[length:200%_auto]">
                Multilingual
              </span> Teams.
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-2xl mb-10 lg:mb-16 animate-fade-up" style={{ animationDelay: '200ms' }}>
             <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
                We design and deploy KPI-driven customer support operations in Malaysia for 
                <span className="text-foreground"> international brands </span> 
                demanding excellence across the Asia-Pacific region.
             </p>
          </div>

          {/* Call to Actions */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch sm:items-center mb-16 lg:mb-24" style={{ animationDelay: '400ms' }}>
            <button className="relative px-8 lg:px-10 py-4 lg:py-5 font-black text-primary-foreground group overflow-hidden bg-primary rounded-sm transition-all hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)] active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-xs lg:text-sm">
                    Consult Our Experts <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>
            <Button variant="link" size="lg" className="text-muted-foreground hover:text-foreground px-0 font-bold uppercase tracking-widest text-xs lg:text-sm group h-auto py-2 justify-center">
              View Our Methodology
              <div className="h-[1px] w-0 group-hover:w-full bg-current transition-all duration-300" />
            </Button>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className="pt-10 lg:pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 animate-fade-up max-w-4xl" style={{ animationDelay: '600ms' }}>
             {[
               { icon: Globe2, label: "Regional Coverage", val: "APAC & GLOBAL" },
               { icon: BarChart3, label: "Performance Model", val: "KPI-CENTRIC" },
               { icon: ShieldCheck, label: "Brand Integrity", val: "SLA-GUARANTEED" },
             ].map((item) => (
               <div key={item.label} className="flex items-center gap-4">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-base lg:text-lg font-display font-black text-foreground leading-none mb-1">{item.val}</div>
                    <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{item.label}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Decorative Rotating Element */}
      <div className="absolute bottom-10 right-10 hidden 2xl:block z-20 opacity-20 hover:opacity-50 transition-opacity">
        <CircularText 
          text="PREMIUM • PERFORMANCE • PARTNERSHIP • "
          radius={90}
          fontSize={11}
          color="currentColor"
          className="text-primary"
          speed={30}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
