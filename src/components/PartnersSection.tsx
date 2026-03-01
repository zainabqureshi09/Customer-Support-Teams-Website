import LogoWall from "./reactbits/LogoWall";

const logoItems = [
  { imgUrl: "https://cdn.simpleicons.org/salesforce/gray", altText: "Salesforce" },
  { imgUrl: "https://cdn.simpleicons.org/amazon/gray", altText: "Amazon" },
  { imgUrl: "https://cdn.simpleicons.org/zendesk/gray", altText: "Zendesk" },
  { imgUrl: "https://cdn.simpleicons.org/hubspot/gray", altText: "HubSpot" },
  { imgUrl: "https://cdn.simpleicons.org/shopify/gray", altText: "Shopify" },
  { imgUrl: "https://cdn.simpleicons.org/airbnb/gray", altText: "Airbnb" },
  { imgUrl: "https://cdn.simpleicons.org/intercom/gray", altText: "Intercom" },
  { imgUrl: "https://cdn.simpleicons.org/microsoft/gray", altText: "Microsoft" },
  { imgUrl: "https://cdn.simpleicons.org/netflix/gray", altText: "Netflix" },
  { imgUrl: "https://cdn.simpleicons.org/slack/gray", altText: "Slack" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border/40 transition-colors duration-500">
      <div className="section-container">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
              Trusted Partnership
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-black text-foreground text-center tracking-tight">
            Powering Global Brands Across <span className="text-primary">Asia-Pacific</span>
          </h2>
        </div>
        
        <div className="relative group max-w-5xl mx-auto">
          {/* Edge Fades for a professional marquee feel */}
          <div className="absolute inset-y-0 left-0 w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <LogoWall 
            items={logoItems} 
            direction="horizontal" 
            pauseOnHover={true} 
            size="120px" 
            duration="30s" 
            bgColor="transparent"
            bgAccentColor="transparent"
          />
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale">
           {/* Secondary static row for extra weight if needed, or just keep it clean */}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
