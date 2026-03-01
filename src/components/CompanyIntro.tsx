import { Shield, TrendingUp, Users, Globe } from "lucide-react";
import SplitText from "./reactbits/SplitText";
import TiltedCard from "./reactbits/TiltedCard";

const pillars = [
  {
    icon: Globe,
    title: "Malaysia-Based",
    description: "Strategic operations hub in Kuala Lumpur serving brands across APAC.",
  },
  {
    icon: Users,
    title: "CX Specialists",
    description: "Multilingual teams trained to deliver world-class customer experiences.",
  },
  {
    icon: TrendingUp,
    title: "KPI-Driven",
    description: "Measured against strict performance benchmarks for measurable results.",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "We position service as your frontline brand defense and growth catalyst.",
  },
];

const CompanyIntro = () => {
  return (
    <section id="about" className="relative py-16 lg:py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Section header */}
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              About Connect
            </span>
            <div className="mb-6">
              <SplitText 
                text="Your Strategic Partner for Customer Experience Excellence"
                className="text-3xl lg:text-5xl font-display font-bold text-foreground leading-tight"
                textAlign="left"
                delay={50}
              />
            </div>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Connect is a Malaysia-based global workforce solutions company that builds 
              performance-driven, KPI-based customer support teams for brands that refuse 
              to compromise on quality.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <TiltedCard 
              imageSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
              altText="Modern Corporate Office"
              captionText="Our Strategic Operations Hub"
              containerHeight="350px"
              containerWidth="100%"
              imageHeight="350px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
            />
          </div>
        </div>

        {/* Pillars grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 text-base lg:text-lg">
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
