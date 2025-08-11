import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import CountdownTimer from '@/components/CountdownTimer';
import ImageCarousel from '@/components/ImageCarousel';
import PartnersSlider from '@/components/PartnersSlider';
import ContactForm from '@/components/ContactForm';
import heroBackground from '@/assets/hero-background.jpg';
import event1 from '@/assets/event-1.jpg';
import event2 from '@/assets/event-2.jpg';
import event3 from '@/assets/event-3.jpg';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Next event date - set to 30 days from now
  const nextEventDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const carouselImages = [
    { id: 1, src: event1, alt: 'Elegant corporate dinner with networking' },
    { id: 2, src: event2, alt: 'Modern business cocktail party' },
    { id: 3, src: event3, alt: 'Luxurious corporate gala' },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 sophisticated-bg" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className={`font-display text-4xl md:text-7xl font-bold mb-6 elegant-glow transition-all duration-1000 ${
            isVisible ? 'animate-elegant-fade' : 'opacity-0 translate-y-10'
          }`}>
            Elegance and Refinement
            <br />
            <span className="text-primary animate-elegant-glow">in Every Detail</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-elegant-slide' : 'opacity-0 translate-y-10'
          }`}>
            Sophisticated evenings blending elegance, exclusivity, and unforgettable experiences
            for exceptional professionals.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-elegant-slide' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-transform duration-300 shadow-gold px-8 py-6 text-lg font-semibold"
            >
              Join the Experience
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('events')}
              className="border-primary/50 bg-card/20 backdrop-blur-elegant hover:bg-primary/20 px-8 py-6 text-lg"
            >
              Discover Events
            </Button>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-elegant-fade' : 'opacity-0'
          }`}>
            <p className="text-sm uppercase tracking-wide text-primary mb-4 font-semibold">
              Next Event in
            </p>
            <CountdownTimer targetDate={nextEventDate} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-elegant-fade">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 elegant-glow">
                Where <span className="text-primary">Connections</span>
                <br />Meet Elegance
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Here, networking transforms into a seamless blend of sophistication 
                and inspiration, creating lasting impressions and valuable relationships.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Users, text: "Exclusive network of executives and entrepreneurs" },
                  { icon: Star, text: "Exceptional gastronomic experiences" },
                  { icon: Calendar, text: "Carefully orchestrated monthly events" },
                  { icon: MapPin, text: "Prestigious venues with refined atmosphere" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-foreground/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-elegant-slide">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 elegant-glow">
              The Art of <span className="text-primary">Exclusive Evenings</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Every detail is designed to inspire, offering a perfect balance 
              between sophistication and opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gastronomy & Entertainment",
                description: "Indulge in exquisite gastronomy crafted to delight the senses, paired with captivating performances and music, creating an unforgettable experience where elegance meets artistry.",
                icon: "🍽️",
              },
              {
                title: "Premium Networking",
                description: "Each event gathers a select audience of accomplished individuals, offering the perfect environment to exchange ideas, foster collaboration, and celebrate shared successes.",
                icon: "🤝",
              },
              {
                title: "Unique Experiences",
                description: "Unforgettable moments where every detail reflects elegance, from the exquisite dining to the inspiring ambiance, crafted for those who aspire for more.",
                icon: "✨",
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-elegant border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-gentle-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 elegant-glow">
              <span className="text-primary">Gallery</span> of Experiences
            </h2>
            <p className="text-lg text-foreground/80">
              Discover the exceptional moments from our past events
            </p>
          </div>
          
          <ImageCarousel images={carouselImages} />
          
          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-secondary hover:scale-105 transition-transform duration-300 shadow-elegant"
            >
              Join the Next Event
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 elegant-glow">
              Our <span className="text-primary">Partners</span>
            </h2>
            <p className="text-lg text-foreground/80">
              United by excellence and shared vision
            </p>
          </div>
          
          <PartnersSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 elegant-glow">
              Join the <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Fill out the form and our team will contact you with more details
            </p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-elegant border-border/50">
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-elegant border-t border-border/50 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-display font-bold text-2xl mb-4 elegant-glow">
                Les Nuits <span className="text-primary">Corpo</span>
              </div>
              <p className="text-foreground/70">
                Exclusive evenings designed to inspire and connect 
                in a sophisticated setting.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-foreground/80">
                <p>contact@lesnuitscorpo.com</p>
                <p>+212 663 031 058</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-transparent border-primary/50 hover:bg-primary/20"
                  onClick={() => window.open('https://www.facebook.com/', '_blank')}
                >
                  <span className="sr-only">Facebook</span>
                  📘
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-transparent border-primary/50 hover:bg-primary/20"
                  onClick={() => window.open('https://www.instagram.com/lesnuits.corpo/', '_blank')}
                >
                  <span className="sr-only">Instagram</span>
                  📷
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center text-foreground/60">
            <p>&copy; 2025 Les Nuits Corpo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;