import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  isLast = false,
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
          <Badge
            variant="outline"
            className="mt-1 md:mt-0 self-start md:self-center"
          >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">
            My professional journey building innovative solutions and driving
            technological excellence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <TimelineItem
            title="Software Development Engineer"
            company="Physics Wallah"
            period="Jul 2023 – Present"
            description={
              <div className="space-y-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="component-library"
                    className="border-none"
                  >
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      Component Library & Development
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-4 border-l-2 border-primary/30 py-1">
                        Developed a 100+ component React design system with
                        atomic components and widgets, using Tailwind CSS and
                        CSS Modules for consistent styling. Integrated Storybook
                        for documentation and dynamic theme adjustments,
                        reducing development time by 40% across 70+ projects.
                        Built a Web SDK for authentication, cookies, and token
                        handling.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="micro-frontend" className="border-none">
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      Micro-Frontend Architecture
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-4 border-l-2 border-primary/30 py-1">
                        Led the adoption of micro-frontends using Module
                        Federation with RSBuild, reducing LMS build size by 84%
                        (from 12MB to under 2MB) and cutting load times by 66%
                        (from 15s to under 5s). Enabled seamless React and
                        Next.js interoperability, global context sharing, and
                        SSO, keeping the shell size under 1 MB.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="build-optimization"
                    className="border-none"
                  >
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      Build Optimization & CI/CD
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-4 border-l-2 border-primary/30 py-1">
                        Implemented TypeScript for full type safety, along with
                        Vite and Rollup for efficient bundling. Developed GitLab
                        CI/CD pipelines for automated testing, Storybook
                        deployments, npm publishing, and optimized builds,
                        increasing deployment efficiency by 60%.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="performance" className="border-none">
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      Performance Enhancements
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-4 border-l-2 border-primary/30 py-1">
                        Integrated Core Web Vitals (FCP, LCP, INP) with dynamic
                        monitoring, handling over 1 million daily entries.
                        Migrated font assets to a CDN, achieving a 3x size
                        reduction, reducing system dependencies, and lowering
                        operational costs by 20%.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="code-standards" className="border-none">
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      Code Standardization & Best Practices
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-4 border-l-2 border-primary/30 py-1">
                        Enforced best practices with GitLab commit rules, branch
                        naming conventions, and MR templates. Created a
                        standardized README adopted by 80+ projects. Developed a
                        feature-based React boilerplate with Module Federation,
                        ESLint, Husky hooks, commit linting, and auto-generated
                        changelogs, improving development speed by 25%.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="web-components" className="border-none">
                    <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
                      Web Components Exploration
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="pl-4 border-l-2 border-primary/30 py-1">
                        Conducted PoCs using StencilJS, Lit.dev, and native HTML
                        elements, evaluating Shadow DOM vs. Light DOM for
                        encapsulation, SEO, and performance, comparing them
                        against React-based approaches.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            }
          />

          <TimelineItem
            title="Project Intern"
            company="Indian Institute of Technology (IIT) Ropar"
            period="Dec 2021 – Jan 2022"
            description={
              <>
                <ul className="space-y-2 list-disc list-outside ml-4">
                  <li>
                    Developed a data analysis model that optimized chemical
                    process efficiency by 20%.
                  </li>
                  <li>
                    Proposed an advanced resource management method with
                    potential for significant cost reductions.
                  </li>
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
