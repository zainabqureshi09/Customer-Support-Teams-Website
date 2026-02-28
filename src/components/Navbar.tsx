import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/40 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-display font-bold text-primary-foreground text-sm">C</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Connect
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#solutions"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Solutions
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Methodology
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>

          <div className="flex items-center gap-4 ml-4 pl-8 border-l border-border/40">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all" />
              ) : (
                <Moon className="h-4 w-4 transition-all" />
              )}
            </button>
            <Button variant="hero" size="sm">
              Request Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
