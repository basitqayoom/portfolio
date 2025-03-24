
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">
            My academic background and credentials.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border-none glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-primary/70" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold">B.Tech in Chemical Engineering</h3>
                  <p className="text-lg text-primary/80 mt-1">National Institute of Technology Srinagar</p>
                  <p className="text-muted-foreground mt-1 mb-4">2019 – 2023</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">CGPA</p>
                      <p className="text-xl font-medium">8.06/10</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Additional Qualification</p>
                      <p className="text-xl font-medium">GATE 2025 Qualified in Data Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
