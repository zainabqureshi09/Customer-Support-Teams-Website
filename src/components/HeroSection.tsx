import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import ShinyText from "./reactbits/ShinyText";
import DecryptedText from "./reactbits/DecryptedText";
import CircularText from "./reactbits/CircularText";
import SplitText from "./reactbits/SplitText";
import Particles from "./reactbits/Particles";
import { ArrowRight } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] py-20 lg:py-0">
      {/* Refined Particle System - More subtle for professionalism */}
      <Particles 
        particleCount={80}
        particleColor="#38bdf8"
        particleSize={1.2}
        particleSpeed={0.2}
      />
      
      {/* Background Image - Higher quality feel with better mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-15 grayscale"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
      </div>

      {/* Floating language badges - Made more elegant */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none z-10">
        {languages.map((lang) => (
          <span
            key={lang.label}
            className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-white/10 bg-white/5 backdrop-blur-md text-white/40 rounded-sm absolute animate-float shadow-2xl"
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

      <div className="absolute bottom-20 right-20 hidden lg:block z-20 opacity-40">
        <CircularText 
          text="CONNECT • GLOBAL • PERFORMANCE • "
          radius={70}
          fontSize={10}
          color="#38bdf8"
          speed={25}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-20">
        <div className="max-w-4xl">
          <div className="animate-fade-up mb-10">
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-12 bg-primary/40" />
               <ShinyText 
                  text="Next-Generation CX Solutions" 
                  className="text-[11px] font-bold tracking-[0.5em] uppercase text-primary" 
               />
            </div>
          </div>

          <div className="mb-10">
            <SplitText 
              text="Scale Your Brand with High-Performance Multilingual Teams"
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-white"
              textAlign="left"
              delay={35}
            />
          </div>

          <div className="max-w-2xl mb-12 animate-fade-up-delayed">
             <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-normal border-l-2 border-primary/20 pl-8">
                Based in Malaysia, we build bespoke,{" "}
                <DecryptedText 
                  text="KPI-driven" 
                  animateOn="view"
                  speed={80}
                  className="text-white font-semibold"
                />{" "}
                customer support operations for international brands expanding across the Asia-Pacific region.
             </p>
          </div>

          <div className="animate-fade-up-delayed-2 flex flex-col sm:flex-row gap-6 items-center">
            <button className="relative px-10 py-4 font-bold text-white group overflow-hidden bg-primary rounded-sm transition-all hover:bg-primary/90">
                <span className="relative z-10 flex items-center gap-2">
                    Request Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>
            <Button variant="ghost" size="xl" className="text-slate-300 hover:text-white hover:bg-white/5 px-8 font-semibold rounded-sm">
              Explore Our Methodology
            </Button>
          </div>

          {/* KPI Mini-metrics for Social Proof in Hero */}
          <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-up-delayed-2">
             {[
               { label: "Market Leaders", val: "50+" },
               { label: "Languages", val: "15+" },
               { label: "SLA Adherence", val: "99.9%" },
               { label: "Cost Reduction", val: "40%" },
             ].map((item) => (
               <div key={item.label}>
                  <div className="text-2xl font-display font-bold text-white mb-1">{item.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{item.label}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
