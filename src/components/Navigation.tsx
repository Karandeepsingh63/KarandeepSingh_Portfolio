import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useGSAP } from "@/hooks/useGSAP";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { gsap } = useGSAP();

  useEffect(() => {
    // Navigation entrance animation
    gsap.fromTo(
      ".nav-container",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Navigation items stagger animation
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1,
      }
    );

    // Logo animation
    gsap.fromTo(
      ".nav-logo",
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.8,
      }
    );
  }, [gsap]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="nav-container fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-glow">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="nav-logo text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              KS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-item px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}

              {/* Resume Download Button */}
              <a href="/Karandeep_singh(Resume).pdf" download>
                <Button
                  variant="hero"
                  size="sm"
                  className="nav-item shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/20 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-card/95 backdrop-blur-xl rounded-xl mt-4 border border-primary/20 shadow-glow">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Resume Download */}
              <div className="px-4 py-2">
                <a href="/Karandeep_Singh_Resume.pdf" download>
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full shadow-medium hover:shadow-glow transition-all duration-300"
                  >
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
