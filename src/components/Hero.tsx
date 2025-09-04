import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import heroImage from "@/assets/hero-dark-bg.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  const { gsap } = useGSAP();

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero entrance animation
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .fromTo(
        socialsRef.current?.children || [],
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    // Floating animation for the scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Parallax effect for background
    gsap.to(".hero-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [gsap]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="hero-bg absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
        <div className="absolute inset-0 bg-gradient-impact opacity-50" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl mt-4 md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-2xl"
          >
            KARANDEEP SINGH
          </h1>
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl text-foreground mb-6 font-semibold drop-shadow-lg"
          >
            Full Stack Developer
          </p>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Passionate about creating beautiful, functional web applications that
            solve real-world problems. I transform ideas into digital
            experiences through clean code and thoughtful design.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <a href="#projects">
            <Button
              variant="hero"
              size="lg"
              className="group shadow-glow hover:shadow-strong transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            </a>
            <a href="/Karandeep_singh(Resume).pdf" download>
  <Button
    variant="professional"
    size="lg"
    className="shadow-medium hover:shadow-strong transition-all duration-300"
  >
    Download Resume
  </Button>
</a>
          </div>

          {/* Social Links with real href */}
          <div ref={socialsRef} className="flex justify-center space-x-8 mb-20">
            <a
              href="https://github.com/Karandeepsingh63"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-all duration-300 shadow-soft"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/karandeepsingh20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-accent hover:scale-110 transition-all duration-300 shadow-soft"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="karandeepsingh6300@email.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-all duration-300 shadow-soft"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (moved below social icons) */}
      <div className="scroll-indicator absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <ArrowDown className="h-6 w-6 text-primary drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
