import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Language Capability
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
            Multilingual Talent for{" "}
            <span className="text-gradient">Global Markets</span>
          </h2>
        </div>

        {/* Language grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
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
              {/* Teal top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                {lang.name}
              </h4>
              <p className="text-xs text-muted-foreground">{lang.region}</p>

              {/* Hover tooltip */}
              <div className="mt-3 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                <p className="text-xs text-primary/80 leading-relaxed border-t border-border/40 pt-3">
                  Trained in cultural awareness, communication etiquette, and market-specific customer behavior.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Executive paragraph + outcomes */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Our multilingual workforce capability enables brands to engage customers 
            in their native language — building trust, reducing friction, and delivering 
            culturally aligned experiences across every market you serve.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {outcomes.map((outcome, i) => (
              <span
                key={outcome}
                className="language-badge"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.6 + i * 0.1}s`,
                }}
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualTalent;
