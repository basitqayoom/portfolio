
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  // Enhanced parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const movableElements = container.querySelectorAll<HTMLElement>('[data-parallax]');
      
      movableElements.forEach(el => {
        const strength = parseFloat(el.getAttribute('data-strength') || '20');
        const delay = parseFloat(el.getAttribute('data-delay') || '0');
        
        setTimeout(() => {
          el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        }, delay);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const scrollElements = containerRef.current.querySelectorAll<HTMLElement>('[data-scroll]');
      
      scrollElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-scroll-speed') || '0.1');
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background decorative elements with enhanced parallax */}
      <div 
        className={`absolute top-20 right-20 w-64 h-64 ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'} rounded-full blur-3xl animate-pulse-soft`} 
        data-parallax 
        data-strength="30"
      ></div>
      <div 
        className={`absolute bottom-20 left-20 w-96 h-96 ${theme === 'dark' ? 'bg-primary/10' : 'bg-primary/5'} rounded-full blur-3xl animate-pulse-soft animation-delay-300`} 
        data-parallax 
        data-strength="20"
      ></div>
      
      {/* Additional parallax elements */}
      <div 
        className="absolute top-40 left-[10%] w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse-soft animation-delay-200" 
        data-parallax 
        data-strength="15"
      ></div>
      <div 
        className="absolute bottom-40 right-[15%] w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse-soft animation-delay-500" 
        data-parallax 
        data-strength="25"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm md:text-base tracking-wider text-muted-foreground mb-4 opacity-0 animate-slide-up animation-delay-100">
            FULL-STACK ENGINEER
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-slide-up animation-delay-200">
            <span className="text-gradient" data-parallax data-strength="5">Basit Qayoom</span> Chowdhary
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 opacity-0 animate-slide-up animation-delay-300 text-balance">
            Building high-performance web applications with expertise in React, Next.js, and Micro-Frontend architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 opacity-0 animate-slide-up animation-delay-400">
            <Button asChild size="lg" className="hover-scale">
              <a href="#about">Learn More</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-scale">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float opacity-0 animate-fade-in animation-delay-500">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-background/10">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
