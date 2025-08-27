import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Brain, Link, Palette } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Android, iOS, Hybrid, Flutter, Kotlin Multiplatform - we create mobile experiences that users love and businesses rely on.",
      features: ["Native iOS & Android", "Cross-platform Flutter", "Kotlin Multiplatform", "App Store Optimization"]
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Accelerating processes with intelligent solutions that learn, adapt, and optimize your business operations automatically.",
      features: ["Machine Learning Models", "Process Automation", "Intelligent Analytics", "AI Chatbots"]
    },
    {
      icon: Link,
      title: "Integrations",
      description: "Seamless connections between systems - payment gateways, hardware connections, and real-time data synchronization.",
      features: ["Payment Gateways", "API Integrations", "IoT Connectivity", "Real-time Systems"]
    },
    {
      icon: Palette,
      title: "UX/UI & Consulting",
      description: "Designing experiences that matter and guiding smart business decisions through strategic technology consulting.",
      features: ["User Experience Design", "Interface Development", "Strategic Consulting", "Digital Transformation"]
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What We Do Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in cutting-edge technologies and proven methodologies to deliver 
            solutions that drive your business forward.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover card-glow h-full">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;