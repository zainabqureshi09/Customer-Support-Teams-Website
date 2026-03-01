import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import GradientText from "./reactbits/GradientText";
import StarBorder from "./reactbits/StarBorder";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Methodology", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border-border py-3"
          : "bg-transparent border-transparent py-5 lg:py-6"
      )}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand/Logo - Ensure it doesn't shrink */}
        <a href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02] shrink-0">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-display font-black text-primary-foreground text-base">C</span>
          </div>
          <GradientText
            colors={["#0EA5E9", "#40ffaa", "#0EA5E9"]}
            className="font-display font-bold text-xl lg:text-2xl tracking-tighter"
          >
            Connect
          </GradientText>
        </a>

        {/* Desktop Links - More responsive spacing */}
        <div className="hidden md:flex items-center lg:gap-8 md:gap-4">
          <div className="flex items-center lg:gap-6 md:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center lg:gap-5 md:gap-3 ml-2 lg:ml-4 lg:pl-8 md:pl-4 border-l border-border">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all" />
              ) : (
                <Moon className="h-4 w-4 transition-all" />
              )}
            </button>
            <StarBorder
              as="button"
              className="px-5 py-2.5 text-xs font-black rounded-full uppercase tracking-widest"
              color="#0EA5E9"
              speed="4s"
            >
              Consult Now
            </StarBorder>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl text-foreground hover:bg-secondary/50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border transition-all duration-500 ease-in-out overflow-hidden md:hidden shadow-2xl",
          isMobileMenuOpen ? "max-h-screen opacity-100 py-10" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="section-container flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-black text-foreground hover:text-primary transition-all flex items-center justify-between group",
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                )}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
                <X className="h-5 w-5 opacity-0 group-hover:opacity-100 -rotate-45 transition-all" />
              </a>
            ))}
          </div>
          <div className={cn(
            "pt-6 border-t border-border transition-all duration-500",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )} style={{ transitionDelay: '250ms' }}>
            <StarBorder
              as="button"
              className="w-full py-5 text-base font-black rounded-xl uppercase tracking-[0.2em]"
              color="#0EA5E9"
              speed="4s"
            >
              Request Strategic Consultation
            </StarBorder>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
