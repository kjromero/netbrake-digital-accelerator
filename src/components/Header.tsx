import { Button } from "@/components/ui/button";
import netbrakeLogo from "@/assets/netbrake-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container-wide flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <img 
            src={netbrakeLogo} 
            alt="NetBrake Logo" 
            className="h-8 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">NETBRAKE</span>
            <span className="text-xs text-primary font-medium -mt-1">THOUGHT OF GOOD</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#agrotech" className="text-muted-foreground hover:text-foreground transition-colors">
            AgroTech
          </a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
            Impact
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary text-primary-foreground hover:bg-primary-light shadow-purple hover:scale-105 hover:shadow-glow transition-all duration-300">
          Let's Build Together
        </Button>
      </div>
    </header>
  );
};

export default Header;