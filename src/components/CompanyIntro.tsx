import { Shield, TrendingUp, Users, Globe } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Malaysia-Based, Globally Focused",
    description: "Strategic operations hub in Kuala Lumpur serving international brands across APAC and beyond.",
  },
  {
    icon: Users,
    title: "CX Staffing Specialists",
    description: "Purpose-built multilingual teams trained to deliver world-class customer experiences at scale.",
  },
  {
    icon: TrendingUp,
    title: "KPI-Driven Performance",
    description: "Every team is measured against strict performance benchmarks — CSAT, FCR, AHT, and retention.",
  },
  {
    icon: Shield,
    title: "Brand Protection Strategy",
    description: "We position customer service as your frontline brand defense and growth catalyst.",
  },
];

const CompanyIntro = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            About Connect
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-6">
            Your Strategic Partner for{" "}
            <span className="text-gradient">Customer Experience</span>{" "}
            Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect is a Malaysia-based global workforce solutions company that builds 
            performance-driven, KPI-based customer support teams for brands that refuse 
            to compromise on quality.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
