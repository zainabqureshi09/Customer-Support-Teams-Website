import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 transition-colors duration-300 overflow-hidden">
      <div className="section-container pt-16 lg:pt-20 pb-8 lg:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tighter leading-none text-foreground uppercase">
                  Connect
                </span>
                <span className="text-[7px] font-black tracking-[0.3em] text-primary uppercase mt-1 leading-none">
                  Global Solutions
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-8">
              Strategic global workforce solutions company building 
              high-performance multilingual customer support teams 
              in Malaysia.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/40">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-[10px] text-foreground uppercase tracking-[0.3em] mb-6 lg:mb-8">
              Company
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">About Connect</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Our Methodology</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Quality Standards</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Success Stories</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">Careers</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-bold text-[10px] text-foreground uppercase tracking-[0.3em] mb-6 lg:mb-8">
              Solutions
            </h4>
            <ul className="space-y-3 lg:space-y-4">
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Staffing Solutions</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Multilingual Teams</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Performance Tracking</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Strategic Deployment</a></li>
              <li><a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Scalability Planning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-[10px] text-foreground uppercase tracking-[0.3em] mb-6 lg:mb-8">
              Contact
            </h4>
            <ul className="space-y-4 lg:space-y-5">
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
          <p className="text-[10px] text-muted-foreground tracking-widest font-bold uppercase">
            © {new Date().getFullYear()} Connect Global. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold">Privacy</a>
            <a href="#" className="text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold">Terms</a>
            <a href="#" className="text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
