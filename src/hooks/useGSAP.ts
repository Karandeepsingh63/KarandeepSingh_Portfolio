import { useEffect, useRef, MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom hook for GSAP animations
export const useGSAP = () => {
  // Animation presets for common effects
  const fadeInUp = (element: string | Element, delay: number = 0) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay,
        ease: "power3.out"
      }
    );
  };

  const fadeInScale = (element: string | Element, delay: number = 0) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay,
        ease: "back.out(1.7)"
      }
    );
  };

  const slideInLeft = (element: string | Element, delay: number = 0) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: "power3.out"
      }
    );
  };

  const slideInRight = (element: string | Element, delay: number = 0) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay,
        ease: "power3.out"
      }
    );
  };

  const staggerChildren = (container: string | Element, childSelector: string) => {
    gsap.fromTo(`${container} ${childSelector}`,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }
    );
  };

  const scrollTriggerAnimation = (element: string | Element, animation: object, trigger?: string) => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      {
        ...animation,
        scrollTrigger: {
          trigger: trigger || element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  return {
    fadeInUp,
    fadeInScale,
    slideInLeft,
    slideInRight,
    staggerChildren,
    scrollTriggerAnimation,
    gsap,
    ScrollTrigger
  };
};

// Hook for element references
export const useGSAPRef = <T extends HTMLElement>(): MutableRefObject<T | null> => {
  return useRef<T>(null);
};