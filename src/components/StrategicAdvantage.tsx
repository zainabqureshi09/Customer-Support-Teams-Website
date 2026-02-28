import { useEffect, useRef, useState } from "react";
import { MapPin, Globe, DollarSign, MessageSquare, Target, UserCheck, BarChart3, Lock } from "lucide-react";

const malaysiaAdvantages = [
  { icon: MessageSquare, text: "Multilingual & multicultural hub" },
  { icon: Globe, text: "Strong English proficiency" },
  { icon: MapPin, text: "Asia-Pacific strategic location" },
  { icon: DollarSign, text: "Cost-efficient global operations" },
];

const connectAdvantages = [
  { icon: Target, text: "Structured KPI frameworks" },
  { icon: UserCheck, text: "Rigorous candidate screening" },
  { icon: BarChart3, text: "Performance-based accountability" },
  { icon: Lock, text: "Compliance & data protection awareness" },
];

const counters = [
  { label: "Languages Supported", target: 15 },
  { label: "Screening Stages", target: 7 },
  { label: "Performance Metrics Tracked", target: 24 },
];

const AnimatedCounter = ({
  target,
  label,
  isVisible,
}: {
  target: number;
  label: string;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-display font-extrabold text-primary mb-1">
        {count}+
      </div>
      <div className="text-sm text-muted-foreground tracking-wide">{label}</div>
    </div>
  );
};

const StrategicAdvantage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Strategic Positioning
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
            Why Malaysia.{" "}
            <span className="text-gradient">Why Connect.</span>
          </h2>
        </div>

        {/* Two-column advantages */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Malaysia column */}
          <div
            className="glass-card p-8 lg:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
              <span className="h-8 w-8 rounded-md bg-primary/15 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-primary" />
              </span>
              Malaysia Advantage
            </h3>
            <ul className="space-y-5">
              {malaysiaAdvantages.map((item) => (
                <li key={item.text} className="flex items-start gap-4">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-[15px] leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div
            className="glass-card p-8 lg:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-3">
              <span className="h-8 w-8 rounded-md bg-primary/15 flex items-center justify-center">
                <Target className="h-4 w-4 text-primary" />
              </span>
              Connect Advantage
            </h3>
            <ul className="space-y-5">
              {connectAdvantages.map((item) => (
                <li key={item.text} className="flex items-start gap-4">
                  <div className="mt-0.5 h-9 w-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-[15px] leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Counters */}
        <div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          {counters.map((c) => (
            <AnimatedCounter
              key={c.label}
              target={c.target}
              label={c.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvantage;
