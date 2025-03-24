
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML", "CSS", "JavaScript (ES6+)", "ReactJS", "Next.js", "TypeScript", 
      "Redux", "Tailwind CSS", "Storybook", "Micro-Frontend (Module Federation)"
    ]
  },
  {
    name: "Backend & APIs",
    skills: [
      "Node.js", "MongoDB", "RESTful APIs", "WebSockets", "Firebase"
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Git", "GitHub", "GitLab", "Jenkins", "Docker", "CI/CD", 
      "Webpack", "Vite", "Google Cloud"
    ]
  },
  {
    name: "Performance & Testing",
    skills: [
      "Core Web Vitals", "Lighthouse", "Mocha", "JMeter"
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      "C", "C++", "Python", "Data Structures & Algorithms", "Object-Oriented Programming"
    ]
  },
  {
    name: "Other",
    skills: [
      "StencilJS", "Lit.dev", "Zod (Schema Validation)", "ESLint", "Prettier", "Husky"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">
            A comprehensive overview of my technical expertise and capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border-none glass-card group hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="group-hover:bg-primary/10 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Leadership", "Cross-Functional Collaboration", "Decision-Making", 
              "Adaptability", "Conflict Resolution", "Critical Thinking", "Time & Task Management"
            ].map((skill, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                {skill}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 mt-12">Language Proficiency</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "English" },
              { name: "Hindi" },
              { name: "Urdu" },
              { name: "Kashmiri" }
            ].map((language, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-base hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                {language.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
