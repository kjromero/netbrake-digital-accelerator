import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Users, Lightbulb } from "lucide-react";

const SocialImpactSection = () => {
  const impacts = [
    {
      icon: Code,
      metric: "200+",
      label: "Young People Trained",
      description: "Programming courses in underserved communities"
    },
    {
      icon: Users,
      metric: "15",
      label: "Community Centers",
      description: "Technology education programs established"
    },
    {
      icon: Lightbulb,
      metric: "50+",
      label: "Success Stories",
      description: "Students who found tech careers after our programs"
    }
  ];

  return (
    <section id="impact" className="section">
      <div className="container-wide">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Empowering the Next Generation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At NetBrake, technology is not just about business. We are dedicated to teaching 
            programming to young people in underserved communities, giving them the tools to 
            build a brighter future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{impact.metric}</div>
                <h4 className="font-semibold mb-2">{impact.label}</h4>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="card-glow bg-gradient-subtle">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Education</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We believe that access to technology education should be universal. Through our 
              community programs, we're not just teaching code—we're teaching problem-solving, 
              critical thinking, and opening doors to opportunities that can transform entire families and communities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialImpactSection;