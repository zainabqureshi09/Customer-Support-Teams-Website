import { useEffect, useRef, useState } from "react";
import { Search, Users, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Requirement Analysis",
    description: "Deep-dive into your brand's specific CX needs, technical requirements, and target market nuances.",
  },
  {
    icon: Zap,
    title: "Tailored Recruitment Strategy",
    description: "Custom sourcing models designed to attract specialized multilingual talent aligned with your culture.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Screening & Evaluation",
    description: "Multi-stage assessment including language proficiency, technical aptitude, and behavioral alignment.",
  },
  {
    icon: Users,
    title: "Structured Onboarding & Training",
    description: "Comprehensive brand immersion and technical training to ensure day-one operational readiness.",
  },
  {
    icon: BarChart3,
    title: "Continuous Performance Optimization",
    description: "Real-time monitoring and iterative coaching to maintain peak efficiency and KPI excellence.",
  },
];

const ProcessSection = () => {
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
    <section ref={sectionRef} id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
            alt="Team meeting" 
            className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Our Methodology
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
            Our Structured Workforce{" "}
            <span className="text-gradient">Deployment Process</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop only) */}
          <div className="absolute left-0 top-1/2 w-full h-px bg-primary/20 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-start lg:items-center text-left lg:text-center group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                {/* Step Circle/Icon */}
                <div className="relative z-10 mb-6 lg:mb-8">
                  <div className="h-20 w-20 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-lg">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-3 leading-tight px-4 lg:px-0">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-4 lg:px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
