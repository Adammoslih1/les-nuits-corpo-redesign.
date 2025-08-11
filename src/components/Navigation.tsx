import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-elegant shadow-elegant border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display font-bold text-2xl elegant-glow">
            Les Nuits <span className="text-primary">Corpo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'Events', id: 'events' },
              { label: 'Gallery', id: 'gallery' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="default"
            className="bg-gradient-primary hover:scale-105 transition-transform duration-300 shadow-gold"
          >
            Join Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;