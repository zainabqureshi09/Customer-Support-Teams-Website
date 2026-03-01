import { useEffect, useRef, useState } from "react";
import { CheckCircle2, TrendingUp, Cpu, LayoutDashboard } from "lucide-react";
import TiltedCard from "./reactbits/TiltedCard";

const commitments = [
  {
    icon: TrendingUp,
    title: "KPI-Driven Operations",
    description: "Every deployment is anchored by specific performance benchmarks — CSAT, NPS, and FCR.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Coaching",
    description: "Structured feedback loops and real-time monitoring to ensure consistent quality standards.",
  },
  {
    icon: Cpu,
    title: "Evaluation Processes",
    description: "Rigorous weekly and monthly performance audits to identify optimization opportunities.",
  },
  {
    icon: LayoutDashboard,
    title: "Service-Level Compliance",
    description: "Strict adherence to enterprise-grade SLAs and data protection protocols.",
  },
];

const QualityPerformance = () => {
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
    <section ref={sectionRef} className="relative py-16 lg:py-32 overflow-hidden bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className="z-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Quality Assurance
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-6">
              Committed to Measurable{" "}
              <span className="text-gradient">Performance Excellence</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Connect delivers results — not just manpower. Our operational framework 
              is built on accountability, precision, and the relentless pursuit of 
              service excellence for your global brand.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {commitments.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-1 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div
            className="relative w-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
             <div className="relative z-10 mb-[-60px] lg:mb-[-120px] ml-4 lg:ml-10 hidden sm:block">
                <TiltedCard 
                    imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                    altText="Analytics and Performance Tracking"
                    containerHeight="250px"
                    containerWidth="100%"
                    imageHeight="250px"
                    imageWidth="100%"
                    rotateAmplitude={5}
                    scaleOnHover={1.02}
                />
            </div>

            <div className="glass-card p-5 lg:p-8 relative overflow-hidden shadow-2xl border-primary/20 bg-card/80 backdrop-blur-xl z-20 mx-auto sm:mx-0 max-w-md sm:max-w-none">
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500/50" />
                  <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[9px] lg:text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                  Real-time KPI Tracking
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-background/40 border border-border/50">
                  <div className="text-[9px] text-muted-foreground uppercase mb-1">CSAT Score</div>
                  <div className="text-xl lg:text-2xl font-display font-bold text-primary">98.4%</div>
                  <div className="h-1 w-full bg-primary/20 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-primary w-[98.4%]" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-background/40 border border-border/50">
                  <div className="text-[9px] text-muted-foreground uppercase mb-1">AHT Avg</div>
                  <div className="text-xl lg:text-2xl font-display font-bold text-foreground">4:12</div>
                  <div className="text-[9px] text-green-500 mt-1">↓ 12% vs last month</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background/40 border border-border/50 mb-6 hidden sm:block">
                <div className="flex justify-between items-end mb-3">
                  <div className="text-[9px] text-muted-foreground uppercase">Response Volume</div>
                  <div className="text-[9px] text-primary font-bold">Live Data</div>
                </div>
                <div className="flex items-end gap-1 h-16 lg:h-24">
                  {[40, 60, 45, 70, 85, 65, 50, 75, 90, 80, 55, 60].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-primary/40 rounded-t-sm hover:bg-primary transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-[10px] lg:text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  SLA Compliance
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary/30" />
                  Target
                </div>
              </div>

              <div className="absolute -bottom-20 -right-20 h-40 w-40 bg-primary/10 blur-[60px] rounded-full" />
            </div>

            <div className="absolute -top-4 -right-4 h-16 w-16 lg:h-20 lg:w-20 glass-card flex items-center justify-center animate-float shadow-xl border-primary/30 z-30">
              <CheckCircle2 className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPerformance;
