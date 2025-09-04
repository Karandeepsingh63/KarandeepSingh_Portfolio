import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollTriggerAnimation, gsap } = useGSAP();

  useEffect(() => {
    // Title animations
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

    // Contact cards animation
    gsap.fromTo(".contact-card",
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotateY: 20
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Contact info items animation
    gsap.fromTo(".contact-item",
      {
        opacity: 0,
        x: -30,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Form fields animation  
    gsap.fromTo(".form-field",
      {
        opacity: 0,
        y: 30,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.05,
          x: 10,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(item.querySelector('.contact-icon'), {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(item.querySelector('.contact-icon'), {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      });
    });

  }, [scrollTriggerAnimation, gsap]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-0">
            Get In Touch
          </h2>
          <p ref={subtitleRef} className="text-2xl text-muted-foreground text-center mb-16 opacity-0">
            Let's discuss your next project or opportunity
          </p>
          
          <div className="contact-grid grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <Card className="contact-card shadow-strong border-0 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-xl border border-primary/20 hover:border-accent/40 transition-all duration-500 hover:shadow-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-primary">Contact Information</h3>
                  
                  <div className="contact-info space-y-6">
                    <div className="contact-item flex items-center space-x-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 cursor-pointer">
                      <div className="contact-icon p-3 rounded-xl bg-primary/20 border border-primary/30">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Email</p>
                        <p className="text-muted-foreground">karandeepsingh6300@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="contact-item flex items-center space-x-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 cursor-pointer">
                      <div className="contact-icon p-3 rounded-xl bg-accent/20 border border-accent/30">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Phone</p>
                        <p className="text-muted-foreground">(+91)8263844288</p>
                      </div>
                    </div>
                    
                    <div className="contact-item flex items-center space-x-4 p-4 rounded-xl bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 cursor-pointer">
                      <div className="contact-icon p-3 rounded-xl bg-primary/20 border border-primary/30">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Location</p>
                        <p className="text-muted-foreground">Chandigarh</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">
                      Available for freelance work and full-time opportunities.
                      Response time is typically within 24 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="contact-card shadow-strong border-0 bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-xl border border-accent/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-accent">Send a Message</h3>
                
                <form className="contact-form space-y-6">
                  <div className="form-field">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/60 transition-all duration-300 h-12 text-lg" 
                    />
                  </div>
                  
                  <div className="form-field">
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/60 transition-all duration-300 h-12 text-lg" 
                    />
                  </div>
                  
                  <div className="form-field">
                    <Input 
                      placeholder="Subject" 
                      className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/60 transition-all duration-300 h-12 text-lg" 
                    />
                  </div>
                  
                  <div className="form-field">
                    <Textarea 
                      placeholder="Your message..." 
                      className="min-h-[150px] bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary/60 transition-all duration-300 resize-none text-lg" 
                    />
                  </div>
                  
                  <Button 
                    variant="hero" 
                    className="w-full h-14 text-lg shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;