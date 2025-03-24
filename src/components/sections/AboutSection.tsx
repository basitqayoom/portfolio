import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}
const StatCard = ({ value, label, className }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const duration = 2000; // Animation duration in milliseconds
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, '')) || 0;
      if (start === end) return;

      const incrementTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <Card ref={ref} className={cn('border-none shadow-none glass-card', className,'hover:bg-zinc-900')}>
      <CardContent className="p-6">
        <p className="text-3xl font-bold mb-1">{inView ? count + (value.includes('%') ? '%' : '+') : '0'}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};
const AboutSection = () => {
  return <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">Software Development Engineer with 2 years of experience in building high-performance web applications.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert in React, Next.js, and Micro-Frontend architectures. Proven track record in optimizing performance, reducing costs, and leading system improvements. Skilled in CI/CD pipelines, component libraries, scalable web solutions, and DevOps practices. Passionate about code quality, best practices, and enhancing user experience.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-primary/70 flex-shrink-0 mt-0.5" />
                  <span>Noida, India</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-3 h-6 w-6 text-primary/70 flex-shrink-0 mt-0.5" />
                  <a href="mailto:basitqayoomchowdhary@gmail.com" className="hover:text-primary transition-colors">
                    basitqayoomchowdhary@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="mr-3 h-6 w-6 text-primary/70 flex-shrink-0 mt-0.5" />
                  <span>(+91) 9682132612</span>
                </li>
                <li className="flex items-start">
                  <Linkedin className="mr-3 h-6 w-6 text-primary/70 flex-shrink-0 mt-0.5" />
                  <a href="https://www.linkedin.com/in/bqc/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-start">
                  <Code className="mr-3 h-6 w-6 text-primary/70 flex-shrink-0 mt-0.5" />
                  <a href="https://leetcode.com/u/basitqayoomchowdhary/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    LeetCode Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="2+" label="Years Experience" className="col-span-2" />
              <StatCard value="100+" label="Components Built" />
              <StatCard value="80+" label="Projects Improved" />
              <StatCard value="60%" label="Deployment Efficiency" />
              <StatCard value="84%" label="Size Reduction" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
