import { useEffect, useRef, useState } from "react";

const VisionMission = () => {
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
        <div className="grid lg:grid-cols-2 gap-px bg-border/40 overflow-hidden rounded-3xl border border-border/40 shadow-2xl">
          {/* Vision */}
          <div
            className="p-12 lg:p-16 bg-card flex flex-col justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6">
              Our Vision
            </span>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-tight mb-6">
              To become a leading global customer service staffing partner in Malaysia.
            </h3>
            <p className="text-muted-foreground leading-relaxed italic">
              Recognized for reliability, performance excellence, and the cultivation of long-term client relationships that drive mutual growth.
            </p>
          </div>

          {/* Mission */}
          <div
            className="p-12 lg:p-16 bg-card flex flex-col justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-6">
              Our Mission
            </span>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-tight mb-6">
              Empowering international companies by delivering skilled, performance-driven professionals.
            </h3>
            <p className="text-muted-foreground leading-relaxed italic">
              Enhancing customer satisfaction, operational efficiency, and sustainable business growth through our multilingual talent solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
