import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Neural Network Pattern Overlay */}
      <div className="absolute inset-0 neural-bg" />
      
      {/* Content */}
      <div className="relative z-10 container-narrow text-center">
        {/* Floating Icons */}
        <div className="absolute -top-20 -left-20 opacity-10">
          <Brain className="w-32 h-32 text-primary animate-float" />
        </div>
        <div className="absolute -top-10 -right-10 opacity-10">
          <Zap className="w-24 h-24 text-primary-light animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Accelerating your business
            </span>
            <br />
            with smart software & AI
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At NetBrake, we build scalable digital solutions that adapt to your needs—helping 
            your business move faster, smarter, and stronger.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" className="group">
              Let's Build Together
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;