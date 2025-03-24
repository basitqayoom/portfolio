
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
          <Card className="overflow-hidden border-none glass-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-primary/70" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold">B.Tech in Chemical Engineering</h3>
                    <p className="text-lg text-primary/80 mt-1">National Institute of Technology Srinagar</p>
                    <p className="text-muted-foreground mt-1">2019 – 2023</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">CGPA</p>
                      <p className="text-lg font-medium">8.06/10</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Additional Qualification</p>
                      <p className="text-lg font-medium">GATE 2025 Qualified in Data Science</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-2">Notable Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Database Management Systems",
                        "Object-Oriented Programming",
                        "Advanced Engineering Mathematics",
                        "Process Optimization"
                      ].map((course, index) => (
                        <span key={index} className="bg-primary/10 text-primary/90 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
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
