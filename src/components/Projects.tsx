import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollTriggerAnimation, gsap } = useGSAP();

  const projects = [
    {
      title: "Gemini AI Clone",
      description: "Built a Gemini AI Clone using React and integrated the Gemini AI API to simulate conversation AI interactions. ",
      tech: ["React" ,"Tailwind CSS"],
      image: "♊",
      gradient: "from-primary/20 to-primary/5",
      links: {
        live: "https://gemini-a-iclone.vercel.app/",
        github: "https://github.com/Karandeepsingh63/GeminiAIclone.git"
      }
    },
    {
      title: "Expense Tracker",
      description: "Built an Expense Tracker application with income/expense management and interactive line & pie charts for financial insights",
      tech: ["MongoDB", "Express.js", "React ","Node.js"],
      image: "📊💰",
      gradient: "from-accent/20 to-accent/5",
      links: {
        live: "https://expense-tracker-6300.vercel.app/login",
        github: "https://github.com/Karandeepsingh63/ExpenseTracker.git"
      }
    },
    {
      title: "Car Garage Management (Ongoing)",
      description: "Developed a Car Garage Management System with features for adding, editing and deleting car details, including owner information,past work history, and cost tracking",
      tech: ["MongoDB", "Express.js", "React" ,"Node.js"],
      image: "🚗🔧",
      gradient: "from-primary/15 to-accent/15",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Tic Tac Toe ",
      description: "Developed an interactive Tic-Tac-Toe game with complete game logic and win/draw detection",
      tech: ["React" , "JavaScript" ],
      image: "⭕❌",
      gradient: "from-primary/15 to-accent/15",
      links: {
        live: "https://tic-tac-toe-game-nine-blue.vercel.app/",
        github: "https://github.com/Karandeepsingh63/TicTacToe-game.git"
      }
    }
  ];

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

    // Project cards animation with 3D effect
    gsap.fromTo(".project-card",
      {
        opacity: 0,
        y: 100,
        rotateX: 45,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Tech badges animation
    gsap.fromTo(".tech-badge",
      {
        opacity: 0,
        scale: 0,
        y: 20
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(2.7)",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(card.querySelector('.project-icon'), {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(card.querySelector('.project-icon'), {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
      });
    });

  }, [scrollTriggerAnimation, gsap]);

  return (
    <section  id="projects" ref={sectionRef} className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-0">
            Featured Projects
          </h2>
          <p ref={subtitleRef} className="text-2xl text-muted-foreground text-center mb-16 opacity-0">
            A selection of my recent work and side projects
          </p>
          
          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`project-card shadow-strong border-0 bg-gradient-to-br ${project.gradient} backdrop-blur-xl border border-primary/20 hover:border-accent/40 transition-all duration-500 hover:shadow-glow transform-gpu perspective-1000 group`}
              >
                <CardHeader className="pb-6">
                  <div className="text-7xl text-center mb-6 project-icon filter drop-shadow-lg">
                    {project.image}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="tech-badge text-xs bg-card/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-medium border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      asChild
                      variant="hero" 
                      size="sm" 
                      className="flex-1 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="ghost" 
                      size="sm" 
                      className="hover:text-primary hover:scale-110 transition-all duration-300 shadow-soft border border-primary/30 hover:border-primary/60"
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
