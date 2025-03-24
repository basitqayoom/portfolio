
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const achievements = [
  {
    title: "Micro-Frontend Transition",
    description: "Led the shift to Micro-Frontend Architecture, reducing LMS build size by 84% (12MB → <2MB) and cutting load times by 66% (15s → <5s)."
  },
  {
    title: "Design System & Component Library",
    description: "Built a 100+ component React library, cutting development time by 40% and ensuring UI consistency across 70+ projects."
  },
  {
    title: "Performance & Process Enhancements",
    description: "Improved web performance scores (42 → 80+), optimized caching/lazy loading, and boosted deployment efficiency by 60%."
  },
  {
    title: "Web Vitals Optimization",
    description: "Managed 1M+ Core Web Vitals entries per day, reducing operational costs by 20%."
  },
  {
    title: "Standardized Codebase",
    description: "Enforced GitLab commit rules, branch naming conventions, and MR templates, improving code quality and collaboration across 80+ projects."
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">
            Significant accomplishments and contributions that have driven business success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none glass-card hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Leadership & Recognition</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-background">
              <p className="text-lg">
                <span className="text-primary font-medium">Model UN Organizer</span> – Led a 200+ participant event, enhancing collaboration and leadership skills. Won Best Speaker Award.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <p className="text-lg">
                <span className="text-primary font-medium">Technical Club Lead</span> – Managed NIT Srinagar's technical club, organizing multiple events and workshops.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <p className="text-lg">
                <span className="text-primary font-medium">Innovative Research</span> – Developed a biodegradable membrane for wastewater treatment, enhancing environmental sustainability.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <p className="text-lg">
                <span className="text-primary font-medium">Award Nomination</span> – Nominated for Champion of the Quarter at Physics Wallah for outstanding contributions.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-background">
              <p className="text-lg">
                <span className="text-primary font-medium">Academic Presentation</span> – Presented a talk & presentation at SKUAST Srinagar (in collaboration with IIT BHU, PARUL University, NIT Srinagar, SKUAST).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
