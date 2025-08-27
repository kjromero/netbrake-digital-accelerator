import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: Users,
      number: "50+",
      label: "Projects Delivered",
    },
    {
      icon: Globe,
      number: "5",
      label: "Countries Served",
    },
    {
      icon: Target,
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section id="about" className="section bg-gradient-subtle">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NetBrake is more than a software house—we are a partner committed to understanding 
              your business challenges. With over 10 years of experience, our experts design and 
              deliver software solutions that truly make an impact.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of technology to transform businesses and create meaningful 
              change. Our approach combines deep technical expertise with a human-centered perspective, 
              ensuring that every solution we build serves both your business objectives and your users' needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;