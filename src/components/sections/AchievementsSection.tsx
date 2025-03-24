import React from "react";
import AchievementCard from "@/components/ui/achievement-card";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Model UN Organizer & Speaker",
      description:
        "Led a 200+ participant event, enhancing collaboration and leadership skills. Won Best Speaker Award.",
    },
    {
      title: "Technical Club Lead",
      description:
        "Managed NIT Srinagar's technical club, organizing multiple events and workshops.",
    },
    {
      title: "Academic Presenter",
      description:
        "Presented a talk & presentation at SKUAST Srinagar (in collaboration with IIT BHU, PARUL University, NIT Srinagar, SKUAST).",
    },
    {
      title: "Innovative Research",
      description:
        "Developed a biodegradable membrane for wastewater treatment, enhancing environmental sustainability.",
    },
    {
      title: "Award Nomination",
      description:
        "Nominated for Champion of the Quarter at Physics Wallah for outstanding contributions.",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leadership & Achievements
          </h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg text-balance">
            A showcase of my leadership roles, project achievements, and notable
            recognitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
