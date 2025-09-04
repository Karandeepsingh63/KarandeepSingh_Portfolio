import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollTriggerAnimation, staggerChildren, gsap } = useGSAP();

  useEffect(() => {
    // Scroll trigger animations
    scrollTriggerAnimation(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    scrollTriggerAnimation(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    scrollTriggerAnimation(cardRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      delay: 0.4,
      ease: "back.out(1.7)"
    });

    // Stagger animation for feature boxes
    gsap.fromTo(".feature-box",
      {
        opacity: 0,
        x: -50,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".feature-boxes",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, [scrollTriggerAnimation, staggerChildren, gsap]);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-0">
            About Me
          </h2>
          <p ref={subtitleRef} className="text-2xl text-muted-foreground text-center mb-16 opacity-0">
            Building the future, one line of code at a time
          </p>
          
          <Card ref={cardRef} className="shadow-strong border-0 bg-card/90 backdrop-blur-xl relative overflow-hidden opacity-0 scale-95">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-semibold mb-6 text-primary">My Journey</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    I am Karandeep Singh, a Computer Science student at Chitkara University. 
I am passionate about building impactful projects that solve real-world problems 
and enjoy exploring innovative ideas in web development, AI, and emerging technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                   Along with my technical journey in MERN stack, React, and DevOps, 
          I’m passionate about cinematography, video editing, and poetry—creative sides 
          that help me think differently as an engineer. 
          My focus is on learning consistently and turning simple ideas into working products.
                  </p>
                </div>
                
                <div className="space-y-6 feature-boxes">
                  <div className="feature-box p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                    <h4 className="font-semibold text-primary mb-3 text-xl">Full Stack Developer</h4>
                    <p className="text-muted-foreground leading-relaxed">
                        Practicing MERN stack and React projects to improve my development skills
                    </p>
                  </div>
                  <div className="feature-box p-6 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow">
                    <h4 className="font-semibold text-accent mb-3 text-xl">Explorer</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Always eager to learn new tools, AI technologies, and DevOps practices
                    </p>
                  </div>
                  <div className="feature-box p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow">
                    <h4 className="font-semibold text-primary mb-3 text-xl">Creative Mindset</h4>
                    <p className="text-muted-foreground leading-relaxed">
                       Passionate about cinematography, editing, and poetry alongside coding

                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;