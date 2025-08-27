import { Card, CardContent } from "@/components/ui/card";
import { Sprout, Satellite, BarChart3, Cpu } from "lucide-react";
import agroTechHero from "@/assets/agro-tech-hero.jpg";

const AgroTechSection = () => {
  const innovations = [
    {
      icon: Sprout,
      title: "Smart Farming",
      description: "IoT sensors and AI-powered crop monitoring for optimized yields"
    },
    {
      icon: Satellite,
      title: "Drone Technology",
      description: "Aerial monitoring and precision agriculture applications"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Real-time insights for better decision-making in agriculture"
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Machine learning for predictive farming and automation"
    }
  ];

  return (
    <section id="agrotech" className="section bg-gradient-subtle">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Driving Digital Transformation 
              <span className="text-primary"> in Agriculture</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NetBrake has been working closely with the agricultural sector in Colombia, 
              creating digital solutions that help modernize farming processes, improve efficiency, 
              and connect the agro-industrial ecosystem with technology.
            </p>
            <p className="text-muted-foreground">
              From precision farming to supply chain optimization, we're bridging the gap between 
              traditional agriculture and cutting-edge technology, empowering farmers with tools 
              that increase productivity while promoting sustainable practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {innovations.map((innovation, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4">
                    <innovation.icon className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{innovation.title}</h4>
                    <p className="text-xs text-muted-foreground">{innovation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={agroTechHero}
              alt="Smart Agriculture Technology"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgroTechSection;