import { useEffect, useRef, useState } from "react";
import TiltedCard from "./reactbits/TiltedCard";

const languages = [
  { name: "English", region: "Global" },
  { name: "Bahasa Malaysia", region: "Malaysia" },
  { name: "Mandarin", region: "China / Taiwan / SEA" },
  { name: "Korean", region: "South Korea" },
  { name: "Indonesian", region: "Indonesia" },
  { name: "Filipino", region: "Philippines" },
  { name: "Urdu", region: "Pakistan / South Asia" },
  { name: "Other Regional & International Languages", region: "Expanding Coverage" },
];

const outcomes = [
  "Market expansion across Asia-Pacific",
  "Localized customer experience",
  "Brand consistency across regions",
  "Higher retention & satisfaction",
];

const MultilingualTalent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-secondary/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Language Capability
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-6">
              Multilingual Talent for{" "}
              <span className="text-gradient">Global Markets</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our multilingual workforce capability enables brands to engage customers 
              in their native language — building trust, reducing friction, and delivering 
              culturally aligned experiences across every market you serve.
            </p>
            <div className="flex flex-wrap gap-3">
              {outcomes.map((outcome, i) => (
                <span
                  key={outcome}
                  className="language-badge"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.5s ease ${0.4 + i * 0.1}s`,
                  }}
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <TiltedCard 
              imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
              altText="Multilingual Professional Team"
              captionText="Our Global Talent Force"
              containerHeight="450px"
              containerWidth="100%"
              imageHeight="450px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
            />
          </div>
        </div>

        {/* Language grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((lang, i) => (
            <div
              key={lang.name}
              className="glass-card p-5 group cursor-default transition-all duration-400 hover:-translate-y-1 relative overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                {lang.name}
              </h4>
              <p className="text-xs text-muted-foreground">{lang.region}</p>

              <div className="mt-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                <p className="text-xs text-primary/80 leading-relaxed border-t border-border/40 pt-3">
                  Trained in cultural awareness, communication etiquette, and market-specific customer behavior.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultilingualTalent;
