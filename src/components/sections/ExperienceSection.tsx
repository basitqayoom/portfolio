
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BriefcaseIcon } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  isLast = false
}) => {
  return (
    <div className="relative pl-8 pb-12 group">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-muted group-hover:bg-primary/30 transition-colors duration-300"></div>
      )}
      
      {/* Circle marker */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-muted bg-background flex items-center justify-center group-hover:border-primary/70 transition-colors duration-300">
        <BriefcaseIcon className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      
      <div className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Badge variant="outline" className="mt-1 md:mt-0 self-start md:self-center">
            {period}
          </Badge>
        </div>
        <p className="text-lg text-primary/80">{company}</p>
        <div className="mt-2 text-muted-foreground space-y-2 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">
            My professional journey building innovative solutions and driving technological excellence.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem
            title="Software Development Engineer"
            company="Physics Wallah"
            period="Jul 2023 – Present"
            description={
              <>
                <ul className="space-y-2 list-disc list-outside ml-4">
                  <li>Developed a ReactJS design system with 100+ components, utilizing Tailwind CSS, CSS Modules, and Storybook for modular styling and documentation.</li>
                  <li>Integrated Core Web Vitals monitoring (FCP, LCP, INP) for better performance tracking and optimization.</li>
                  <li>Led the revamp from iframes to Module Federation (RSBuild), reducing load size by 55% and optimizing shell size under 1MB.</li>
                  <li>Built GitLab CI/CD pipelines for automated testing, deployment, Storybook updates, and npm publishing, leading to a 60% increase in deployment efficiency.</li>
                  <li>Established a standardized README template, adopted by 80+ repositories, improving developer onboarding and collaboration.</li>
                  <li>Conducted research on StencilJS, Lit.dev, and native Web Components, analyzing SEO impact and performance benefits.</li>
                </ul>
              </>
            }
          />
          
          <TimelineItem
            title="Project Intern"
            company="Indian Institute of Technology (IIT) Ropar"
            period="Dec 2021 – Jan 2022"
            description={
              <>
                <ul className="space-y-2 list-disc list-outside ml-4">
                  <li>Developed a data analysis model that optimized chemical process efficiency by 20%.</li>
                  <li>Proposed an advanced resource management method with potential for significant cost reductions.</li>
                </ul>
              </>
            }
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
