import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";

// Import icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiGraphql, SiVercel, SiC, SiCplusplus } from "react-icons/si";
import {DiJava} from "react-icons/di"
import { BsFiletypeSql } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollTriggerAnimation, gsap } = useGSAP();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
       { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
{ name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" /> },
{ name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
{ name: "React", icon: <FaReact className="text-sky-400 text-2xl" /> },

      ],
      gradient: "from-primary/20 to-primary/5",
      border: "border-primary/30",
      hoverBorder: "hover:border-primary/60"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
{ name: "Express", icon: <SiExpress className="text-2xl"/> },
{ name: "SQL", icon: <BsFiletypeSql className="text-orange-600 text-2xl" />},
{ name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },


      ],
      gradient: "from-accent/20 to-accent/5",
      border: "border-accent/30",
      hoverBorder: "hover:border-accent/60"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-blue-600 text-2xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-400 text-2xl" /> },
        { name: "Java", icon: <DiJava className="text-red-500 text-2xl" /> },
      ],
      gradient: "from-primary/15 to-accent/15",
      border: "border-primary/30",
      hoverBorder: "hover:border-accent/60"
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500 text-2xl" /> },
        { name: "AWS", icon: <FaAws className="text-yellow-500 text-2xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white text-2xl``" /> },
      ],
      gradient: "from-primary/15 to-accent/15",
      border: "border-primary/30",
      hoverBorder: "hover:border-accent/60"
    },
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

    // Stagger animation for skill cards
    gsap.fromTo(".skill-card",
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotateY: 45
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
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Individual skill badge animations
    gsap.fromTo(".skill-badge",
      {
        opacity: 0,
        scale: 0,
        rotation: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(2.7)",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, [scrollTriggerAnimation, gsap]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-0">
            Skills & Expertise
          </h2>
          <p ref={subtitleRef} className="text-2xl text-muted-foreground text-center mb-16 opacity-0">
            Technologies I work with to bring ideas to life
          </p>
          
          <div className="skills-grid grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`skill-card shadow-strong border-0 bg-gradient-to-br ${category.gradient} backdrop-blur-xl ${category.border} ${category.hoverBorder} transition-all duration-500 hover:shadow-glow hover:scale-105 transform-gpu perspective-1000`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="skill-badge flex items-center gap-2 bg-card/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-2 px-4 font-medium hover:scale-110 hover:shadow-medium"
                      >
                        {skill.icon} {skill.name}
                      </Badge>
                    ))}
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

export default Skills;
