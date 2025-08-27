import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Globe, Heart, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "10+ years of industry expertise",
      description: "Proven track record delivering complex software solutions across multiple industries."
    },
    {
      icon: Users,
      title: "Scalable development teams",
      description: "From single developers to full teams - we adapt our resources to match your project needs."
    },
    {
      icon: CheckCircle,
      title: "Proven success in complex integrations",
      description: "Experience connecting diverse systems, APIs, and technologies seamlessly."
    },
    {
      icon: Globe,
      title: "Experience in multiple industries",
      description: "Including agriculture, fintech, healthcare, and e-commerce platforms."
    },
    {
      icon: Heart,
      title: "Human-first approach",
      description: "Solutions tailored to every client with genuine care for your success."
    },
    {
      icon: Zap,
      title: "Cutting-edge technology",
      description: "Always using the latest tools and methodologies to keep you ahead of the competition."
    }
  ];

  return (
    <section className="section bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Businesses Trust NetBrake
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just build software - we build lasting partnerships that drive your business forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;