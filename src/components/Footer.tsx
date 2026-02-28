import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 transition-colors duration-300">
      <div className="section-container pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
                C
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Connect
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-8">
              Strategic global workforce solutions company building 
              high-performance multilingual customer support teams 
              in Malaysia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-[0.2em] mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">About Connect</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Our Methodology</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Quality Standards</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Success Stories</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Careers</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-[0.2em] mb-8">
              Solutions
            </h4>
            <ul className="space-y-4">
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Staffing Solutions</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Multilingual Teams</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Performance Tracking</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Strategic Deployment</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Scalability Planning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-[0.2em] mb-8">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-snug">Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:consult@connect-global.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">consult@connect.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">+60 (3) 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[11px] text-muted-foreground tracking-wide font-medium">
            © {new Date().getFullYear()} Connect Global Workforce Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
