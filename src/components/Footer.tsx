import { Heart, Github, Linkedin, Mail } from "lucide-react";
import netbrakeLogo from "@/assets/netbrake-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Services: [
      "Mobile Development",
      "AI & Automation", 
      "System Integrations",
      "UX/UI Design"
    ],
    Company: [
      "About Us",
      "AgroTech Focus", 
      "Social Impact",
      "Careers"
    ],
    Resources: [
      "Blog",
      "Case Studies",
      "Documentation",
      "Support"
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={netbrakeLogo} 
                alt="NetBrake Logo" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">NETBRAKE</span>
                <span className="text-xs text-primary font-medium -mt-1">THOUGHT OF GOOD</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Accelerating business processes through smart software, AI solutions, 
              and digital transformation. Building the future of technology in Latin America.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@netbrake.co" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NetBrake. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Colombia</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;