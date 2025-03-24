
import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold text-gradient">Basit Chowdhary</p>
            <p className="text-sm text-muted-foreground mt-1">Software Development Engineer</p>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/basitqayoom" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/bqc/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:basitqayoomchowdhary@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Basit Qayoom Chowdhary. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
