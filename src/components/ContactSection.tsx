import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@netbrake.co",
      href: "mailto:hello@netbrake.co"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+57 300 123 4567",
      href: "tel:+573001234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bogotá, Colombia",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="neural-bg h-full" />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Build Your Next Big Project
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Partner with NetBrake and unlock the full potential of technology for your business. 
              Whether you need a mobile app, AI solution, or complex system integration, 
              we're here to make your vision a reality.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <info.icon className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-medium">{info.label}</div>
                    <div>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-primary-foreground">
                Ready to Start?
              </h3>
              
              <div className="space-y-4 text-sm text-primary-foreground/80">
                <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded">
                  <span>Free Consultation</span>
                  <span className="text-primary-foreground font-medium">✓ Included</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded">
                  <span>Project Proposal</span>
                  <span className="text-primary-foreground font-medium">24-48h</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded">
                  <span>Development Start</span>
                  <span className="text-primary-foreground font-medium">1-2 weeks</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-foreground/5 rounded border border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70">
                  "NetBrake doesn't just deliver projects, they deliver solutions that grow with your business."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;