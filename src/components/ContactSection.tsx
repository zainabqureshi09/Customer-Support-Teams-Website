import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const ContactSection = () => {
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
    <section ref={sectionRef} id="contact" className="relative py-24 lg:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Header Info */}
          <div 
            className="lg:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-8">
              Partner With <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Take the first step toward building your high-performance customer support 
              team. Our consultants are ready to discuss your specific requirements and 
              market goals.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-secondary border border-border/50">
                <h4 className="font-display font-bold text-foreground mb-2">Operational Excellence</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connect isn't just a staffing agency; we are your strategic partner in 
                  scaling high-quality customer experiences across Asia and beyond.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary border border-border/50">
                <h4 className="font-display font-bold text-foreground mb-2">Long-Term Growth</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build teams that grow with you, ensuring sustainable performance 
                  and brand protection at every stage of your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div 
            className="lg:col-span-3 glass-card p-8 lg:p-10 shadow-2xl relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            <form className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-xs uppercase tracking-widest text-muted-foreground">Company Name</Label>
                <Input id="companyName" placeholder="Global Tech Corp" className="bg-background border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="workEmail" className="text-xs uppercase tracking-widest text-muted-foreground">Work Email</Label>
                <Input id="workEmail" type="email" placeholder="executive@company.com" className="bg-background border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-xs uppercase tracking-widest text-muted-foreground">Industry</Label>
                <Input id="industry" placeholder="E-commerce, Fintech, etc." className="bg-background border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetMarkets" className="text-xs uppercase tracking-widest text-muted-foreground">Target Markets</Label>
                <Input id="targetMarkets" placeholder="SEA, APAC, North America" className="bg-background border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="languages" className="text-xs uppercase tracking-widest text-muted-foreground">Required Languages</Label>
                <Input id="languages" placeholder="English, Mandarin, etc." className="bg-background border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamSize" className="text-xs uppercase tracking-widest text-muted-foreground">Estimated Team Size</Label>
                <Select>
                  <SelectTrigger className="bg-background border-border/50">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 Agents</SelectItem>
                    <SelectItem value="10-50">10-50 Agents</SelectItem>
                    <SelectItem value="50-100">50-100 Agents</SelectItem>
                    <SelectItem value="100+">100+ Agents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="timeline" className="text-xs uppercase tracking-widest text-muted-foreground">Project Timeline</Label>
                <Input id="timeline" placeholder="Expected start date or phase requirements" className="bg-background border-border/50" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">How can we help?</Label>
                <Textarea id="message" placeholder="Briefly describe your workforce goals..." className="min-h-[120px] bg-background border-border/50" />
              </div>
              <div className="sm:col-span-2 pt-4">
                <Button variant="hero" size="xl" className="w-full">
                  Request Strategic Consultation
                </Button>
                <p className="text-[11px] text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
