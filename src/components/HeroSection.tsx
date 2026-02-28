import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const languages = [
  { label: "English", top: "12%", left: "8%", delay: "0s" },
  { label: "Bahasa Malaysia", top: "25%", right: "6%", delay: "1s" },
  { label: "Mandarin", top: "55%", left: "5%", delay: "2s" },
  { label: "Korean", top: "18%", right: "18%", delay: "0.5s" },
  { label: "Indonesian", bottom: "25%", right: "8%", delay: "1.5s" },
  { label: "Filipino", bottom: "18%", left: "12%", delay: "2.5s" },
  { label: "Urdu", top: "42%", right: "4%", delay: "3s" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating language badges */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {languages.map((lang) => (
          <span
            key={lang.label}
            className="language-badge absolute animate-float"
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

      {/* Content */}
      <div className="section-container relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
              Global Workforce Solutions
            </span>
          </div>

          <h1 className="animate-fade-up-delayed text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
            Building High-Performance Multilingual Customer Support Teams in{" "}
            <span className="text-gradient">Malaysia</span>
          </h1>

          <p className="animate-fade-up-delayed-2 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            We provide strategic workforce solutions for international brands 
            expanding across Asia-Pacific — delivering KPI-driven, multilingual 
            customer experience teams that protect and grow your brand.
          </p>

          <div className="animate-fade-up-delayed-2 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Request Consultation
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
