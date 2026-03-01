import LogoWall from "./reactbits/LogoWall";

const logoItems = [
  // Using more "corporate" looking placeholder logos from Unsplash or clean icons
  { imgUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=200&auto=format&fit=crop", altText: "Global Tech" },
  { imgUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&auto=format&fit=crop", altText: "Enterprise Solutions" },
  { imgUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop", altText: "Fintech Group" },
  { imgUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=200&auto=format&fit=crop", altText: "Innovation Hub" },
  { imgUrl: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=200&auto=format&fit=crop", altText: "Cloud Services" },
  { imgUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=200&auto=format&fit=crop", altText: "Digital Systems" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border/40">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.4em] mb-4">
            Trusted Partnership
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground text-center">
            Powering Global Brands Across <span className="text-primary">Asia-Pacific</span>
          </h2>
        </div>
        
        <div className="relative group">
          {/* Subtle gradient overlays for the marquee edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <LogoWall 
            items={logoItems} 
            direction="horizontal" 
            pauseOnHover={true} 
            size="160px" 
            duration="40s" 
            bgColor="transparent"
            bgAccentColor="transparent"
            textColor="transparent" // We don't want the component's internal text
          />
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto leading-relaxed">
          We collaborate with industry leaders to deploy high-performance, 
          KPI-driven customer experience teams that scale with their growth.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
