import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CTO, AgroTech Colombia",
      content: "NetBrake transformed our agricultural operations with their innovative IoT solutions. The precision farming system they developed increased our crop yields by 30% while reducing resource waste.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez",
      role: "CEO, Digital Ventures",
      content: "Working with NetBrake was a game-changer for our fintech startup. Their expertise in complex integrations and scalable architecture helped us launch faster than we ever imagined possible.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Director, Tech Education Foundation",
      content: "Beyond their technical excellence, NetBrake's commitment to social impact is remarkable. Their programming courses have empowered dozens of young people in our community to pursue tech careers.",
      rating: 5,
      avatar: "AM"
    }
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses and organizations 
            we've helped transform through technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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

export default TestimonialsSection;