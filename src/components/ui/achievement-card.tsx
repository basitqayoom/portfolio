
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  title: string;
  description: string;
  className?: string;
}

const AchievementCard = ({ title, description, className }: AchievementCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden border-none glass-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group", 
        className
      )}
    >
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;
