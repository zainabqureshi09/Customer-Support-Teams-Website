import { useEffect, useRef, useState } from "react";
import {
  Users,
  Languages,
  Settings,
  BarChart3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import SpotlightCard from "./reactbits/SpotlightCard";

const services = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "End-to-end team assembly — from talent identification to deployment — built for your brand's requirements.",
  },
  {
    icon: Languages,
    title: "Multilingual Agents",
    description:
      "Access a deep talent pool fluent in Asian and international languages, culturally aligned to your markets.",
  },
  {
    icon: Settings,
    title: "Deployment & Mgmt",
    description:
      "Structured onboarding and operational management ensuring seamless integration with your workflows.",
  },
  {
    icon: BarChart3,
    title: "KPI Monitoring",
    description:
      "Real-time dashboards and rigorous performance frameworks — CSAT, FCR, AHT — delivering accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Mgmt",
    description:
      "Proactive SLA adherence with continuous quality audits and data protection standards.",
  },
  {
    icon: TrendingUp,
    title: "Scalability Planning",
    description:
      "Flexible workforce models designed to scale with seasonal demand or rapid growth initiatives.",
  },
];

const ServicesSection = () => {
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
    <section ref={sectionRef} id="solutions" className="relative py-16 lg:py-32 overflow-hidden bg-background">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
            Strategic Workforce{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <SpotlightCard
              key={service.title}
              className="glass-card p-6 lg:p-8 group cursor-default"
              spotlightColor="rgba(14, 165, 233, 0.15)"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
